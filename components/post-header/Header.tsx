/* eslint-disable @next/next/no-img-element */

import moment from 'moment';

import { numberToPolishNumeral } from '@utils/strings/numerals';
import { CommentLink } from '@components/CommentLink';

import { Back } from './Back';
import { Stars } from './Stars';

import styles from './Header.module.css';

type Props = {
    coverPicture: {
        [ key: string ]: string;
    };
    postAuthor: {
        author_picture: {
            [ key: string ]: string;
        };
        name: string;
    };
    createdAt: string;
    name: string;
    rating: number;
    numberOfComments: number;
    teaser: string;
};

export const Header = ({
    coverPicture,
    postAuthor,
    createdAt,
    name,
    rating,
    numberOfComments,
    teaser,
}: Props) => {
    const commentsText = numberToPolishNumeral(numberOfComments, {
        one: 'komentarz',
        many: 'komentarzy',
        exceptions: 'komentarze',
    });

    return (
        <div className="font-jost">
            <div className="relative">
                <picture>
                    {coverPicture?.['900x430'] && <source media="(min-width: 1570px)" srcSet={coverPicture?.['900x430']} />}
                    {coverPicture?.['1200x430'] && <source media="(min-width: 900px)" srcSet={coverPicture?.['1200x430']} />}
                    {coverPicture?.['900x430'] && <source media="(min-width: 0px)" srcSet={coverPicture?.['900x430']} />}
                    <img className={styles.background} src={coverPicture?.['1200x430']} loading="lazy" alt="" />
                </picture>
                <div className="!pt-[330px] relative bg-[linear-gradient(transparent_50%,white_100%)]">
                    <div className="m-[20px] absolute z-[1] right-0 top-0 flex">
                        <Back />
                    </div>
                    <div className="component-padding relative !py-0 flex items-center mb-[10px]">
                        {postAuthor && <>
                            <img
                            src={postAuthor.author_picture?.['25x25']}
                                alt=""
                                loading="lazy"
                                className="min-w-[25px] max-w-[25px] min-h-[25px] max-h-[25px] bg-cover bg-center !rounded-[50%] bg-[#eee] object-cover"
                            />
                            <div className="ml-[10px] font-medium">
                                {postAuthor.name}
                            </div>
                            <div className={styles.divSeparator}></div>
                        </>}

                        <div>
                            {moment(createdAt).fromNow()}
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
                <div className="flex items-center">
                    <Stars
                        width={160}
                        height={30}
                        rating={rating}
                        gapWidth={5}
                    />

                    <div className={styles.divSeparator}></div>

                    <CommentLink id="comments" extraClasses="font-medium">{numberOfComments || 0} {commentsText}</CommentLink>
                </div>
                {teaser?.length > 0 && <div className="mt-[10px] text-[20px] leading-[35px]">{teaser}</div>}
            </div>
        </div>
    );
};
