'use client';

import { AsideContainer } from "@components/AsideContainer";
import { BasicSection } from "@components/BasicSection";
import CustomScrollbar from "@components/CustomScrollbar";
import { MainContainer } from "@components/MainContainer";
import { SectionWrapper } from "@components/SectionWrapper";

import { ExternalLinks } from "@components/common-external-links/ExternalLinks";
import { OtherPostsFilled } from "@components/common-other-posts/OtherPostsFilled";
import { ErrorHeader } from "@components/error-header/ErrorHeader";

import { EXTERNAL_LINKS } from "./consts";

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
          {otherPosts?.length > 0 && (
            <BasicSection extraClasses="component-border-bottom">
              <OtherPostsFilled posts={otherPosts} />
            </BasicSection>
          )}
          <BasicSection extraClasses="component-border-bottom">
            <ExternalLinks links={EXTERNAL_LINKS} />
          </BasicSection>
        </CustomScrollbar>
      </AsideContainer>
    </>
  );
}
