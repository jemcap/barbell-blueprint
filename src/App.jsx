import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import Home from "./routes/home/Home";
import About from "./routes/about/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
