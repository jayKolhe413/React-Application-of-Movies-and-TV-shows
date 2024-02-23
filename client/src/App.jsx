import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <div className="w-screen flex bg-[#1F1E24] h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
