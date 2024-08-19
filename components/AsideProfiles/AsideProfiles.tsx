import { SectionTitle } from "@components/SectionTitle/SectionTitle";

import styles from "./AsideProfiles.module.css";

export const AsideProfiles = () => {
    return (
        <div className="profiles font-jost">
            <SectionTitle containerClass="p-[30px] component-border-bottom"><b>Profile</b> społecznościowe</SectionTitle>

            <div className="ul component-padding text-[20px] component-border-bottom">
                <div className={styles.wrapper}>
                    <a
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        href="https://linkedin.com/in/smulewicz"
                    >
                        <div
                            className={styles.image}
                            style={{ backgroundImage: "url(/uploads/linkedin.png)" }}
                        ></div>
                        <div className="flex flex-col">
                            <div>LinkedIn</div>
                            <div className="text-[17px]">Odwiedź mój profil zawodowy</div>
                        </div>
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        href="https://github.com/necodeus"
                    >
                        <div
                            className={styles.image}
                            style={{ backgroundImage: "url(/uploads/github.png)" }}
                        ></div>
                        <div className="flex flex-col">
                            <div>GitHub</div>
                            <div className="text-[17px]">Stwórz coś ze mną</div>
                        </div>
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        href="spotify:user:315k3ny42ukhcrvyocz7xxxc2wn4"
                    >
                        <div
                            className={styles.image}
                            style={{ backgroundImage: "url(/uploads/spotify.png)" }}
                        ></div>
                        <div className="flex flex-col">
                            <div>Spotify</div>
                            <div className="text-[17px]">Posłuchaj moich playlist</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}