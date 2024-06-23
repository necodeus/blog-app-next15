/* eslint-disable @next/next/no-img-element */

type Props = {
    profile: {
        author_picture: {
            [key: string]: string;
        };
        name: string;
        bio: string;
    };
};

export const PostAuthor = ({ profile }: Props) => {
    if (!profile) {
        return null;
    }

    return <div className="font-jost flex items-center text-[20px] p-[24px] bg-[#eee] rounded-[7px]">
        <picture>
            <img
                className="mobile-photo min-w-[55px] max-w-[55px] min-h-[55px] max-h-[55px] bg-cover bg-center !rounded-[50%] bg-[#eee]"
                src={profile.author_picture?.['50x50']}
                alt=""
                loading="lazy"
            />
        </picture>
        <div className="ml-[20px]">
            <div className="font-medium">
                { profile.name }
            </div>
            <div className="mt-[2px] text-[16px]">
                { profile.bio }
            </div>
        </div>
    </div>
}