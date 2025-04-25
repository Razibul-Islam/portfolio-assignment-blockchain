import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaBehance } from "react-icons/fa6";

export default function Contact() {
  const contact = [
    {
      title: "Address",
      text: "Savar, Dhaka",
    },
    {
      title: "My Email",
      text: "razibulislam665@gmail.com",
    },
    {
      title: "Call Me Now",
      text: "+8801400145618",
    },
  ];

  const logos = [IoLogoInstagram, FaLinkedin, FaBehance, FaFacebookSquare];
  return (
    <div className="relative overflow-visible">
      <div className="max-w-6xl mx-auto rounded-2xl shadow-2xl px-6 md:px-20 py-16 text-[#132238] relative z-10 -mb-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Let's discuss your Project
            </h1>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit, sapiente.
            </p>
            <div className="space-y-4">
              {contact.map((info, i) => (
                <div key={i} className="flex items-center gap-4">
                  <p className="text-xl text-blue-600">
                    <FaLocationDot />
                  </p>
                  <div>
                    <p className="text-gray-500">{info.title}</p>
                    <p className="font-semibold">{info.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-8 text-2xl text-blue-600">
              {logos.map((Logo, i) => (
                <Logo key={i} className="hover:text-blue-400 transition" />
              ))}
            </div>
          </div>
          <form className="space-y-6">
            <p className="text-sm text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
              qui nisi recusandae id, corporis nesciunt?
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="border-b border-gray-400 p-2 focus:outline-none focus:border-blue-600 placeholder-gray-500 bg-transparent"
              />
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="border-b border-gray-400 p-2 focus:outline-none focus:border-blue-600 placeholder-gray-500 bg-transparent"
              />
              <input
                type="text"
                id="location"
                placeholder="Location"
                className="border-b border-gray-400 p-2 sm:col-span-2 focus:outline-none focus:border-blue-600 placeholder-gray-500 bg-transparent"
              />
              <input
                type="number"
                id="budget"
                placeholder="Budget"
                className="border-b border-gray-400 p-2 focus:outline-none focus:border-blue-600 placeholder-gray-500 bg-transparent"
              />
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="border-b border-gray-400 p-2 focus:outline-none focus:border-blue-600 placeholder-gray-500 bg-transparent"
              />
            </div>

            <textarea
              id="message"
              rows="4"
              placeholder="Your Message"
              className="w-full border-b border-gray-400 p-2 focus:outline-none focus:border-blue-600 placeholder-gray-500 bg-transparent"
            ></textarea>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
