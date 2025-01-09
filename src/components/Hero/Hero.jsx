import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Jacob</h1>
                <p className={styles.description}>
                I'm a computer science major student, passionate about technology 
                and dedicated to mastering programming and problem-solving.
                </p>
                <a href="mailto:jacoboniszk@gmail.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
        <img src={getImageUrl("hero/me2.png")} alt="Image of me" className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
    </section>
    );
};
