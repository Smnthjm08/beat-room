import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const AddNew = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <div className="flex h-full items-center justify-center flex-col gap-2">
      <h1 className="text-3xl">AddNew Page</h1>
    </div>
  );
};

export default AddNew;
