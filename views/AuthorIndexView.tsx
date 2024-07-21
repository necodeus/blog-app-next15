import { AsideContainer } from "@components/components/AsideContainer/AsideContainer";
import { BasicSection } from "@components/components/BasicSection/BasicSection";
import CustomScrollbar from "@components/components/CustomScrollbar/CustomScrollbar";
import { ExternalLinkSection } from "@components/components/ExternalLinkSection/ExternalLinkSection";
import { MainContainer } from "@components/components/MainContainer/MainContainer";
import { SectionWrapper } from "@components/components/SectionWrapper/SectionWrapper";

import { Navigation } from "@components/components/Navigation/Navigation";
import { EXTERNAL_LINKS } from "@components/components/ExternalLinkSection/consts";

export default function AuthorIndexView(props: any) {
    return (
      <>
        <Navigation />
        <MainContainer extraClasses="lg:h-[100vh]">
          <CustomScrollbar>
            <SectionWrapper
              width="var(--desktop-main-content-width)"
              extraClasses="flex-grow"
              childrenClasses="flex-grow flex flex-col"
            >
              <BasicSection width="var(--main-width)" extraClasses="component-border-vertical component-border-bottom overflow-hidden">
                AuthorIndexView
              </BasicSection>
            </SectionWrapper>
          </CustomScrollbar>
        </MainContainer>

        <AsideContainer extraClasses="component-border-vertical">
          <CustomScrollbar>
            <BasicSection extraClasses="component-border-bottom">
              <ExternalLinkSection links={EXTERNAL_LINKS} />
            </BasicSection>
          </CustomScrollbar>
        </AsideContainer>
      </>
    );
}
