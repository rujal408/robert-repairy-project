import { Profile } from "@/assets/icons";
import { Upload } from "lucide-react";
import Image from "next/image";

const WorkShopLogo = () => {
  return (
    <div className="space-y-2">
      <span className="text-xs text-gray-500">Add your business logo.</span>
      <Image
        src={Profile}
        className="h-[120px] w-[120px] rounded-full shadow-md p-[4px]"
        height={100}
        width={100}
        alt=""
      />
      <div>
        <label className="flex gap-1 px-3 py-[4px] bg-primary w-fit rounded text-white text-sm items-center">
          <Upload size="12px" />
          Upload photo
          <input type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
};

export default WorkShopLogo;
