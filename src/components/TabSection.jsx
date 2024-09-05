import { useState } from "react";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="p-10 bg-[#363C43] rounded-lg shadow-md relative">
      {/* Left-side icons */}
      <div className="absolute left-2 top-1/4 transform -translate-y-1/2 space-y-20">
        <img src="/question.svg" alt="Help" className="h-6 w-6" />
        <img src="/menu.svg" alt="Menu" className="h-6 w-6 " />
      </div>

      {/* Tabs */}
      <div className="flex justify-between bg-black p-2 mb-4 rounded-full overflow-hidden">
        <button
          className={`py-2 px-4 text-xs sm:text-sm ${
            activeTab === "about"
              ? "border-2 border-[#28292F] bg-[#28292F] text-white rounded-full"
              : "text-[#A3ADB2]"
          }`}
          onClick={() => setActiveTab("about")}
        >
          About Me
        </button>
        <button
          className={`py-2 px-4 text-xs sm:text-sm ${
            activeTab === "experience"
              ? "border-2 border-[#28292F] bg-[#28292F] text-white rounded-full"
              : "text-[#A3ADB2]"
          }`}
          onClick={() => setActiveTab("experience")}
        >
          Experiences
        </button>
        <button
          className={`py-2 px-4 text-xs sm:text-sm ${
            activeTab === "recommended"
              ? "border-2 border-[#28292F] bg-[#28292F] text-white rounded-full"
              : "text-[#A3ADB2]"
          }`}
          onClick={() => setActiveTab("recommended")}
        >
          Recommended
        </button>
      </div>

      {/* Content based on active tab */}
      {activeTab === "about" && (
        <div className="p-2">
          <p className="text-[#969696]">
            Hello! I&apos;m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now.
          </p>
          <p className="text-[#969696] mt-2">
            I was born and raised in Albany, NY & have been living in Santa
            Carla for the past 10 years my wife Tiffany and my 4-year-old twin
            daughters—Emma and Ella. Both of them are just starting school, so
            my calendar is usually blocked between 9-10 AM. This is a...
          </p>
        </div>
      )}
      {activeTab === "experience" && (
        <div className="p-2">
          <p className="text-[#969696]">
            I have a wealth of experience in sales and customer relationship
            management, which spans over 5 years.
          </p>
          <p className="text-[#969696] mt-2">
            I’ve been in sales for over 5 years, focusing on customer
            relationships and personalized solutions. Currently, at Salesforce,
            I manage a large client portfolio and consistently exceed targets by
            leveraging CRM tools
          </p>
        </div>
      )}
      {activeTab === "recommended" && (
        <div className="p-2">
          <p className="text-[#969696] mt-2">
            I&apos;m recommended by many customers for my attention to detail
            and customer service excellence.
          </p>
          <p className="text-[#969696] mt-2">
            Highly recommended by my clients and colleagues for delivering
            exceptional service and consistently exceeding expectations. I’m
            known for my dedication, problem-solving skills, and ability to
            build long-lasting relationships.
          </p>
        </div>
      )}
    </div>
  );
};

export default TabSection;
