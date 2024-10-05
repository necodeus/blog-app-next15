import Link from "next/link";

import {
  TopNavbar,
  MainContainer,
  AsideContainer,
  Scrollbar,
  ContentContainer,
  SectionTitle,
  AuthorDetails,
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
          <Scrollbar />
        </AsideContainer>

        <ContentContainer className="main">
          <Scrollbar>
            <SectionTitle text="Autorzy" className="p-[30px]" />

            <div className="flex flex-col gap-[30px] p-[30px] component-border-bottom">
              {authors.map((author: any) => (
                <AuthorDetails
                  name={author.name}
                  bio={author.bio}
                  avatar_image_id={author.avatar_image_id}
                  path={author.path}
                  numberOfPosts={author.numberOfPosts}
                />
              ))}
            </div>
          </Scrollbar>
        </ContentContainer>

        <AsideContainer className="aside-right">
          <Scrollbar />
        </AsideContainer>
      </MainContainer>
    </>
  );
}
