const Settings = () => {
  return (
    <div className="ml-1 h-full">
      <div className="fixed p-3 bg-white w-[200px] h-[100vh] top-0">
        <span className="font-semibold">Settings</span>
      </div>
      <div className="relative bg-white p-3 h-full left-[210px] w-[calc(100%-210px)]">
        <div className="flex gap-2 flex-col">
          <h1>Profile</h1>
          <div>Form</div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
