import logo from "./logo.svg";
import "./App.css";
import allCountryScores from "./scores";
import HighScoreTable from "./HighScoreTable";
// import SinglePlayerScore from "./SinglePlayerScore";

allCountryScores.sort((a, b) => {
  return a.name < b.name ? -1 : 1;
});

function App() {
  return (
    <div className="App">
      <HighScoreTable allCountryScores={allCountryScores} />
      {/* <SinglePlayerScore allCountryScores={allCountryScores} /> */}
    </div>
  );
}

export default App;
