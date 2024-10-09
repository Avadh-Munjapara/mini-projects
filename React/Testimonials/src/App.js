import "./App.css";
import Testimonials from "./components/Testimonials";
import reviews from "./data";
function App() {
  return (
    <div>
      <h1>Our Testimonials</h1>
      <div></div>
      <Testimonials reviews={reviews}/>
    </div>
  );
}

export default App;
