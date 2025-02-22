import { Button } from "@/components/ui/button";
import { Bell, SearchIcon, Sun } from "lucide-react";

const AppHeader = () => {
  return (
    <div className="flex justify-between px-3 py-2">
      <div />
      <div className="flex gap-1 items-center">
        <div className="rounded-full h-fit p-1 bg-white text-blue-600">
          <SearchIcon height="16px" width="16px" />
        </div>
        <div className="rounded-full h-fit p-1 bg-white text-blue-600">
          <Bell height="16px" width="16px" />
        </div>
        <Button className="bg-white text-blue-600 rounded-none font-semibold">
          +&nbsp;&nbsp;Booking
        </Button>

        <span className="text-blue-600 ml-2 cursor-pointer">
          <Sun height="20px" width="20px" />
        </span>
      </div>
    </div>
  );
};

export default AppHeader;
