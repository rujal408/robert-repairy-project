import React from "react";
import SidebarPanel from "@/container/side-bar";
import AppHeader from "@/layouts/app-header";

const ApplicationLayout = ({ children }) => {
  return (
    <div className="flex bg-background">
      <SidebarPanel />
      <main className="flex flex-col w-full">
        <AppHeader />
        {children}
      </main>
    </div>
  );
};

export default ApplicationLayout;
