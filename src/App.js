import { Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import SelectMenu from "./pages/SelectMenu";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/select-menu" element={<SelectMenu />} />
      </Routes>
    </div>
  );
}

export default App;
