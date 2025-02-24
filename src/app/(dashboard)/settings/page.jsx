import ProfileForm from "./_components/profile-form";

const Settings = () => {
  return (
    <div className="flex gap-2 flex-col w-[70%]">
      <span className="absolute top-[-60px] text-lg font-bold">Profile</span>
      <span className="font-semibold">Your Workshop profile</span>
      <ProfileForm />
    </div>
  );
};

export default Settings;
