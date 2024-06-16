import { SectionWrapper } from "@components/SectionWrapper";
import { StickySection } from "@components/StickySection";
import { BasicSection } from "@components/BasicSection";
import { ContentNav } from "@components/ContentNav";

import { Header } from "@components/post-header/Header";

import { Content } from "@components/post-content/Content";

import { PostAuthor } from "@components/post-author/PostAuthor";

import { Comments } from "@components/post-comments/Comments";
import { OtherPosts } from "@components/common-other-posts/OtherPosts";
import { ExternalLinks } from "@components/common-external-links/ExternalLinks";
import { AsideContainer } from "@components/AsideContainer";
import { MainContainer } from "@components/MainContainer";
import { AdComponent } from "@components/AdComponent";

export default function BlogPostPage({ post, postAuthor }: any) {
    const isBottomAdVisible = true;
    const isTopAdVisible = true;

    function extractMarkdownHeadersWithIds(markdownText: any) {
        const cleanedMarkdownText = markdownText.replace(/```[\s\S]*?```/g, "")

        return [...cleanedMarkdownText.matchAll(/^(#+)\s*(.*)$/gm)].map((match) => {
            const title = match[2].trim()
            const id = encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"))

            return {
                title,
                id,
            }
        });
    }

    const comments = [
        {
            id: '1',
            author_name: 'John Doe',
            created_at: '2024-01-01 03:37:37',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultrices, nisl nisl ultricies nisl, nec ultricies',
            upvotes: 10,
            downvotes: 5,
            action: {
                value: 1,
            },
            replies: [
                {
                    id: '1',
                    author_name: 'Jan Kowalski',
                    created_at: '2021-08-02T14:00:00',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nisi nec felis ultricies malesuada. Sed auctor, nunc et luctus tincidunt, libero purus ultricies purus, in sodales massa purus nec libero. Ut ac neque nec nunc lacinia sollicitudin. Sed auctor, nunc et luctus tincidunt, libero purus ultricies purus, in sodales massa purus nec libero. Ut ac neque nec nunc lacinia sollicitudin.',
                    upvotes: 10,
                    downvotes: 5,
                    action: {
                        value: 1,
                    }
                },
            ],
        },
    ];

    return (
        <div>
            <MainContainer>
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
                >

                    <BasicSection width="var(--main-width)" extraClasses="component-border-vertical">
                        <div>
                            {post?.id && <Header
                                image={post.main_image_url ?? ''}
                                name={post.title ?? ''}
                                timeAgo={post?.modified_at ?? ''}
                                teaser={post?.teaser ?? ''}
                                authorName={postAuthor?.display_name ?? ''}
                                authorPhoto={'https://cdn.necodeo.com/' + postAuthor?.image_id_avatar ?? ''}
                                postId={post?.id ?? ''}
                                numberOfComments={post?.comments_count}
                            />}
                        </div>
                    </BasicSection>
                </SectionWrapper>

                <SectionWrapper
                    aside={
                        <>
                            <StickySection width="334px">
                                <div className="m-[7px]">
                                    <ContentNav items={extractMarkdownHeadersWithIds(post?.content ?? '')} />
                                </div>
                            </StickySection>
                        </>
                    }
                    width="var(--desktop-main-content-width)"
                >
                    <BasicSection width="var(--main-width)" extraClasses="not-desktop">
                        <div className="m-[7px]">
                            <ContentNav items={post?.contentHeaders} />
                        </div>
                    </BasicSection>

                    <BasicSection width="var(--main-width)" extraClasses="component-border-vertical">
                        {post?.id && <Content content={post?.content ?? ''} />}

                        <div className="component-border-top p-[7px]">
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
                    // v-observe-visibility="bottomAdVisible"
                >
                    <BasicSection width="var(--main-width)" extraClasses="component-border-vertical">
                        <Comments isCommentsVisible={true} comments={comments} postId={post?.id} />
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
