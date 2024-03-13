import BigIdea from "./Components/BigIdea";
import Criteria from "./Components/Criteria";
import Faq from "./Components/Faq";
import Header from "./Components/Header";
import HeroPage from "./Components/HeroPage";
import Rules from "./Components/Rules";
import Timeline from "./Components/Timeline";
import Award from "./Components/Award";
import Sponsors from "./Components/Sponsors";
import Policy from "./Components/Policy";
import Footer from "./Components/Footer";
// import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App w-screen bg-dark-purple">
      {/* <Route path="/" element={<Header />} />
      <Route path="" element={<HeroPage />} />
      <Route path="" element={<BigIdea />} />
      <Route path="" element={ <Rules />} />
      <Route path="" element={<Criteria />} />
      <Route path="" element={  <Faq />} />
      <Route path="" element={ <Timeline />} />
      <Route path="" element={ <Award />} />
      <Route path="" element={ <Sponsors />} />
      <Route path="" element={<Policy />} />
      <Route path="" element={<Footer />} /> */}
  
      <Header />
      <HeroPage />
      <BigIdea />
      <Rules />
      <Criteria />
      <Faq />
      <Timeline />
      <Award />
      <Sponsors />
      <Policy />
      <Footer />
    </div>
  );
}

export default App;
