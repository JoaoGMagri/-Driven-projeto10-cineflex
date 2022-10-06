import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

import GlobalStyle from "./components/GlobalStyle";

import Head from "./components/Head";
import Home from "./pages/Home";
import Sessions from "./pages/Sessions";
import Seats from "./pages/Seats";
import Success from "./pages/Success";

export default function App() {

  const [obj, setObj] = useState(false);

  return (
    <BrowserRouter>

      <GlobalStyle />
      <Head />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:idFilme" element={<Sessions />} />
        <Route path="/assentos/:idSessao" element={<Seats setObj={setObj}/>} />
        <Route path="/sucesso" element={<Success obj={obj}/>} />

      </Routes>
      
    </BrowserRouter>
  );
}