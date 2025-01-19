import {
  TopNavbar,
  SectionTitle,
  PostsListing,
} from "@/components";
import { ContentLayout } from "@/components/ContentLayout/ContentLayout";

type Props = {
  navigation: {
    url: string;
    name: string;
  }[];
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

export default function Posts({ navigation, posts }: Props) {
  return (
    <ContentLayout header={<TopNavbar items={navigation} />}>
      <SectionTitle text="Artykuły" className="p-[30px]" />
      <PostsListing posts={posts} />
    </ContentLayout>
  );
}
