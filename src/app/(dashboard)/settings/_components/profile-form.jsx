"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WorkShopLogo from "./workshop-logo";

const ProfileForm = () => {
  return (
    <form>
      <div className="space-y-2">
        <WorkShopLogo />
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-2">
              <Input label="ID" className="w-1/2" />
            </div>
            <div className="flex gap-1 col-span-2">
              <Input label="Workshop code" />
              <Input label="Workshop name" />
            </div>
            <div className="flex gap-1 col-span-2">
              <Input label="Workshop phone" />
              <Input label="Workshop landline" placeholder="eg: 03312345678" />
            </div>
            <div className="col-span-2">
              <Input
                label="Notification email"
                placeholder="This email will receive notifications"
                className="w-1/2"
              />
            </div>
            <div className="col-span-2">
              <Input label="Workshop address" />
            </div>

            <div className="flex gap-1 col-span-2">
              <Input label="Workshop suburb" />
              <Input
                label="Workshop state"
                placeholder="eg: Australia/Melbourne"
              />
            </div>
            <Input label="Workshop postcode" />
          </div>
          <div>
            <Button className="float-right">Submit Changes</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
