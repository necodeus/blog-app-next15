import { AsideContainer } from "@components/components/AsideContainer/AsideContainer";
import { BasicSection } from "@components/components/BasicSection/BasicSection";
import CustomScrollbar from "@components/components/CustomScrollbar/CustomScrollbar";
import { MainContainer } from "@components/components/MainContainer/MainContainer";
import { SectionWrapper } from "@components/components/SectionWrapper/SectionWrapper";
import { ExternalLinkSection } from "@components/components/ExternalLinkSection/ExternalLinkSection";

import { Posts } from "@components/Index/components/Posts/Posts";

import { Navigation } from "@components/components/Navigation/Navigation";
import { EXTERNAL_LINKS } from "@components/components/ExternalLinkSection/consts";
import { SectionTitle } from "@components/components/SectionTitle/SectionTitle";

type HomeProps = {
  posts: {
    id: string;
    title: string;
    path: string;
    author_name: string;
    author_path: string | null;
    author_picture: {
      [key: string]: string;
    };
    created_at: string;
  }[];
};

export default function IndexView({ posts }: HomeProps) {
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
            <BasicSection
              width="var(--main-width)"
              extraClasses="component-border-vertical overflow-hidden"
              childrenClasses="flex-grow flex flex-col"
            >
              <SectionTitle containerClass="p-[30px] component-border-bottom">
                <h1><b>Artykuły</b></h1>
              </SectionTitle>
              <div className="component-padding component-border-bottom">
                <Posts posts={posts} />
              </div>
            </BasicSection>
            <BasicSection width="var(--main-width)" extraClasses="component-border-vertical overflow-hidden flex-grow"></BasicSection>
          </SectionWrapper>
        </CustomScrollbar>
      </MainContainer>

      <AsideContainer extraClasses="component-border-vertical">
        <CustomScrollbar>
          <BasicSection>
            <ExternalLinkSection links={EXTERNAL_LINKS} />
          </BasicSection>
        </CustomScrollbar>
      </AsideContainer>
    </>

  );
}
