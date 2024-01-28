import BigIdea from "./Components/BigIdea";
import Criteria from "./Components/Criteria";
import Header from "./Components/Header";
import HeroPage from "./Components/HeroPage";
import Rules from "./Components/Rules"
function App() {
  return (
    <div className="App w-screen">
      <Header />
      <HeroPage />
      <BigIdea/>
      <Rules/>
      <Criteria/>
    </div>
  );
}

export default App;
