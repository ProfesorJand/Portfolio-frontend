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
            <span className={Style.spanText}>Full Stack Developer</span> con formación como <span className={Style.spanText}>Ingeniero Industrial</span>.
            Experiencias trabajando en <span className={Style.spanText}>NodeJS</span>, <span className={Style.spanText}>React</span>, <span className={Style.spanText}>Redux</span>, <span className={Style.spanText}>SQL</span> entre otras
            tecnologías del sector. Creador pagina web{" "}
            <a className={Style.spanText} href="https://guiadeparche.com">guiadeparche.com</a> posicionada
            como <span className={Style.spanText}>#1</span> en <span className={Style.spanText}>SEO</span>. Me destaco por pensamiento creativo, resolución de
            problemas, trabajo en equipo, comunicación y autonomía.
          </p>
          <SocialMedia/>
        </div>
        <div className={Style.containerRight}>
          <img
            //className={Style["image-cropped-transform"]}
            className={Style.imgProfile}
            src={ImgJorge}
            alt="ProfesorJand Perfil Img"
          />
          
        </div>
        
      </div>
    </>
  );
}
