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

function App() {
  return (
    <div className="App w-screen">
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
    </div>
  );
}

export default App;
