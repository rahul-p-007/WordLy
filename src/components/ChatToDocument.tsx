"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as Y from "yjs";
import { FormEvent, useState, useTransition } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { BotIcon, MessageCircleCode, Sparkles } from "lucide-react";
import Markdown from "react-markdown";

function ChatToDocument({ doc }: { doc: Y.Doc }) {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [question, setQuestion] = useState("");
  const [summary, setSummary] = useState("");

  const handleAskQuestion = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return; // Prevent empty submissions

    setQuestion(input);
    setSummary(""); // Clear previous summary

    startTransition(async () => {
      const documentData = doc.get("document-store").toJSON();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/chatToDocument`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            documentData,
            question: input,
          }),
        }
      );

      if (res.ok) {
        const { message } = await res.json();
        setInput("");
        setSummary(message);
        toast.success("AI response received!");
      } else {
        toast.error("Failed to get a response. Please try again.");
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* --- STYLED TRIGGER BUTTON --- */}
      <DialogTrigger asChild>
        <Button variant="outline">
          <MessageCircleCode className="mr-2 h-4 w-4" />
          Chat to Document
          <span className="ml-2 inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            Beta
          </span>
        </Button>
      </DialogTrigger>
      {/* --- STYLED DIALOG CONTENT --- */}
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-500" />
            Chat to the Document
          </DialogTitle>
          <DialogDescription>
            This is a new feature! Ask a question and the AI will answer based
            on the document content. More improvements are coming soon.
          </DialogDescription>
        </DialogHeader>

        {/* --- Displays the user's question --- */}
        {question && (
          <div className="mt-4 rounded-lg border p-3 text-sm">
            <p className="font-medium">Your question:</p>
            <p className="text-gray-600 dark:text-gray-400">{question}</p>
          </div>
        )}

        {/* --- AI Response Area --- */}
        {(isPending || summary) && (
          <div className="mt-2 flex max-h-80 flex-col gap-2 overflow-y-auto rounded-lg border bg-gray-50 p-4 dark:bg-gray-900">
            <div className="flex items-center gap-2">
              <BotIcon className="h-6 w-6 flex-shrink-0 text-blue-500" />
              <p className="font-bold text-gray-800 dark:text-gray-200">
                AI Assistant
              </p>
            </div>
            <div className="prose prose-sm max-w-none text-gray-700 dark:text-gray-300">
              {isPending ? "Thinking..." : <Markdown>{summary}</Markdown>}
            </div>
          </div>
        )}

        <form onSubmit={handleAskQuestion} className="mt-4 flex gap-2">
          <Input
            type="text"
            placeholder="e.g., What is this document about?"
            className="flex-1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type="submit" disabled={!input || isPending}>
            {isPending ? "Asking..." : "Ask"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ChatToDocument;
