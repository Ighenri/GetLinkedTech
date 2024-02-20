import BigIdea from "./Components/BigIdea";
import Criteria from "./Components/Criteria";
import Faq from "./Components/Faq";
import Header from "./Components/Header";
import HeroPage from "./Components/HeroPage";
import Rules from "./Components/Rules"
import Timeline from "./Components/Timeline";
import Award from "./Components/Award";
import Sponsors from "./Components/Sponsors";
import Policy from "./Components/Policy";
import Footer from "./Components/Footer";
// import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App w-screen bg-dark-purple">
      <Header />
      <HeroPage />
      <BigIdea/>
      <Rules/>
      <Criteria/>
      <Faq />
      <Timeline />
      <Award/>
      <Sponsors/>
      <Policy/>
      <Footer/>
      {/* <Contact/> */}
    </div>
  );
}

export default App;
