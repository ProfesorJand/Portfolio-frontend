import React, { useEffect, useState } from "react";
import Style from "./proyects.module.css";
import axios from "axios";
import { FaEye, FaStar, FaClone } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";

import { IconContext } from "react-icons";
//
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import {Carousel} from "react-responsive-carousel";

export default function Proyects() {
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    repos();
  }, []);

  function repos() {
    axios
      .get("https://api.github.com/users/ProfesorJand/repos")
      .then((r) => r.data)
      .then((r) => setRepo(r));
    return;
  }

  return (
    <>
      <div className="tituloH2" id="proyects">
        <h2>Github - Proyects</h2>
      </div>
      <div className={Style.containerProyects}>
        {/* <Carousel> */}
        {repo &&
          repo.map((r) => {
            return (
              <div
                className={Style.container + ` mySlides` + ` w3-animate-fading`}
                key={r.id}
                // onClick={() => {
                //   window.open(r.html_url, "_blank");
                // }}
              >
                <h2>{r.name}</h2>
                <img
                  className={`${Style.img_thumbnail}`}
                  src={`https://raw.githubusercontent.com/${r.full_name}/main/thumbnail.png`}
                  alt="Repo thumbnail"
                />
                <p>{r.description}</p>
                <div className={Style.Info_Actions_Github}>
                  <div>
                    <FaStar></FaStar> {r.stargazers_count}
                  </div>
                  <div>
                    <FaEye></FaEye> {r.watchers_count}
                  </div>
                  <div>
                    <BiGitRepoForked></BiGitRepoForked> {r.forks_count}
                  </div>
                  {/* <div>
                    <FaClone
                      onClick={() => {
                        const fork = document.getElementById(`${r.name}`);
                        fork.select();
                        document.execCommand("copy");
                        console.log("copiado")
                      }}
                    ></FaClone>
                <input type="text" value={r.clone_url} id={r.name} ></input>
                  </div> */}
                </div>

                <input
                  className={Style.InputGithub}
                  value="Go Repository"
                  type="button"
                  onClick={() => {
                    window.open(r.html_url, "_blank");
                  }}
                ></input>
              </div>
            );
          })}
        {/* </Carousel> */}
      </div>
    </>
  );
}
