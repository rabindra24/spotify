import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

const Dashboard = async () => {
  const session = await auth();

  return (
    <div>
      <h2>Dashboard</h2>
      {JSON.stringify(session?.user)}

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">SignOut</Button>
      </form>
    </div>
  );
};

export default Dashboard;
