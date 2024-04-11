import "./Card.css";
import "./Paragraph";
import Paragraph from "./Paragraph";

function Card() {
  const buttons = [
    { label: "GitHub", url: "https://github.com/" },
    { label: "Frontend mentor", url: "https://www.frontendmentor.io/" },
    { label: "Linkedin", url: "https://www.linkedin.com/in/gustavo-yuji-okagawa-6b995324b/" },
    { label: "twitter", url: "https://twitter.com/login" },
    { label: "instagram", url: "https://www.instagram.com/" },
  ];

  const paragraphs = [
    {
      content: "Jessica Randall",
      style: {
        "font-size": "1.3rem",
        "font-weight": "500",
        margin: "8px 0px",
      },
    },
    {
      content: "London, United Kingdom",
      style: {
        "font-size": "0.7rem",
        "font-weight": "800",
        color: "#b4ca5a",
        margin: "0px",
      },
    },
    {
      content: '"Front-end developer and avid reader."',
      style: {
        "font-size": "0.7rem",
        color: "#a2a1a1",
        "font-weight": "700",
        "padding-top": "15px",
      },
    },
  ];

  return (
    <article className="Card">
      <img
        src="../../src/assets/avatar-jessica.jpeg"
        width={65}
        height={65}
        alt="Imagem de perfil"
      />
      <Paragraph paragraphs={paragraphs}/>
      <div className="ButtonsContainer">
        {buttons.map((button, index) => (
          <a key={index} href={button.url} className="button">
            {button.label}
          </a>
        ))}
      </div>
    </article>
  );
}

export default Card;
