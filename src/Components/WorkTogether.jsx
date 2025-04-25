export default function WorkTogether() {
  return (
    <div className="px-6 md:px-20 py-16 bg-[#132238] text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-snug">
        Do you have a Project Idea?
        <br />
        <span className="text-blue-400">Let's discuss your Project!</span>
      </h1>
      <p className="text-gray-300 mb-8 text-base md:text-lg">
        There are many variations of passages of Lorem Ipsum available,
        <br className="hidden md:block" />
        but the majority have suffered alteration.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold py-3 px-8 rounded-md transition duration-300">
        Let's work together
      </button>
    </div>
  );
}
