import {
  TopNavbar,
  ContentNav,
  PostHeader,
  PostContent,
} from "@/components";
import { slugify } from "@/plugins/markdown-it/anchor";
import { ContentLayout } from "@/components/ContentLayout/ContentLayout";

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

export default function Post({
  navigation,
  post,
  postAuthor,
  otherPosts,
}: Props) {
  const contentItems = extractMarkdownHeadersWithIds(post?.content ?? "");

  return (
    <ContentLayout header={<TopNavbar items={navigation} />}>
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

      {contentItems.length > 0 && <ContentNav items={contentItems} />}

      {post?.content?.length > 0 && (
        <div className="border-b-[1px] border-[#e5e5e5]">
          <PostContent content={post?.content ?? ""} />
        </div>
      )}
    </ContentLayout>
  );
}
