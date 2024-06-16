import moment from 'moment';

import { CommentLink } from '@components/CommentLink';

import { Back } from './Back';
import { Stars } from './Stars';

import styles from './Header.module.css';

export const Header = ({ image, name, timeAgo, teaser, authorPhoto = '', authorName, postId = '', numberOfComments = 0 }: any) => {
    const numberOfCommentsStringPL = (() => {
        const onesDigit = numberOfComments % 10;
        const tensInRange = numberOfComments % 100;

        if (onesDigit === 1 && tensInRange !== 11) {
            return 'komentarz';
        }

        if (onesDigit >= 2 && onesDigit <= 4 && (tensInRange < 10 || tensInRange >= 20)) {
            return 'komentarze';
        }

        return 'komentarzy';
    })();

    return (
        <div className="component-border-top font-jost">
            <div className="relative">
                <picture>
                    <source media="(min-width: 1570px)" srcSet={`${image}/900x430`} />
                    <source media="(min-width: 900px)" srcSet={`${image}/1200x430`} />
                    <source media="(min-width: 0px)" srcSet={`${image}/900x430`} />
                    <img className={styles.background} src={image} loading="lazy" />
                </picture>
                <div className="!pt-[330px] relative bg-[linear-gradient(transparent_50%,white_100%)]">
                    <div className="m-[20px] absolute z-[1] right-0 top-0 flex">
                        <Back />
                    </div>
                    <div className="component-padding relative !py-0 flex items-center mb-[10px]">
                        <img
                            src={`${authorPhoto}/25x25`}
                            loading="lazy"
                            className="min-w-[25px] max-w-[25px] min-h-[25px] max-h-[25px] bg-cover bg-center !rounded-[50%] bg-[#eee] object-cover"
                        />
                        <div className="ml-[10px] font-medium">
                            {authorName}
                        </div>

                        <div className={styles.divSeparator}></div>

                        <div>
                            {moment(timeAgo).fromNow()}
                        </div>
                    </div>
                    <div className="component-padding relative !py-0">
                        <h1 className="flex">
                            <span className="text-[38px]">{name}</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="component-padding relative !pt-[10px] bg-white">
                <div className="flex items-center mb-[10px]">
                    <Stars postId={postId} />
                    <div className={styles.divSeparator}></div>

                    <CommentLink id="comments" extraClasses="font-medium">{numberOfComments} {numberOfCommentsStringPL}</CommentLink>
                </div>
                <span className="text-[20px] leading-[35px]">{teaser}</span>
            </div>
        </div>
    );
};
