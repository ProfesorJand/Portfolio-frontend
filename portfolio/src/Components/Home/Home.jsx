import React from "react";
import Perfil from "../Perfil/Perfil.jsx";
import Proyects from "../Proyects/Proyects.jsx";
import Contact from "../Contact/Contact.jsx";
import "./home.css";

export default function Home() {
  return (
    <>
        <Perfil />
        <Proyects />
        <Contact />
    </>
  );
}
