import SettingSidebar from "./_components/setting-sidebar";

const SettingsLayout = ({ children }) => {
  return (
    <div className="ml-1 h-full relative">
      <SettingSidebar />
      <div className="relative bg-white p-3 h-full left-[210px] w-[calc(100%-210px)]">
        {children}
      </div>
    </div>
  );
};

export default SettingsLayout;
