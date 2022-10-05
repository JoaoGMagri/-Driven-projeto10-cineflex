import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./components/GlobalStyle";

import Head from "./components/Head";
import Home from "./pages/Home";
import Sessions from "./pages/Sessions";
import Seats from "./pages/Seats";

export default function App() {
  return (
    <BrowserRouter>

      <GlobalStyle />
      <Head />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:idFilme" element={<Sessions />} />
        <Route path="/assentos/:idSessao" element={<Seats />} />

      </Routes>
      
    </BrowserRouter>
  );
}
