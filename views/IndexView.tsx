import { AsideContainer } from "@components/components/AsideContainer/AsideContainer";
import { BasicSection } from "@components/components/BasicSection/BasicSection";
import CustomScrollbar from "@components/components/CustomScrollbar/CustomScrollbar";
import { MainContainer } from "@components/components/MainContainer/MainContainer";
import { SectionWrapper } from "@components/components/SectionWrapper/SectionWrapper";
import { ExternalLinkSection } from "@components/components/ExternalLinkSection/ExternalLinkSection";

import { Posts } from "@components/Index/components/Posts/Posts";

import { EXTERNAL_LINKS } from "./consts";

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
    <div>
      <MainContainer>
        <CustomScrollbar>
          <SectionWrapper width="var(--desktop-main-content-width)">
            <BasicSection
              width="var(--main-width)"
              extraClasses="component-border-vertical lg:h-[100vh]"
            >
              <div className="component-padding component-border-bottom">
                <Posts posts={posts} />
              </div>
            </BasicSection>
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
    </div>
  );
}
