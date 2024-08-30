import Script from "next/script";

import {
  TopNavbar,
  PostNavigation,
  AsidePopularPosts,
  AsideContainer,
  ContentContainer,
  Scrollbar,
  PostHeader,
  PostContent,
  MainContainer,
  SectionTitle,
} from "@/components";
import { slugify } from "@/plugins/markdown-it/anchor";

function extractMarkdownHeadersWithIds(markdownText: any) {
  const headers = markdownText.match(/^#{1,6} .+$/gm) ?? [];

  return headers.map((header: string) => {
    const title = header.replace(/^#{1,6} /, "");

    return {
      id: slugify(title),
      title: title,
    };
  });
}

type Props = {
  navigation: {
    url: string;
    name: string;
  }[];
  post: any;
  postAuthor: any;
  otherPosts: any[];
};

export default function Post({ navigation, post, postAuthor, otherPosts }: Props) {
  const contentItems = extractMarkdownHeadersWithIds(post?.content ?? "");

  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=pub-7601886123256141`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <>
        <TopNavbar items={navigation} />

        <MainContainer>
          <AsideContainer className="aside-left">
            <Scrollbar></Scrollbar>
          </AsideContainer>

          <ContentContainer className="main">
            <Scrollbar>
              <div>
                {post?.id && (
                  <PostHeader
                    coverPicture={post.cover_picture}
                    postAuthor={postAuthor}
                    createdAt={post.created_at}
                    name={post.title}
                    rating={post.rating}
                    numberOfComments={post.comments_count}
                    teaser={post.teaser}
                  />
                )}
              </div>

              {contentItems.length > 0 && (
                <PostNavigation items={contentItems} />
              )}

              {post?.content?.length > 0 && <PostContent content={post?.content ?? ""} />}
            </Scrollbar>
          </ContentContainer>

          <AsideContainer className="aside-right">
            <Scrollbar>
              {otherPosts?.length > 0 && <>
                <SectionTitle text="Inne wpisy" className="p-[30px] component-border-bottom" />
                <AsidePopularPosts posts={otherPosts} />
              </>}
            </Scrollbar>
          </AsideContainer>
        </MainContainer>
      </>
    </>
  );
}
