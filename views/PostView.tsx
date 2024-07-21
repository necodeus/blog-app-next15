import { SectionWrapper } from "@components/components/SectionWrapper/SectionWrapper";
import { StickySection } from "@components/components/StickySection/StickySection";
import { BasicSection } from "@components/components/BasicSection/BasicSection";
import { ContentNav } from "@components/components/ContentNav/ContentNav";
import { ExternalLinkSection } from "@components/components/ExternalLinkSection/ExternalLinkSection";
import { OtherPostsSection } from "@components/components/OtherPostsSection/OtherPostsSection";
import { AsideContainer } from "@components/components/AsideContainer/AsideContainer";
import { MainContainer } from "@components/components/MainContainer/MainContainer";
import AdComponent from "@components/components/AdComponent/AdComponent";
import CustomScrollbar from "@components/components/CustomScrollbar/CustomScrollbar";

import { Header } from "@components/Post/components/Header/Header";
import { Content } from "@components/Post/components/Content/Content";
import { Comments } from "@components/Post/components/Comments/Comments";

import Script from "next/script";
import { PostAuthor } from "@components/components/Author/Author";
import { Navigation } from "@components/components/Navigation/Navigation";
import { EXTERNAL_LINKS } from "@components/components/ExternalLinkSection/consts";
import { SectionTitle } from "@components/components/SectionTitle/SectionTitle";

function extractMarkdownHeadersWithIds(markdownText: any) {
  const cleanedMarkdownText = markdownText.replace(/```[\s\S]*?```/g, "");

  return [...cleanedMarkdownText.matchAll(/^(#+)\s*(.*)$/gm)].map((match) => {
    const title = match[2].trim();
    const id = encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"));

    return {
      title,
      id,
    };
  });
}

const comments = [
  {
    id: "1",
    author_name: "John Doe",
    created_at: "2024-01-01 03:37:37",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultrices, nisl nisl ultricies nisl, nec ultricies",
    upvotes: 10,
    downvotes: 5,
    action: {
      value: 1,
    },
    replies: [
      {
        id: "1",
        author_name: "Jan Kowalski",
        created_at: "2021-08-02T14:00:00",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nisi nec felis ultricies malesuada. Sed auctor, nunc et luctus tincidunt, libero purus ultricies purus, in sodales massa purus nec libero. Ut ac neque nec nunc lacinia sollicitudin. Sed auctor, nunc et luctus tincidunt, libero purus ultricies purus, in sodales massa purus nec libero. Ut ac neque nec nunc lacinia sollicitudin.",
        upvotes: 10,
        downvotes: 5,
        action: {
          value: 1,
        },
      },
    ],
  },
];

export default function PostView({ post, postAuthor, otherPosts }: any) {
  const contentItems = extractMarkdownHeadersWithIds(post?.content ?? "");

  return (
    <>
      <Navigation />
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=pub-7601886123256141`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <div>
        <MainContainer extraClasses="lg:h-[100vh]">
          <CustomScrollbar>
            <SectionWrapper
              aside={
                <>
                  <StickySection width="334px">
                    <div className="background m-[7px]">
                      <AdComponent
                        dataAdFormat="auto"
                        dataFullWidthResponsive={true}
                        dataAdSlot="4284247248"
                      />
                    </div>
                  </StickySection>
                </>
              }
              width="var(--desktop-main-content-width)"
              extraClasses="component-border-bottom"
            >
              <BasicSection
                width="var(--main-width)"
                extraClasses="component-border-vertical"
              >
                <div>
                  {post?.id && (
                    <Header
                      coverPicture={post.cover_picture}
                      postAuthor={postAuthor}
                      createdAt={post.created_at}
                      name={post.title}
                      rating={4.5}
                      numberOfComments={post.comments_count}
                      teaser={post.teaser}
                    />
                  )}
                </div>
              </BasicSection>
            </SectionWrapper>
            <SectionWrapper
              aside={
                <>
                  {contentItems.length > 0 && (
                    <StickySection width="334px">
                      <div className="m-[7px]">
                        <ContentNav items={contentItems} />
                      </div>
                    </StickySection>
                  )}
                </>
              }
              width="var(--desktop-main-content-width)"
              extraClasses="component-border-bottom"
            >
              <BasicSection
                width="var(--main-width)"
                extraClasses="not-desktop"
              >
                {contentItems.length > 0 && (
                  <div className="m-[7px]">
                    <ContentNav items={contentItems} />
                  </div>
                )}
              </BasicSection>

              <BasicSection
                width="var(--main-width)"
                extraClasses="component-border-vertical overflow-hidden"
              >
                {post?.id && (
                  <div className="component-border-bottom">
                    <Content content={post?.content ?? ""} />
                  </div>
                )}

                {post?.id && <PostAuthor profile={postAuthor} />}
              </BasicSection>
            </SectionWrapper>

            <SectionWrapper
              aside={
                <>
                  <StickySection width="334px">
                    <div className="m-[7px]">
                      <AdComponent
                        dataAdFormat="auto"
                        dataFullWidthResponsive={true}
                        dataAdSlot="4284247248"
                      />
                    </div>
                  </StickySection>
                </>
              }
              width="var(--desktop-main-content-width)"
              extraClasses="flex-grow"
            >
              <BasicSection
                width="var(--main-width)"
                extraClasses="component-border-vertical"
              >
                <div className="component-border-bottom">
                  <SectionTitle containerClass="p-[30px] component-border-bottom">
                      <b>Komentarze</b>
                  </SectionTitle>
                  <Comments
                    isCommentsVisible={true}
                    comments={comments}
                    postId={post?.id}
                  />
                </div>
              </BasicSection>
            </SectionWrapper>
          </CustomScrollbar>
        </MainContainer>

        <AsideContainer extraClasses="component-border-vertical">
          <CustomScrollbar>
            <div></div>
            {/* {otherPosts?.length > 0 && (
              <BasicSection extraClasses="component-border-bottom">
                <OtherPostsSection posts={otherPosts} />
              </BasicSection>
            )}
            <BasicSection extraClasses="component-border-bottom">
              <ExternalLinkSection links={EXTERNAL_LINKS} />
            </BasicSection> */}
          </CustomScrollbar>
        </AsideContainer>
      </div>
    </>
  );
}
