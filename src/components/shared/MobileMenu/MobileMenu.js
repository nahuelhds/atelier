import "./MobileMenu.css";
import Exit from "app/components/shared/svg/Exit.svg";
import Link from "next/link";

export const MobileMenu = ({ openMenu, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${openMenu ? "show-menu" : ""}`}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/tienda">Tienda</Link>
        </li>
        <li>
          <Link href="/carrito">Carrito</Link>
        </li>
        <li>
          <Link href="/contacto">Contacto</Link>
        </li>
        <li>
          <p className="happy-face">:)</p>
        </li>
      </ul>
      <Exit className="exit-svg" onClick={toggleMenu} />
    </div>
  );
};
