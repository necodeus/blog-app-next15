'use client';

import { AsideContainer } from "@components/AsideContainer/AsideContainer";
import { BasicSection } from "@components/BasicSection/BasicSection";
import Scrollbar from "@components/Scrollbar/Scrollbar";
import { MainContainer } from "@components/MainContainer/MainContainer";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import { AsidePopularPosts } from "@components/AsidePopularPosts/AsidePopularPosts";

import { ErrorHeader } from "@components/ErrorHeader/ErrorHeader";

import { AsideLinks } from "@components/AsideLinks/AsideLinks";
import { EXTERNAL_LINKS } from "@components/AsideLinks/consts";

export default function Error404NotFound(props: any) {
  return (
    <>
      <MainContainer>
        <Scrollbar>
          <SectionWrapper width="var(--desktop-main-content-width)">
            <BasicSection
              width="var(--main-width)"
              extraClasses="component-border-vertical lg:h-[100vh]"
            >
              <ErrorHeader code={404} message="Strona nie została znaleziona!" />
            </BasicSection>
          </SectionWrapper>
        </Scrollbar>
      </MainContainer>

      <AsideContainer extraClasses="component-border-vertical">
        <Scrollbar>
          <BasicSection extraClasses="component-border-bottom">
            <AsidePopularPosts posts={[]} />
          </BasicSection>
          <BasicSection extraClasses="component-border-bottom">
          </BasicSection>
        </Scrollbar>
      </AsideContainer>
    </>
  );
}
