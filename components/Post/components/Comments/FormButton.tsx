export const FormButton = () => {
    return (
        <button
            className="bg-[black] text-[white] border-[#dfdfdf] w-full border-[0px] rounded-[7px] px-[22px] py-[14px] font-medium justify-center flex items-center relative overflow-hidden"
        >
            Wyślij
            <svg
                className="ml-2 w-[18px] h-[18px] min-w-[18px] min-h-[18px]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
    </button>
    );
};
