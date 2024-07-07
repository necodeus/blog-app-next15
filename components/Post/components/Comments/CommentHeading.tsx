import { SectionTitle } from "@components/components/SectionTitle/SectionTitle";

type CommentHeadingProps = {
    commentsCount: number;
};

export const CommentHeading = ({ commentsCount }: CommentHeadingProps) => {
    return (
        <div className="mx-[30px]">
            <SectionTitle>
                <div className="mb-2 flex items-center">
                    <b className="font-bold">Komentarze</b>
                    {commentsCount > 0 && <span>&nbsp;({ commentsCount })</span>}
                </div>
            </SectionTitle>
        </div>
    );
};
