import { GiArchiveResearch } from "react-icons/gi";
import { IoMdAnalytics } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";
import { HiMiniRocketLaunch } from "react-icons/hi2";

export default function WorkProcess() {
  return (
    <div className="px-6 md:px-20 py-20 bg-gray-200 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
      <div className="flex-1 text-left">
        <h1 className="text-4xl font-bold text-[#132238] mb-4">Work Process</h1>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          quo in eveniet dolorem at quos magni aperiam, quibusdam esse quod
          numquam repellat odio voluptatem? Nostrum dignissimos error beatae
          molestiae alias tenetur quibusdam voluptatibus quod odio?
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          praesentium quas dignissimos quos fuga saepe!
        </p>
      </div>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
          <div className="text-blue-600 text-4xl mb-4">
            <GiArchiveResearch />
          </div>
          <h2 className="text-xl font-semibold text-[#132238] mb-2">
            1. Research
          </h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            explicabo id culpa iure.
          </p>
        </div>
        <div className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
          <div className="text-blue-600 text-4xl mb-4">
            <IoMdAnalytics />
          </div>
          <h2 className="text-xl font-semibold text-[#132238] mb-2">
            2. Analysis
          </h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            explicabo id culpa iure.
          </p>
        </div>
        <div className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
          <div className="text-blue-600 text-4xl mb-4">
            <MdDesignServices />
          </div>
          <h2 className="text-xl font-semibold text-[#132238] mb-2">
            3. Design
          </h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            explicabo id culpa iure.
          </p>
        </div>
        <div className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
          <div className="text-blue-600 text-4xl mb-4">
            <HiMiniRocketLaunch />
          </div>
          <h2 className="text-xl font-semibold text-[#132238] mb-2">
            4. Launch
          </h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            explicabo id culpa iure.
          </p>
        </div>
      </div>
    </div>
  );
}
