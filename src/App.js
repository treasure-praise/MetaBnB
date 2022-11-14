import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlacesToStay from "./pages/PlacesToStay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PlacesToStay" element={<PlacesToStay />} />
      </Routes>
    </Router>
  );
}

export default App;
