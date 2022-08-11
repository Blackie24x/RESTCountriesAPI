import Header from "./components/Header";
import { HashRouter, Routes, Route } from "react-router-dom";
import CountriesPanel from "./components/CountriesPanel";
import Country from "./components/Country";
function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<CountriesPanel />} />
          <Route path="/:id" element={<Country />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
