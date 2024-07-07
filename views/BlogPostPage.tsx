import { SectionWrapper } from "@components/SectionWrapper";
import { StickySection } from "@components/StickySection";
import { BasicSection } from "@components/BasicSection";
import { ContentNav } from "@components/ContentNav";

import { Header } from "@components/post-header/Header";

import { Content } from "@components/post-content/Content";

import { PostAuthor } from "@components/post-author/PostAuthor";

import { Comments } from "@components/post-comments/Comments";
import { ExternalLinks } from "@components/common-external-links/ExternalLinks";
import { AsideContainer } from "@components/AsideContainer";
import { MainContainer } from "@components/MainContainer";
import { AdComponent } from "@components/AdComponent";
import { OtherPostsFilled } from "@components/common-other-posts/OtherPostsFilled";
import CustomScrollbar from "@components/CustomScrollbar";

import { EXTERNAL_LINKS } from "./consts";

export default function BlogPostPage({ post, postAuthor, otherPosts }: any) {
  const isBottomAdVisible = true;
  const isTopAdVisible = true;

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

  return (
    <div>
      <MainContainer extraClasses="lg:h-[100vh]">
        <CustomScrollbar>
          <SectionWrapper
            aside={
              <>
                <StickySection width="334px">
                  <div className="background m-[7px]">
                    {isTopAdVisible && <AdComponent />}
                  </div>
                </StickySection>
              </>
            }
            width="var(--desktop-main-content-width)"
            // ref={topAdVisible}
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
                <StickySection width="334px">
                  <div className="m-[7px]">
                    <ContentNav
                      items={extractMarkdownHeadersWithIds(post?.content ?? "")}
                    />
                  </div>
                </StickySection>
              </>
            }
            width="var(--desktop-main-content-width)"
            extraClasses="component-border-bottom"
          >

            <BasicSection width="var(--main-width)" extraClasses="not-desktop">
              <div className="m-[7px]">
                <ContentNav items={post?.contentHeaders} />
              </div>
            </BasicSection>

            <BasicSection
              width="var(--main-width)"
              extraClasses="component-border-vertical overflow-hidden"
            >
              <div className="component-border-bottom">
                {post?.id && <Content content={post?.content ?? ""} />}
              </div>

              <div className="p-[7px]">
                {post?.id && <PostAuthor profile={postAuthor} />}
              </div>
            </BasicSection>
          </SectionWrapper>

          <SectionWrapper
            aside={
              <>
                <StickySection width="334px">
                  <div className="m-[7px]">
                    {isBottomAdVisible && <AdComponent />}
                  </div>
                </StickySection>
              </>
            }
            width="var(--desktop-main-content-width)"
            extraClasses="flex-grow"
            // v-observe-visibility="bottomAdVisible"
          >
            <BasicSection
              width="var(--main-width)"
              extraClasses="component-border-vertical h-full"
            >
              <div className="component-border-bottom">
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
          {otherPosts?.length > 0 && (
            <BasicSection extraClasses="component-border-bottom">
              <OtherPostsFilled posts={otherPosts} />
            </BasicSection>
          )}
          <BasicSection extraClasses="component-border-bottom">
            <ExternalLinks links={EXTERNAL_LINKS} />
          </BasicSection>
        </CustomScrollbar>
      </AsideContainer>
    </div>
  );
}
