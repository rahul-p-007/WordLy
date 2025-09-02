"use client";
import * as Y from "yjs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Markdown from "react-markdown";
import { Button } from "./ui/button";
import React, { useState, useTransition } from "react";
import { BotIcon, LanguagesIcon } from "lucide-react";
import { toast } from "sonner";

type Language =
  | "english"
  | "hindi"
  | "spanish"
  | "french"
  | "german"
  | "italian"
  | "chinese"
  | "arabic"
  | "japanese"
  | "korean"
  | "portuguese"
  | "russian";

const languages: Language[] = [
  "english",
  "hindi",
  "spanish",
  "french",
  "german",
  "italian",
  "chinese",
  "arabic",
  "japanese",
  "korean",
  "portuguese",
  "russian",
];

function TranslateDocument({ doc }: { doc: Y.Doc }) {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<string>("");
  const [summary, setSummary] = useState("");
  const [question, setQuestion] = useState("");
  const [isPending, startTransition] = useTransition();

  // Helper function to extract the clean text from the AI's structured response
  const extractTextFromResult = (result: string): string => {
    try {
      // Try parsing JSON
      const parsed = JSON.parse(result);
      // Keep only text fields
      return Object.values(parsed)
        .filter((val) => typeof val === "string")
        .join(" ");
    } catch {
      // Fallback: regex cleanup
      return result
        .replace(/isToggleable="[^"]*"/g, "")
        .replace(/level="[^"]*"/g, "")
        .replace(/textAlignment="[^"]*"/g, "")
        .replace(/\s+/g, " ")
        .trim();
    }
  };

  const cText = (input: string) => {
    // Remove <blockgroup.heading> and </blockgroup.heading>
    let text = input.replace(/<\/?blockgroup\.heading>/g, "");
    // Remove unwanted attributes like isToggleable="false" or textAlignment="left"
    text = text.replace(/\s+\w+="[^"]*"/g, "");
    return text.trim();
  };

  const handleAskQuestion = async (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      const documentData = doc.get("document-store").toJSON();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/translateDocument`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            documentData,
            targetLang: language,
          }),
        }
      );

      if (res.ok) {
        const { translated_text } = await res.json();
        // Use the helper function to parse the response
        const cleanText = extractTextFromResult(translated_text);
        // cText(cleanText);

        // Set the summary with the clean, extracted text
        setSummary(cleanText);
        toast.success("Document translated successfully");
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button asChild variant="outline">
        <DialogTrigger>
          <LanguagesIcon>Translate</LanguagesIcon>
        </DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Translate the Document</DialogTitle>
          <DialogDescription>
            Select a language and AI will translate a summary of the document in
            the selected language.
          </DialogDescription>
          <hr className="mt-5" />

          {question && <p className="mt-5 text-gray-500">Q:{question}</p>}
        </DialogHeader>

        {summary && (
          <div className="flex flex-col items-start max-h-96 overflow-y-scroll gap-2 bg-gray-100 p-5">
            <div className="flex">
              <BotIcon className="w-10 flex-shrink-0" />
              <p className="font-bold">
                AI {isPending ? "is thinking..." : "Says"}
              </p>
            </div>
            {isPending ? "Thinking" : <Markdown>{summary}</Markdown>}
          </div>
        )}

        <form onSubmit={handleAskQuestion} className="flex gap-2">
          <Select
            value={language}
            onValueChange={(value) => setLanguage(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>

            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang} value={lang}>
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button type="submit" disabled={!language || isPending}>
            {isPending ? "Translating..." : "Translate"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default TranslateDocument;
