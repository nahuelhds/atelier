import styles from "./page.module.css";
import "./globals.css";
import { HomeIntro } from "app/components/home/HomeIntro";
import { HomeAbout } from "app/components/home/HomeAbout";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="fondo"></div>
      <HomeIntro />
      <HomeAbout />
    </main>
  );
}
