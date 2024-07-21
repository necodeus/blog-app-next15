'use client';

import { AsideContainer } from "@components/components/AsideContainer/AsideContainer";
import { BasicSection } from "@components/components/BasicSection/BasicSection";
import CustomScrollbar from "@components/components/CustomScrollbar/CustomScrollbar";
import { MainContainer } from "@components/components/MainContainer/MainContainer";
import { SectionWrapper } from "@components/components/SectionWrapper/SectionWrapper";
import { ExternalLinkSection } from "@components/components/ExternalLinkSection/ExternalLinkSection";
import { OtherPostsSection } from "@components/components/OtherPostsSection/OtherPostsSection";

import { Header } from "@components/Error/Header";
import { EXTERNAL_LINKS } from "@components/components/ExternalLinkSection/consts";

export default function Error404NotFound(props: any) {
  const otherPosts: any = [];

  return (
    <>
      <MainContainer>
        <CustomScrollbar>
          <SectionWrapper width="var(--desktop-main-content-width)">
            <BasicSection
              width="var(--main-width)"
              extraClasses="component-border-vertical lg:h-[100vh]"
            >
              <Header code={404} message="Strona nie została znaleziona!" />
            </BasicSection>
          </SectionWrapper>
        </CustomScrollbar>
      </MainContainer>

      <AsideContainer extraClasses="component-border-vertical">
        <CustomScrollbar>
          <div></div>
          {/* {otherPosts?.length > 0 && (
            <BasicSection extraClasses="component-border-bottom">
              <OtherPostsSection posts={otherPosts} />
            </BasicSection>
          )}
          <BasicSection extraClasses="component-border-bottom">
            <ExternalLinkSection links={EXTERNAL_LINKS} />
          </BasicSection> */}
        </CustomScrollbar>
      </AsideContainer>
    </>
  );
}
