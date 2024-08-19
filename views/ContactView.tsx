import { AsideContainer } from "@components/AsideContainer/AsideContainer";
import { BasicSection } from "@components/BasicSection/BasicSection";
import Scrollbar from "@components/Scrollbar/Scrollbar";
import { AsideLinks } from "@components/AsideLinks/AsideLinks";
import { MainContainer } from "@components/MainContainer/MainContainer";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";

import { TopNavbar } from "@components/TopNavbar/TopNavbar";
import { EXTERNAL_LINKS } from "@components/AsideLinks/consts";
import { SectionTitle } from "@components/SectionTitle/SectionTitle";

export default function ContactView(props: any) {
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
                <SectionTitle containerClass="p-[30px] component-border-bottom">
                  <h1><b>Kontakt</b></h1>
                </SectionTitle>
                <div className="p-[30px]">...</div>
              </BasicSection>
              <BasicSection width="var(--main-width)" extraClasses="component-border-vertical overflow-hidden flex-grow"></BasicSection>
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
