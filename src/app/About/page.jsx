"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AboutPage = () => {
  const router = useRouter();

  const isLogin = false;

  const handleRouter = () => {
    if (isLogin) {
      router.push("/About/Address");
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      <h2>Hello about pages</h2>
      <button type="button" onClick={handleRouter}>
        Routing
      </button>
    </div>
  );
};

export default AboutPage;
