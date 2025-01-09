import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About =() => {
    return (
        <section className={styles.container} id="about">
                <h2 className={styles.title}>About</h2>
                <div className={styles.content}>
                    <img 
                        src={getImageUrl("about/computer2.png")} 
                        alt="a computer monitor icon" 
                        className={styles.aboutImage}
                    />
                    <ul className={styles.aboutItems}>
                        <li className={styles.aboutItem}>
                            <img src ={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p> 
                                I'm a frontend developer with experience building responsive and optimized sites using React
                            </p>
                        </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src ={getImageUrl("about/serverIcon.png")} alt="server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p> 
                                I have experience developing fast and optimised back-end systems and APIs
                            </p>
                        </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src ={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p> 
                                I have designed multiple landing pages and created cohesive website designs as well
                            </p>
                        </div>
                        </li>
                    </ul>
                </div>
            </section>
    );
};
