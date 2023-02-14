import Image from "next/image";
import styles from "../styles/About.module.css";
export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Irure enim excepteur duis ipsum reprehenderit culpa.Consectetur proident
        commodo est cupidatat elit Lorem culpa qui. Amet cillum occaecat sint
        laboris dolor. Do ipsum quis sunt consequat pariatur cupidatat consequat
        proident. Dolor reprehenderit non sit exercitation. Fugiat mollit
        cupidatat consectetur deserunt anim eu quis esse officia dolor proident
        cupidatat ex enim.
      </p>
      <Image src="/images/charizard.png" width="300" height="300" alt="pokemon" ></Image>
    </div>
  );
}
