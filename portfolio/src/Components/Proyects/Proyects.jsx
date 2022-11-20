import React, {useEffect, useState} from "react";
import Style from "./proyects.module.css";
import axios from "axios";

export default function Proyects() {
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    repos();
  }, [])
  
  function repos() {
    const repo = axios
      .get("https://api.github.com/users/ProfesorJand/repos")
      .then((r) => r.data).then(r=>setRepo(r));
      return
  }
  return (
    <>
    <div className="tituloH2" id="proyects">
    <h2>Github - Proyects</h2>
    </div>
    <div className={Style.containerProyects}>      
      {repo &&
        repo.map((r) => {
          return (
            <div className={Style.container} key={r.id}>
                <a href={r.html_url}>
                <h2>{r.name}</h2>
                </a>
                <p>{r.description}</p>
            </div>
          );
        })}
        </div>
    </>
  );
}
