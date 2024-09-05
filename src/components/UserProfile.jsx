import TabSection from "./TabSection";
import GallarySection from "./GallarySection";

const UserProfile = () => {
  return (
    <div className="min-h-screen flex justify-end p-6">
      {/* Left half screen empty */}
      <div className="w-1/2 hidden lg:block"></div>

      {/* Right half with two widgets */}
      <div className="w-full lg:w-1/2 flex flex-col space-y-6 ">
        {/* First Widget: Tabs Section */}
        <TabSection />

        {/* Second Widget: Gallery Section */}
        <GallarySection />
      </div>
    </div>
  );
};

export default UserProfile;
