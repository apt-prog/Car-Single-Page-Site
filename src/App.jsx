import "./App.css";
import ContactUs from "./Components/contactus";
import Footer_Sec from "./Components/footer";
import Hero_Sec from "./Components/hero";
import Inventry from "./Components/inventry";
import NavBar from "./Components/navbar";
import Service_Sec from "./Components/service";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero_Sec />
      <Inventry />
      <Service_Sec />
      <ContactUs />
      <Footer_Sec />
    </div>
  );
}

export default App;
