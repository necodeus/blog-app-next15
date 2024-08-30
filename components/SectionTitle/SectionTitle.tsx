import clsx from "clsx";

type Props = {
    className?: string;
    text: string;
};

const setFirstWordBold = (text: string) => {
    const words = text.split(' ');
    words[0] = `<span class="font-bold">${words[0]}</span>`;

    return words.join(' ');
}

export const SectionTitle = ({ className, text = '' }: Props) => {
    const classes = clsx("font-jost text-[22px] component-border-bottom", className);

    return (
        <div className={classes} dangerouslySetInnerHTML={{ __html: setFirstWordBold(text) }} />
    );
};

