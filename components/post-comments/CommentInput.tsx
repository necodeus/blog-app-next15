import { FormButton } from "@components/post-comments/FormButton";

export const CommentInput = () => {
    return <div>
        <div className="mb-2 mx-[30px]">Dodaj komentarz</div>
        <div className="mb-[30px] mx-[9px]">
            <textarea v-model="commentText"
                className="w-full h-[180px] p-[20px] border-[#dfdfdf] border-solid border-[1px] rounded-[7px] resize-none block mb-2"
                placeholder="Treść komentarza"
            ></textarea>
            <div className="flex items-center justify-between flex-col">
                <FormButton />
            </div>
        </div>
    </div>
}