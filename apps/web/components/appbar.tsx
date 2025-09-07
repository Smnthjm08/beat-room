"use client";

import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
import { LogoutButton } from "./buttons/logout";
import { authClient } from "@workspace/auth/client";

export function Appbar() {
  const { data, isPending } = authClient.useSession();

  // Render skeleton until client determines session
  if (isPending) {
    return (
      <nav className="border-b flex flex-row h-14 px-8 sm:px-12 py-4 items-center">
        <h3 className="font-extrabold">resonate</h3>
      </nav>
    );
  }

  return (
    <nav className="border-b flex flex-row h-14 border-amber-100 justify-between px-8 sm:px-12 py-4 items-center">
      <Link href={"/"}>
        <h3 className="font-extrabold">resonate</h3>
      </Link>

      {!data?.user ? (
        <div className="space-x-2 sm:space-x-4">
          <Link href="/signup">
            <Button size="sm" variant="defaultpointer">
              Sign Up
            </Button>
          </Link>
          <Link href="/signin">
            <Button size="sm" variant="secondarypointer">
              Sign In
            </Button>
          </Link>
        </div>
      ) : (
        <LogoutButton />
      )}
    </nav>
  );
}
