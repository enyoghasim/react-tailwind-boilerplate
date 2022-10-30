import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

// Path: src/App.scss

// routes imports
import Home from "./pages/home";

// 404 page
import NotFound from "./pages/404";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
