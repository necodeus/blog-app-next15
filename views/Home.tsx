import { AsideContainer } from "@components/AsideContainer";
import { BasicSection } from "@components/BasicSection";
import CustomScrollbar from "@components/CustomScrollbar";
import { MainContainer } from "@components/MainContainer";
import { SectionWrapper } from "@components/SectionWrapper";
import { ExternalLinks } from "@components/common-external-links/ExternalLinks";

import { PostList } from "@components/index-posts/PostList";

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

export default function Home({ posts }: HomeProps) {
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
                <PostList posts={posts} />
              </div>
            </BasicSection>
          </SectionWrapper>
        </CustomScrollbar>
      </MainContainer>

      <AsideContainer extraClasses="component-border-vertical">
        <CustomScrollbar>
          <BasicSection>
            <ExternalLinks links={EXTERNAL_LINKS} />
          </BasicSection>
        </CustomScrollbar>
      </AsideContainer>
    </div>
  );
}
