import Script from "next/script";

import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import { BasicSection } from "@components/BasicSection/BasicSection";
import { PostNavigation } from "@components/PostNavigation/PostNavigation";
import { AsideLinks } from "@components/AsideLinks/AsideLinks";
import { AsidePopularPosts } from "@components/AsidePopularPosts/AsidePopularPosts";
import { AsideContainer } from "@components/AsideContainer/AsideContainer";
import { MainContainer } from "@components/MainContainer/MainContainer";
import Scrollbar from "@components/Scrollbar/Scrollbar";
import { PostHeader } from "@components/PostHeader/PostHeader";
import { PostContent } from "@components/PostContent/PostContent";
import { PostAuthor } from "@components/PostAuthor/PostAuthor";
import { TopNavbar } from "@components/TopNavbar/TopNavbar";
import { EXTERNAL_LINKS } from "@components/AsideLinks/consts";

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
      <TopNavbar />
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=pub-7601886123256141`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <div>
        <MainContainer extraClasses="lg:h-[100vh]">
          <Scrollbar>
            <SectionWrapper width="var(--desktop-main-content-width)">
              <BasicSection width="var(--main-width)" extraClasses="component-border-vertical component-border-bottom">
                <div>
                  {post?.id && (
                    <PostHeader
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

              <BasicSection width="var(--main-width)" extraClasses="not-desktop">
                {contentItems.length > 0 && (
                  <div className="m-[7px]">
                    <PostNavigation items={contentItems} />
                  </div>
                )}
              </BasicSection>

              <BasicSection width="var(--main-width)" extraClasses="component-border-vertical component-border-bottom overflow-hidden">
                {post?.id && <PostContent content={post?.content ?? ""} />}
              </BasicSection>

              <BasicSection width="var(--main-width)" extraClasses="component-border-vertical component-border-bottom">
                {post?.id && <PostAuthor profile={postAuthor} />}
              </BasicSection>
            </SectionWrapper>
          </Scrollbar>
        </MainContainer>

        <AsideContainer extraClasses="component-border-vertical">
          <Scrollbar>
            {otherPosts.length > 0 && <BasicSection extraClasses="component-border-bottom">
              <AsidePopularPosts posts={otherPosts} />
            </BasicSection>}
            <BasicSection extraClasses="component-border-bottom">
            </BasicSection>
          </Scrollbar>
        </AsideContainer>
      </div>
    </>
  );
}
