import "./AboutPicture.css";

export const AboutPicture = ({ id, path }) => {
  return (
    <div className="about-pic" id={id}>
      <img src={path} />
    </div>
  );
};
