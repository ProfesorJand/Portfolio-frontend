import React, { useEffect, useState } from "react";
import Style from "./proyects.module.css";
import axios from "axios";
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
                className={Style.container}
                key={r.id}
                onClick={() => {
                  window.open(r.html_url, "_blank");
                }}
              >
                <h2>{r.name}</h2>

                <p>{r.description}</p>
              </div>
            );
          })}
          {/* </Carousel> */}
      </div>
    </>
  );
}
