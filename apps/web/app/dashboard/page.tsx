"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [user, setUser] = useState<{ name?: string } | null>(null);

  async function fetchUser() {
    try {
      // cookies like better-auth.session_token
      const response = await axios.get("http://localhost:5001/api/me", {
        withCredentials: true,
      });
      console.log("response at dashboard", response.data);
      setUser(response?.data);
    } catch (error: any) {
      console.log("error at dashboard", error.response?.data || error.message);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="font-bold text-4xl">Dashboard Page</div>
      <div className="text-blue-500 text-2xl">hello {user?.name}</div>
    </div>
  );
};

export default DashboardPage;
