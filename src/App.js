import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountriesPanel from "./components/CountriesPanel";
import Country from "./components/Country";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/RESTCountriesAPI"
          element={
            <div className="App">
              <Header></Header>
              <Routes>
                <Route path="/" element={<CountriesPanel />} />
                <Route path="/:id" element={<Country />} />
              </Routes>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
