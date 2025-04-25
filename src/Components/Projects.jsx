import img1 from "/1.jpg";
import img2 from "/2.jpg";
import img3 from "/3.jpg";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Chain Fund",
      description:
        "A decentralized crowdfunding platform powered by smart contracts.",
      img: img1,
    },
    {
      id: 2,
      title: "Crypto Wallet",
      description: "A secure cryptocurrency wallet application.",
      img: img2,
    },
    {
      id: 3,
      title: "Smart Contract Auditor",
      description: "An automated smart contract auditing tool.",
      img: img3,
    },
    {
      id: 4,
      title: "Tokenomics",
      description:
        "A platform for analyzing token economics and token distribution.",
      img: img2,
    },
    {
      id: 5,
      title: "NFT Marketplace",
      description: "A decentralized marketplace for buying and selling NFTs.",
      img: img3,
    },
    {
      id: 6,
      title: "DeFi Lending",
      description: "A decentralized finance platform for peer-to-peer lending.",
      img: img1,
    },
  ];
  return (
    <div className="px-6 md:px-20 py-16 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#132238] mb-4">Projects</h1>
        <p className="text-gray-600 text-base md:text-lg">
          There are many variations of passages of Lorem Ipsum available,
          <br className="hidden md:block" />
          but the majority have suffered alteration.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img
              src={project.img}
              alt="Project"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-blue-600 font-medium mb-1">
                Blockchain Project
              </p>
              <h3 className="text-xl font-semibold text-[#132238] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>
              <button className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-4 rounded-md transition duration-300 cursor-pointer">
                Case Study
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 cursor-pointer">
          More Project
        </button>
      </div>
    </div>
  );
}
