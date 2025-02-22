import SidebarPanel from "@/container/side-bar";
import AppHeader from "@/layouts/app-header";
import "react-big-calendar/lib/css/react-big-calendar.css";

const ApplicationLayout = ({ children }) => {
  return (
    <div className="flex bg-background">
      <div className="sticky min-w-[220px] p-2 h-[100vh] bg-white">
        <SidebarPanel />
      </div>
      <main className="flex flex-col w-full">
        <AppHeader />
        {children}
      </main>
    </div>
  );
};

export default ApplicationLayout;
