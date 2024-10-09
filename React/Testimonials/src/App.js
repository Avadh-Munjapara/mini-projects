import "./App.css";
import Testimonials from "./components/Testimonials";
import reviews from "./data";
function App() {
  return (
    <div className="bg-[#E5E7EB] min-h-screen flex flex-col gap-10 justify-center">
      <div>
      <h1 className="text-center text-4xl font-bold">Our Testimonials</h1>
      <div className="w-44 h-1 mt-2 bg-[#8B5CF6] mx-auto"></div>
      </div>
      <Testimonials reviews={reviews}/>
    </div>
  );
}

export default App;
