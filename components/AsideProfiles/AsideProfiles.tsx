import { SectionTitle } from "@/components";

import styles from "./AsideProfiles.module.css";

type Props = {
    profiles: {
        name: string;
        description: string;
        image: string;
        link: string;
    }[];
};

export const AsideProfiles = ({ profiles }: Props) => {
    return (
        <div className="font-jost ul p-[30px] text-[20px] component-border-bottom">
            <div className={styles.wrapper}>
                {profiles.map((profile) => (
                    <a
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        href={profile.link}
                        className="flex gap-[10px]"
                    >
                        <div
                            className={styles.image}
                            style={{ backgroundImage: `url(${profile.image})` }}
                        ></div>
                        <div className="flex flex-col">
                            <div className="text-[17px] font-medium">{profile.name}</div>
                            <div className="text-[17px]">{profile.description}</div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}