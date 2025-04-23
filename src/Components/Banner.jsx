import bannerImg from "/banner.png";

export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-24 px-6 md:px-20 py-12">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#132238] leading-tight mb-4">
          Hello, I'm
          <br />
          <span className="text-blue-600">Razibul Islam</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          I'm a Blockchain Developer based in Dhaka, Bangladesh, focused on
          building user-centric solutions across smart contracts, NFTs, and DeFi
          platforms.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300 mb-8">
          Say Hello!
        </button>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 text-center mt-5">
          <div>
            <p className="text-3xl font-bold text-[#132238]">1Y</p>
            <span className="text-gray-500">Experience</span>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#132238]">25+</p>
            <span className="text-gray-500">Projects Completed</span>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#132238]">19</p>
            <span className="text-gray-500">Happy Clients</span>
          </div>
        </div>
      </div>

      <div className="flex-1 mt-10 md:mt-0">
        <img
          src={bannerImg}
          alt="Banner"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
