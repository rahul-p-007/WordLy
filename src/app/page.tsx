import { ArrowLeftIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="flex items-center space-x-2 animate-bounce ">
        <ArrowLeftIcon className="w-12 h-12" />
        <h2 className="font-semibold">
          Get started with creating a new Document
        </h2>
      </main>
    </>
  );
}
