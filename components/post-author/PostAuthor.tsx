/* eslint-disable @next/next/no-img-element */

type PostAuthorProps = {
    profile: {
        display_name: string;
        bio: string;
        image_id_avatar: string;
    };
};

export const PostAuthor = ({ profile }: PostAuthorProps) => {
    return <div className="font-jost flex items-center text-[20px] p-[24px] bg-[#eee] rounded-[7px]">
        <picture>
            <img
                className="mobile-photo min-w-[55px] max-w-[55px] min-h-[55px] max-h-[55px] bg-cover bg-center !rounded-[50%] bg-[#eee]"
                src={`https://cdn.necodeo.com/${profile.image_id_avatar}`}
                alt="post author"
                loading="lazy"
            />
        </picture>
        <div className="ml-[20px]">
            <div className="font-medium">
                { profile.display_name }
            </div>
            <div className="mt-[2px] text-[16px]">
                { profile.bio }
            </div>
        </div>
    </div>
}