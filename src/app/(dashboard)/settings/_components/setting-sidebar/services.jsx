import { ChevronUp } from "lucide-react";

const Services = () => {
  return (
    <div className="w-full">
      <div className="space-y-2">
        <div className="group relative">
          <input
            type="checkbox"
            id="accordion-toggle"
            className="hidden peer"
          />
          <label
            htmlFor="accordion-toggle"
            className="w-full cursor-pointer flex justify-between items-center"
          >
            Services
          </label>
          <ChevronUp className="h-2 absolute w-2 left-[90%] top-[2px] transition-transform duration-200 ease-in-out peer-checked:rotate-180" />
          <div className="overflow-hidden hidden peer-checked:block mt-2">
            <ul className="list-disc pl-4 space-y-2">
              <li className="cursor-pointer">Service List:</li>
              <li className="cursor-pointer">Service Availability:</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
