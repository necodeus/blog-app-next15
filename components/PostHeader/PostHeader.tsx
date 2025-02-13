/* eslint-disable @next/next/no-img-element */

import { Stars, PublicationDetails } from '@/components';

import styles from './PostHeader.module.css';

type Props = {
    coverPicture: {
        [ key: string ]: string;
    };
    postAuthor: {
        id: string;
        path: string;
        name: string;
        bio: string;
        author_picture: {
            [ key: string ]: string;
        };
    };
    createdAt: string;
    name: string;
    rating: number;
    numberOfComments: number;
    teaser: string;
};

export const PostHeader = ({
    coverPicture,
    postAuthor,
    createdAt,
    name,
    rating,
    numberOfComments,
    teaser,
}: Props) => {
    const publisher = {
        name: postAuthor.name,
        path: postAuthor.path,
        picture: postAuthor.author_picture,
    }

    return (
        <div className="font-jost component-border-bottom">
            <div className="relative">
                <picture>
                    {coverPicture?.['785x420'] && <source media="(min-width: 1468px)" srcSet={coverPicture?.['785x420']} />}
                    {coverPicture?.['1200x430'] && <source media="(min-width: 800px)" srcSet={coverPicture?.['1200x430']} />}
                    {coverPicture?.['785x420'] && <source media="(min-width: 0px)" srcSet={coverPicture?.['785x420']} />}
                    <img className={styles.background} src={coverPicture?.['1200x430']} loading="lazy" alt="" />
                </picture>
                <div className="!pt-[330px] relative bg-[linear-gradient(transparent_50%,white_100%)]">
                    <PublicationDetails
                        publisher={publisher}
                        createdAt={createdAt}
                    />

                    <div className="p-[30px] relative !py-0">
                        <h1 className="flex">
                            <span className="text-[38px]">{name}</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="p-[30px] relative !pt-[10px] bg-white">
                <div className="flex items-center">
                    <Stars
                        width={160}
                        height={30}
                        rating={rating}
                        gapWidth={5}
                    />
                    <div className={styles.divSeparator}></div>
                    <div>{rating}</div>
                </div>
                {<div className="mt-[10px] text-[20px] leading-[35px]">{teaser}</div>}
            </div>
        </div>
    );
};
