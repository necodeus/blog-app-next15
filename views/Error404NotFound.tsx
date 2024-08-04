'use client';

import { AsideContainer } from "@components/components/AsideContainer/AsideContainer";
import { BasicSection } from "@components/components/BasicSection/BasicSection";
import CustomScrollbar from "@components/components/CustomScrollbar/CustomScrollbar";
import { MainContainer } from "@components/components/MainContainer/MainContainer";
import { SectionWrapper } from "@components/components/SectionWrapper/SectionWrapper";
import { ExternalLinks } from "@components/components/ExternalLinks/ExternalLinks";
import { OtherPosts } from "@components/components/OtherPosts/OtherPosts";

import { ErrorHeader } from "@components/components/ErrorHeader/ErrorHeader";
import { EXTERNAL_LINKS } from "@components/components/ExternalLinks/consts";

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
              <ErrorHeader code={404} message="Strona nie została znaleziona!" />
            </BasicSection>
          </SectionWrapper>
        </CustomScrollbar>
      </MainContainer>

      <AsideContainer extraClasses="component-border-vertical">
        <CustomScrollbar>
          <div></div>
          <BasicSection extraClasses="component-border-bottom">
            <OtherPosts posts={[]} />
          </BasicSection>
          <BasicSection extraClasses="component-border-bottom">
            <ExternalLinks links={EXTERNAL_LINKS} />
          </BasicSection>
        </CustomScrollbar>
      </AsideContainer>
    </>
  );
}
