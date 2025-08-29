"use client";
import { useTransition } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createNewDocument } from "@/action/actions";

function NewDocumentButton() {
  const [isPending, startTranstion] = useTransition();
  const router = useRouter();
  const handleCreateNewDocument = () => {
    startTranstion(async () => {
      const { docId } = await createNewDocument();
      router.push(`/doc/${docId}`);
    });
  };
  return (
    <Button onClick={handleCreateNewDocument} disabled={isPending}>
      {isPending ? "Creating..." : "New Doucment"}
    </Button>
  );
}
export default NewDocumentButton;
