import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MPubli from "../pages/MPubli";

import Registro from "../pages/Registro";
import Editar from "../pages/Editar";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/:id" element={<Private Item={Home} />} />
          <Route exact path="/mpubli" element={<Private Item={MPubli} />} />
          <Route exact path="/editar" element={<Private Item={Editar} />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
