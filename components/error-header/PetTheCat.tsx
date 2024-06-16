export const PetTheCat = ({ extraClasses }: any) => {
    return (
        <div className={"pet-the-cat-back transition-colors scale-[0.96] hover:scale-[1] " + extraClasses}>
            <button className="h-full border-[2px] border-[black] tracking-[4px] text-[11px] font-bold inline-block py-[15px] px-[20px] uppercase">
                Daj głaski
            </button>
        </div>
    );
};
