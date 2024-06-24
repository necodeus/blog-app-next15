import { AsideContainer } from "@components/AsideContainer";
import { BasicSection } from "@components/BasicSection";
import CustomScrollbar from "@components/CustomScrollbar";
import { MainContainer } from "@components/MainContainer";
import { SectionWrapper } from "@components/SectionWrapper";

import { ExternalLinks } from "@components/common-external-links/ExternalLinks";
import { OtherPostsFilled } from "@components/common-other-posts/OtherPostsFilled";
import { ErrorHeader } from "@components/error-header/ErrorHeader";

export default function Error404NotFound(props: any) {
  const otherPosts: any = [];

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
              <ErrorHeader code={404} message="Strona nie została znaleziona!" />
            </BasicSection>
          </SectionWrapper>
        </CustomScrollbar>
      </MainContainer>

      <AsideContainer extraClasses="component-border-vertical">
        <CustomScrollbar>
          {otherPosts?.length > 0 && (
            <BasicSection>
              <OtherPostsFilled posts={otherPosts} />
            </BasicSection>
          )}
          <BasicSection>
            <ExternalLinks links={externalLinks} />
          </BasicSection>
        </CustomScrollbar>
      </AsideContainer>
    </div>
  );
}
