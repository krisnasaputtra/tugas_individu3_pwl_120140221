import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Message from "./routes/Message";
import RootLayout from "./layouts/RootLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/message" element={<Message />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
