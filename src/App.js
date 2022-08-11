import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountriesPanel from "./components/CountriesPanel";
import Country from "./components/Country";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<CountriesPanel />} />
          <Route path="/:id" element={<Country />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
