import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import WhatDoIDo from "./Components/WhatDoIDo";
import WorkProcess from "./Components/WorkProcess";
import WorkTogether from "./Components/WorkTogether";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Banner />
      <WorkProcess />
      <Projects />
      <WorkTogether />
      <WhatDoIDo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
