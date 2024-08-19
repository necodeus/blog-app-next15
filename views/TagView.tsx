import { AsideContainer } from "@components/AsideContainer/AsideContainer";
import { BasicSection } from "@components/BasicSection/BasicSection";
import Scrollbar from "@components/Scrollbar/Scrollbar";
import { AsideLinks } from "@components/AsideLinks/AsideLinks";
import { MainContainer } from "@components/MainContainer/MainContainer";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";

import { TopNavbar } from "@components/TopNavbar/TopNavbar";
import { EXTERNAL_LINKS } from "@components/AsideLinks/consts";

export default function TagView(props: any) {
    return (
      <>
        <TopNavbar />
        <MainContainer extraClasses="lg:h-[100vh]">
          <Scrollbar>
            <SectionWrapper
              width="var(--desktop-main-content-width)"
              extraClasses="flex-grow"
              childrenClasses="flex-grow flex flex-col"
            >
              <BasicSection width="var(--main-width)" extraClasses="component-border-vertical component-border-bottom overflow-hidden">
                TagView
              </BasicSection>
            </SectionWrapper>
          </Scrollbar>
        </MainContainer>

        <AsideContainer extraClasses="component-border-vertical">
          <Scrollbar>
            <BasicSection extraClasses="component-border-bottom">
            </BasicSection>
          </Scrollbar>
        </AsideContainer>
      </>
    );
}
