import React from "react";
import Style from "./perfil.module.css";
import ImgJorge from "../../Images/Foto_cuadrada_Jorge.png";
import SocialMedia from "../SocialMedia/SocialMedia.jsx";
import Skills from "../Skills/Skills.jsx"

export default function Perfil() {
  const name = "Jorge";
  const lastName = "Andrade"
  return (
    <>
    <div className="tituloH2" id="aboutMe">
      <h2>About Me</h2>
    </div>
      <div className={Style.container} >
        <div className={Style.containerLeft}>
          <h3 className="tituloH2">{name + ' ' + lastName}</h3>
          <p>
            Full Stack Developer con formación como Ingeniero Industrial.
            Experiencias trabajando en NodeJS, React, Redux, SQL entre otras
            tecnologías del sector. Creador pagina web{" "}
            <a href="https://guiadeparche.com">guiadeparche.com</a> posicionada
            como #1 en SEO. Me destaco por pensamiento creativo, resolución de
            problemas, trabajo en equipo, comunicación y autonomía.
          </p>
        </div>
        <div className={Style.containerRight}>
          <img
            //className={Style["image-cropped-transform"]}
            className={Style.imgProfile}
            src={ImgJorge}
            alt="ProfesorJand Perfil Img"
          />
          <SocialMedia/>
        </div>
        
      </div>
    </>
  );
}
