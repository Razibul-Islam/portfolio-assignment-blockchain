export default function WhatDoIDo() {
  return (
    <div className="px-6 md:px-20 py-16 bg-white text-[#132238]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="flex-1 mb-8 md:mb-0 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            What I Do?
          </h1>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            harum eius dolorem in eos doloribus suscipit commodi ex dolor
            ratione, magnam exercitationem quibusdam ipsa! Ipsum sed facere,
            fugiat est voluptas ea optio. Sint, delectus laudantium.
          </p>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            dignissimos quaerat animi expedita nulla doloribus.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300">
            Say Hello!
          </button>
        </div>

        <div className="flex-1 flex flex-col gap-8 w-full">
          <div className="bg-gray-50 p-6 rounded-r-2xl shadow-xl hover:shadow-lg transition duration-300 relative">
            <div className="absolute w-2 h-full left-0 bottom-0 bg-blue-500 rounded-l-2xl"></div>
            <h3 className="text-xl font-semibold mb-2">User Experience (UX)</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos tempora quaerat culpa dicta id quae doloremque
              voluptate exercitationem!
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2">User Interface (UI)</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos tempora quaerat culpa dicta id quae doloremque
              voluptate exercitationem!
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Blockchain Development
            </h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos tempora quaerat culpa dicta id quae doloremque
              voluptate exercitationem!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
