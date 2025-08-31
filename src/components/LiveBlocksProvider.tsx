"use client";
import { LiveblocksProvider } from "@liveblocks/react/suspense";
function LiveBlocksProvider({ children }: { children: React.ReactNode }) {
  if (!process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLISHABLE_KEY) {
    throw new Error("NEXT_PUBLIC_LIVEBLOCKS_PUBLISHABLE_KEY is not defined");
  }

  return (
    <LiveblocksProvider throttle={16} authEndpoint={"/auth-endpoint"}>
      {children}
    </LiveblocksProvider>
  );
}

export default LiveBlocksProvider;
