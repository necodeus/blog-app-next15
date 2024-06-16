export const CommentReplyInput = () => {
    return (
        <div className="mt-1 relative mx-4">
            <input
                className="w-full pl-[10px] pr-[93.61px] py-[12px] border-[#dfdfdf] border-solid border-[1px] rounded-[7px] resize-none block text-[15px]"
                placeholder="Treść komentarza"
            />
            <button
                className="rounded-[7px] px-3 text-[15px] absolute right-[4px] bg-[black] top-[4px] bottom-[4px] flex items-center justify-center text-[white]"
            >
                Wyślij
                <svg className="ml-[5px] w-[16px] h-[16px] min-w-[16px] min-h-[16px]" xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
            </button>
        </div>
    );
};
