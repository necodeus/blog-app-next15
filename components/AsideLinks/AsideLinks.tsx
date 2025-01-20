type Props = {
  links: {
    href: string;
    text: string;
    description: string;
  }[];
};

export const AsideLinks = ({ links = [] }: Props) => {
  return (
    <ul className="font-jost flex flex-col gap-[30px] p-[30px] component-border-bottom">
      {links.map((link: any) => (
        <li key={link.href}>
          <a
            className="text-[20px] inline-block"
            target="_blank"
            rel="noopener noreferrer nofollow"
            href={link.href}
          >
            <b className="font-medium">{link.text}</b>
            <br />
            <div className="mt-[10px]">{link.description}</div>
          </a>
        </li>
      ))}
    </ul>
  );
};
