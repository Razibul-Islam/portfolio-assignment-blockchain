import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
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
    </div>
  );
}

export default App;
