import Link from "next/link";

import {
  TopNavbar,
  Scrollbar,
  AsideContainer,
  ContentContainer,
  SectionTitle,
  AsideProfiles,
  MainContainer,
  AuthorDetails,
  AuthorPosts,
  AsideSpotify,
} from "@/components";

type Props = {
  navigation: {
    url: string;
    name: string;
  }[];
  author: any;
  posts: any[];
  profiles: any[];
  songs: any[];
};

export default function Author({
  navigation,
  author,
  posts,
  profiles,
  songs,
}: Props) {
  return (
    <>
      <TopNavbar items={navigation} />

      <MainContainer>
        <AsideContainer className="aside-left">
          <Scrollbar />
        </AsideContainer>

        <ContentContainer className="main">
          <Scrollbar>
            <SectionTitle text="Autor necodeus" className="p-[30px]" />
            <AuthorDetails
              className="p-[30px] component-border-bottom"
              name={author.name}
              bio={author.bio}
              avatar_image_id={author.avatar_image_id}
            />

            <SectionTitle text="Artykuły" className="p-[30px]" />
            <AuthorPosts posts={posts} />
          </Scrollbar>
        </ContentContainer>

        <AsideContainer className="aside-right">
          <Scrollbar>
            {profiles?.length > 0 && <>
              <SectionTitle text="Profile społecznościowe" className="p-[30px] component-border-bottom" />
              <AsideProfiles profiles={profiles} />
            </>}
            
            {songs?.length > 0 && <>
              <SectionTitle text="Spotify na żywo" className="p-[30px] component-border-bottom" />
              <AsideSpotify songs={songs} />
            </>}
          </Scrollbar>
        </AsideContainer>
      </MainContainer>
    </>
  );
}
