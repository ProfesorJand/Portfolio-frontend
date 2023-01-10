import Style from "./skills.module.css";

export default function Skills() {
  //https://icons8.com/
  const skills = {
    Frontend: [
      {
        skillName: "React",
        urlImage: "https://img.icons8.com/officel/80/null/react.png",
      },
      {
        skillName: "Boostrap",
        urlImage: "https://img.icons8.com/color/48/null/bootstrap.png",
      },
      {
        skillName: "CSS3",
        urlImage: "https://img.icons8.com/color/48/null/css3.png",
      },
      {
        skillName: "HTML5",
        urlImage: "https://img.icons8.com/color/48/null/html-5--v1.png",
      },
      {
        skillName: "Javascript",
        urlImage: "https://img.icons8.com/color/48/null/javascript--v1.png",
      },
      {
        skillName: "Redux",
        urlImage: "https://img.icons8.com/color/48/null/redux.png",
      },
    ],

    Backend: [
      {
        skillName: "Github",
        urlImage: "https://img.icons8.com/sf-black-filled/64/null/github.png",
      },
      {
        skillName: "MongoDB",
        urlImage: "https://img.icons8.com/color/48/null/mongodb.png",
      },
      {
        skillName: "Node JS",
        urlImage: "https://img.icons8.com/fluency/48/null/node-js.png",
      },
      {
        skillName: "Postgres",
        urlImage: "https://img.icons8.com/color/48/null/postgreesql.png",
      },
      {
        skillName: "MySQL",
        urlImage: "https://img.icons8.com/color/48/null/mysql-logo.png",
      },
      {
        skillName: "Wordpress",
        urlImage: "https://img.icons8.com/nolan/64/wordpress.png",
      },
    ],
    Soft: [
      {
        skillName: "Photoshop",
        urlImage:
          "https://img.icons8.com/color/48/null/adobe-photoshop--v1.png",
      },
      {
        skillName: "DaVinci Resolve",
        urlImage: "https://img.icons8.com/color/48/null/davinci-resolve.png",
      },
      {
        skillName: "OBS",
        urlImage: "https://img.icons8.com/ios-filled/50/null/obs-studio.png",
      },
    ],
  };
  return (
    <>
        <div className="tituloH2" id="contact">
        <h2>Skills</h2>
        </div>
      <div className={Style.container}>
        {Object.keys(skills).map((skill) => {
          return (
            <>
              <h2 className={Style.titulo}>{skill}</h2>
              <div className={Style.containerSkills}>
                {skills[skill].map((s) => {
                  return (
                    <div className={Style.skill}>
                      <img
                        className={Style.imgSkills}
                        src={s.urlImage}
                        alt={"Logo " + s.skillName}
                      ></img>
                      <p>{s.skillName}</p>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
