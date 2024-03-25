import Navbar from "../ui/main/navbar";
import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="gradient-background min-h-screen">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default AuthLayout;
