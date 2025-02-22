const SettingsLayout = ({ children }) => {
  return (
    <div className="ml-1 h-full relative">
      <div className="fixed p-3 bg-white w-[200px] h-[100vh] top-0">
        <span className="font-semibold">Settings</span>
        <div className="space-y-5">
          <span>Business Hours</span>
          <span>Services</span>
        </div>
      </div>
      <div className="relative bg-white p-3 h-full left-[210px] w-[calc(100%-210px)]">
        {children}
      </div>
    </div>
  );
};

export default SettingsLayout;
