"use client";

import { FormEvent, useEffect, useState, useTransition } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";
import Editor from "./Editor";
import useOwner from "@/lib/useOwner";
import DeleteDocument from "./DeleteDocument";

function Document({ id }: { id: string }) {
  const [data, loading, error] = useDocumentData(doc(db, "documents", id));
  const [input, setInput] = useState("");
  const [isUpdating, startTransition] = useTransition();
  const isOwner = useOwner();

  useEffect(() => {
    if (data) {
      setInput(data.title);
    }
  }, [data]);

  const updateTitle = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      startTransition(async () => {
        await updateDoc(doc(db, "documents", id), {
          title: input,
        });
      });
    }
  };
  return (
    <div className="flexx flex-col bg-white p-5 h-full ">
      <div className="flex max-w-6xl mx-auto justify-between pb-5">
        <form className="flex  space-x-2 flex-1 " onSubmit={updateTitle}>
          {/* upate title */}
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button disabled={isUpdating} type="submit">
            {isUpdating ? "Updating..." : "Update"}
          </Button>

          {/* IF */}
          {isOwner && (
            <>
              {/* Invite user  */}

              <DeleteDocument />
              {/* <p>I own this</p> */}
            </>
          )}
          {/* isOwner && Inviteuser,DeleteDocument */}
        </form>
      </div>
      <div>
        {/*  Manage User*/}

        {/* Avatar */}
      </div>
      <hr className="pb-10" />
      <Editor />
      {/* Collaborate editor */}
    </div>
  );
}

export default Document;
