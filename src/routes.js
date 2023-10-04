import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Sobre from "./Sobre";
import Usuario from "./Usuario";

const Routes = () => {
   return(
       <Routes>
           <Route element={<Home />} path="/" exact />
           <Route element={<Sobre />} path="/sobre" />
           <Route element={<Usuario />} path="/usuario" />
       </Routes>
   )
}

export default Routes;