import { AsideContainer } from "@components/AsideContainer";
import { BasicSection } from "@components/BasicSection";
import CustomScrollbar from "@components/CustomScrollbar";
import { MainContainer } from "@components/MainContainer";
import { SectionWrapper } from "@components/SectionWrapper";
import { ExternalLinks } from "@components/common-external-links/ExternalLinks";

import { PostList } from "@components/index-posts/PostList";

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
  const externalLinks = [
    {
      id: 1,
      href: "https://github.com/necodeus/blog-app-next",
      text: "github.com/necodeus/blog-app-next",
      description: "Kod źródłowy tej aplikacji",
    },
    {
      id: 2,
      href: "https://github.com/necodeus/blog-api-laravel",
      text: "github.com/necodeus/blog-api-laravel",
      description: "Kod źródłowy API",
    },
    {
      id: 3,
      href: "https://github.com/necodeus/blog-liveserver-bun",
      text: "github.com/necodeus/blog-liveserver-bun",
      description: "Kod źródłowy serwera WSS",
    },
  ];

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
            <ExternalLinks links={externalLinks} />
          </BasicSection>
        </CustomScrollbar>
      </AsideContainer>
    </div>
  );
}
