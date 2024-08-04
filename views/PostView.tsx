import { SectionWrapper } from "@components/components/SectionWrapper/SectionWrapper";
import { BasicSection } from "@components/components/BasicSection/BasicSection";
import { ContentNav } from "@components/components/ContentNav/ContentNav";
import { ExternalLinks } from "@components/components/ExternalLinks/ExternalLinks";
import { OtherPosts } from "@components/components/OtherPosts/OtherPosts";
import { AsideContainer } from "@components/components/AsideContainer/AsideContainer";
import { MainContainer } from "@components/components/MainContainer/MainContainer";
import Advertisement from "@components/components/Advertisement/Advertisement";
import CustomScrollbar from "@components/components/CustomScrollbar/CustomScrollbar";

import { PostHeader } from "@components/components/PostHeader/PostHeader";
import { PostContent } from "@components/components/PostContent/PostContent";
 
import Script from "next/script";
import { PostAuthor } from "@components/components/PostAuthor/PostAuthor";
import { Navigation } from "@components/components/Navigation/Navigation";
import { EXTERNAL_LINKS } from "@components/components/ExternalLinks/consts";
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
                    <ContentNav items={contentItems} />
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
          </CustomScrollbar>
        </MainContainer>

        <AsideContainer extraClasses="component-border-vertical">
          <CustomScrollbar>
            {otherPosts.length > 0 && <BasicSection extraClasses="component-border-bottom">
              <OtherPosts posts={otherPosts} />
            </BasicSection>}
            <BasicSection extraClasses="component-border-bottom">
              <ExternalLinks links={EXTERNAL_LINKS} />
            </BasicSection>
          </CustomScrollbar>
        </AsideContainer>
      </div>
    </>
  );
}
