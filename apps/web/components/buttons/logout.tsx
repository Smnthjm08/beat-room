"use client";

import { authClient } from "@workspace/auth/client";
import { Button } from "@workspace/ui/components/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully");
    router.push("/signin");
  };

  return (
    <Button
      variant={"destructive"}
      className="hover:cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}
