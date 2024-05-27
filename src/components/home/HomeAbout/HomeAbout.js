import "./HomeAbout.css";
import { Footer } from "app/components/shared/Footer";

export const HomeAbout = () => {
  return (
    <>
      <section className="home-about">
        <div className="staff-pic" id="about-1">
          <img src="mobile/home/about_1.webp" />
        </div>
        <div className="staff-pic" id="about-2">
          <img src="mobile/home/about_2.webp" />
        </div>
        <div className="staff-pic" id="about-3">
          <img src="mobile/home/about_3.webp" />
        </div>
        <div className="about-text-box">
          <h3>SOBRE ATELIER</h3>
          <p>
            Atelier es una panadería artesanal, creada en 2017 en Montevideo.
            <br />
            <br />
            Tomando lo más clásico de la bollería francesa, lo rudimentario de
            la panadería de fermentación natural y sellada con una propuesta de
            pastelería que le da protagonismo a los clásicos, pero que también
            se destaca en lo novedoso.
          </p>
        </div>
        <div className="staff-pic" id="about-4">
          <img src="mobile/home/about_4.webp" />
        </div>
        <div className="staff-pic" id="about-5">
          <img src="mobile/home/about_5.webp" />
        </div>
        <div className="about-text-box" id="second-text-box">
          <p>
            Atelier es un taller, un espacio de creación para todos los que
            forman parte su equipo.
            <br />
            <br />
            Estamos en constante búsqueda, inquietos a la hora de entender y
            desarrollar el oficio tan ancestral que hacemos a diario.
          </p>
        </div>
        <div className="staff-pic" id="about-6">
          <img src="mobile/home/about_6.webp" />
        </div>
        <div className="staff-pic" id="about-7">
          <img src="mobile/home/about_7.webp" />
        </div>
      </section>
      <Footer />
    </>
  );
};
