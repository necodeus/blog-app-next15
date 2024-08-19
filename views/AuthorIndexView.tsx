import Link from "next/link";

import Scrollbar from "@components/Scrollbar/Scrollbar";
import { AsideContainer } from "@components/AsideContainer/AsideContainer";
import { BasicSection } from "@components/BasicSection/BasicSection";
import { AsideLinks } from "@components/AsideLinks/AsideLinks";
import { MainContainer } from "@components/MainContainer/MainContainer";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import { TopNavbar } from "@components/TopNavbar/TopNavbar";
import { EXTERNAL_LINKS } from "@components/AsideLinks/consts";
import { SectionTitle } from "@components/SectionTitle/SectionTitle";

export default function AuthorIndexView({ authors }: any) {
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
                <h1><b>Autorzy</b></h1>
              </SectionTitle>
              <div className="flex flex-col gap-[30px] p-[30px]">
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
