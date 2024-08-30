'use client';

import {
  AsideContainer,
  Scrollbar,
  ContentContainer,
  ErrorHeader,
  AsidePopularPosts,
  TopNavbar,
  MainContainer,
  SectionTitle,
} from "@/components";

type Props = {
  navigation: {
    url: string;
    name: string;
  }[];
  otherPosts: any[];
};

export default function Error404NotFound({ navigation, otherPosts }: Props) {
  return (
    <>
      <TopNavbar items={navigation} />

      <MainContainer>
        <AsideContainer className="aside-left"></AsideContainer>

        <ContentContainer className="main">
          <Scrollbar>
            <ErrorHeader code={404} message="Strona nie została znaleziona!" />
          </Scrollbar>
        </ContentContainer>

        <AsideContainer className="aside-right">
          <Scrollbar>
              {otherPosts?.length > 0 && <>
                <SectionTitle text="Wpisy" className="p-[30px] component-border-bottom" />
                <AsidePopularPosts posts={otherPosts} />
              </>}
          </Scrollbar>
        </AsideContainer>
      </MainContainer>
    </>
  );
}
