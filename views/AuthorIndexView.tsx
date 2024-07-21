import { AsideContainer } from "@components/components/AsideContainer/AsideContainer";
import { BasicSection } from "@components/components/BasicSection/BasicSection";
import CustomScrollbar from "@components/components/CustomScrollbar/CustomScrollbar";
import { ExternalLinkSection } from "@components/components/ExternalLinkSection/ExternalLinkSection";
import { MainContainer } from "@components/components/MainContainer/MainContainer";
import { SectionWrapper } from "@components/components/SectionWrapper/SectionWrapper";

import { Navigation } from "@components/components/Navigation/Navigation";
import { EXTERNAL_LINKS } from "@components/components/ExternalLinkSection/consts";

import styles from './AuthorView.module.css';
import Link from "next/link";
import { SectionTitle } from "@components/components/SectionTitle/SectionTitle";

export default function AuthorIndexView({ authors }: any) {
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
