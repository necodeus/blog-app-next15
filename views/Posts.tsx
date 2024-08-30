import {
  TopNavbar,
  MainContainer,
  AsideContainer,
  Scrollbar,
  ContentContainer,
  SectionTitle,
  PostsListing,
} from "@/components";

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
    <>
      <TopNavbar items={navigation} />

      <MainContainer>
        <AsideContainer className="aside-left">
          <Scrollbar></Scrollbar>
        </AsideContainer>

        <ContentContainer className="main">
          <Scrollbar>
            <SectionTitle text="Artykuły" className="p-[30px]" />
            <PostsListing posts={posts} />
          </Scrollbar>
        </ContentContainer>

        <AsideContainer className="aside-right">
          <Scrollbar></Scrollbar>
        </AsideContainer>
      </MainContainer>
    </>
  );
}
