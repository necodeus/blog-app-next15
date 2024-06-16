import { AsideContainer } from "@components/AsideContainer";
import { BasicSection } from "@components/BasicSection";
import { MainContainer } from "@components/MainContainer";
import { SectionWrapper } from "@components/SectionWrapper";
import { ExternalLinks } from "@components/common-external-links/ExternalLinks";
import { OtherPosts } from "@components/common-other-posts/OtherPosts";

import { PostList } from "@components/index-posts/PostList";

type HomeProps = {
  indexPosts: {
    id: string;
    title: string;
    path: string;
    author_name: string;
    author_avatar_url: string;
    modified_at: string;
  }[];
};

export default function Home({ indexPosts }: HomeProps) {
  return (
    <div>
      <MainContainer>
        <SectionWrapper width="var(--desktop-main-content-width)">
          <BasicSection width="var(--main-width)" extraClasses="component-border-vertical lg:h-[100vh]">
            <div className="component-padding">
              <PostList posts={indexPosts} />
            </div>
          </BasicSection>
        </SectionWrapper>
      </MainContainer>

      <AsideContainer extraClasses="component-border-vertical">
          <BasicSection>
              <OtherPosts />
          </BasicSection>
          <BasicSection>
              <ExternalLinks />
          </BasicSection>
      </AsideContainer>
    </div>
  );
}
