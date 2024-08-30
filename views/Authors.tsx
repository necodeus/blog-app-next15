import Link from "next/link";

import {
  TopNavbar,
  MainContainer,
  AsideContainer,
  Scrollbar,
  ContentContainer,
  SectionTitle,
} from "@/components";

type Props = {
  navigation: {
    url: string;
    name: string;
  }[];
  authors: any;
};

export default function Authors({ navigation, authors }: Props) {
  return (
    <>
      <TopNavbar items={navigation} />

      <MainContainer>
        <AsideContainer className="aside-left">
          <Scrollbar></Scrollbar>
        </AsideContainer>

        <ContentContainer className="main">
          <Scrollbar>
            <SectionTitle text="Autorzy" className="p-[30px]" />

            <div className="flex flex-col gap-[30px] p-[30px] component-border-bottom">
              {authors.map((author: any) => (
                <div className="flex items-center font-jost text-[20px] rounded-[7px]">
                  <Link className="flex" href={author.path || ''}>
                    <picture>
                      <img
                        className="mobile-photo min-w-[55px] max-w-[55px] min-h-[55px] max-h-[55px] bg-cover bg-center !rounded-[50%] bg-[#eee]"
                        src={`https://images.necodeo.com/${author.avatar_image_id}/55x55`}
                        alt=""
                        loading="lazy"
                      />
                    </picture>
                    <div className="ml-[20px]">
                      <div className="flex items-center">
                        <div className="font-medium">{author.name}</div>
                      </div>
                      <div className="mt-[2px] text-[16px]">{author.bio}</div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </Scrollbar>
        </ContentContainer>

        <AsideContainer className="aside-right">
          <Scrollbar></Scrollbar>
        </AsideContainer>
      </MainContainer>
    </>
  );
}
