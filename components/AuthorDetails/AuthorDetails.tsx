import { ReactElement } from "react";
import Link from "next/link";
import { numberToPolishNumeral } from "@/utils/strings/numerals";

type Props = {
  name: string;
  bio: string;
  avatar_image_id: string;
  path?: string;
  numberOfPosts?: number;
  className?: string;
};

export const AuthorDetails = ({
  name,
  bio,
  avatar_image_id,
  path,
  numberOfPosts = 0,
  className,
}: Props): ReactElement => {
  if (path) {
    return (
      <div className={className}>
        <Link href={path} className="inline-flex items-center gap-[20px]">
          <Details
            name={name}
            bio={bio}
            avatar_image_id={avatar_image_id}
            numberOfPosts={numberOfPosts}
          />
        </Link>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="inline-flex items-center gap-[20px]">
        <Details
          name={name}
          bio={bio}
          avatar_image_id={avatar_image_id}
          numberOfPosts={numberOfPosts}
        />
      </div>
    </div>
  );
};

const Details = ({
  name,
  bio,
  avatar_image_id,
  numberOfPosts,
}: any): ReactElement => {
  return (
    <>
      <picture>
        <img
          className="min-w-[55px] max-w-[55px] min-h-[55px] max-h-[55px] rounded-full bg-[#eee]"
          src={`https://images.necodeo.com/${avatar_image_id}/55x55`}
          alt=""
          loading="lazy"
        />
      </picture>
      <div className="font-jost">
        <div className="flex items-baseline">
          <div className="text-[20px] font-medium">{name}</div>
          {numberOfPosts > 0 && (
            <>
              <div>&nbsp;/&nbsp;</div>
              <div className="text-[16px]">
                {numberOfPosts}{" "}
                {numberToPolishNumeral(numberOfPosts, {
                  one: "artykuł",
                  many: "artykułów",
                  exceptions: "artykuły",
                })}
              </div>
            </>
          )}
        </div>
        <div className="font-jost text-[16px]">{bio}</div>
      </div>
    </>
  );
};
