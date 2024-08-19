import { AsideContainer } from "@components/AsideContainer/AsideContainer";
import { BasicSection } from "@components/BasicSection/BasicSection";
import Scrollbar from "@components/Scrollbar/Scrollbar";
import { MainContainer } from "@components/MainContainer/MainContainer";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import { AsideLinks } from "@components/AsideLinks/AsideLinks";

import { PostsListing } from "@components/PostsListing/PostsListing";

import { TopNavbar } from "@components/TopNavbar/TopNavbar";
import { EXTERNAL_LINKS } from "@components/AsideLinks/consts";
import { SectionTitle } from "@components/SectionTitle/SectionTitle";

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
      <TopNavbar />

      <MainContainer extraClasses="lg:h-[100vh]">
        <Scrollbar>
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
                <PostsListing posts={posts} />
              </div>
            </BasicSection>
            <BasicSection width="var(--main-width)" extraClasses="component-border-vertical overflow-hidden flex-grow"></BasicSection>
          </SectionWrapper>
        </Scrollbar>
      </MainContainer>

      <AsideContainer extraClasses="component-border-vertical">
        <Scrollbar>
          <BasicSection>
          </BasicSection>
        </Scrollbar>
      </AsideContainer>
    </>

  );
}
