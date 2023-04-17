import React from "react";
import "./resources.css";
import IMG1 from "../../assets/dsa.jpeg";
import IMG2 from "../../assets/dbms.jpg";
import IMG3 from "../../assets/oops.jpg";
import IMG4 from "../../assets/os.png";
import IMG5 from "../../assets/capital-market.png";
import IMG6 from "../../assets/human-rights.jpg";

// data
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Data Structures and Algorithms",
    drive: "https://drive.google.com/drive/folders/1l1XQ3Lo-IiawkMbStIooUlfyDFLpA60Q?usp=share_link",
    demo: "https://www.youtube.com/watch?v=WQoB2z67hvY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA",
  },
  {
    id: 2,
    image: IMG2,
    title: "Database Management Systems",
    drive: "https://drive.google.com/drive/folders/1QnegLPI-l4RyAVdwKKN-ATIJourLhVZ9?usp=share_link",
    demo: "https://www.youtube.com/watch?v=kBdlM6hNDAE&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y",
  },
  {
    id: 3,
    image: IMG3,
    title: "Object Oriented Programming Languages",
    drive: "https://drive.google.com/drive/folders/1xFvGg59f74nFBIzQaMxnRA1D3Tk4rySC?usp=share_link",
    demo: "https://www.youtube.com/watch?v=BSVKUk58K6U&list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk",
  },
  {
    id: 4,
    image: IMG4,
    title: "Operating Systems",
    drive: "https://drive.google.com/drive/folders/1N9rirOeRBaWGgU94sJ0ChWXDTir3y9Av?usp=share_link",
    demo: "https://www.youtube.com/watch?v=bkSWJJZNgf8&list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p",
  },
  {
    id: 5,
    image: IMG5,
    title: "Capital Market Operations",
    drive: "https://drive.google.com/drive/folders/1fAiI5dG_Sn9tjJt7niTpyDHxpHxoegPt?usp=share_link",
    demo: "https://www.youtube.com/watch?v=3WI9RZODuag&list=PLxNHpNhDaEFJsuzKNrMbr_SESDCCLmSu4",
  },
  {
    id: 6,
    image: IMG6,
    title: "Basic Human Rights",
    drive: "https://drive.google.com/drive/folders/1o3eCpqXx-DI4diFHTEdoXfwm2QSIAyJu?usp=share_link",
    demo: "https://www.youtube.com/watch?v=hALD_yCe6gQ&list=PLGD9vEX2LVUKM9Ms1SbUJG43cjzWA7bAx",
  },
];

const Resources = () => {
  return (
    <section id="resources">
      <h5>Access Here</h5>
      <h2>Study Resources</h2>
      <div className="container resources__container">
        {data.map(({ id, image, title, drive, demo }) => {
          return (
            <article key={id} className="resources__item">
              <div className="resources-item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="resources__item-cta">
                <a rel="noreferrer" href={drive} className="btn" target="_blank">
                  Resources
                </a>
                <a rel="noreferrer" href={demo} className="btn btn-primary" target="_blank">
                  Lectures
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Resources;
