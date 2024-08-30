import Link from "next/link";

import {
  TopNavbar,
  Scrollbar,
  AsideContainer,
  ContentContainer,
  SectionTitle,
  AsideProfiles,
  MainContainer,
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
          <Scrollbar></Scrollbar>
        </AsideContainer>

        <ContentContainer className="main">
          <Scrollbar>
            <div className="font-jost component-border-bottom">
              <div className="p-[30px] relative bg-white">
                <div className="font-jost flex items-center text-[20px] rounded-[7px]">
                  <picture>
                    <img className="mobile-photo min-w-[55px] max-w-[55px] min-h-[55px] max-h-[55px] bg-cover bg-center !rounded-[50%] bg-[#eee]" src={`https://images.necodeo.com/${author.avatar_image_id}/55x55`} alt="" loading="lazy" />
                  </picture>
                  <div className="ml-[20px]">
                    <div className="flex items-center">
                      <div className="font-medium">{author.name}</div>
                    </div>
                    <div className="mt-[2px] text-[16px]">{author.bio}</div>
                  </div>
                </div>
              </div>
            </div>

            <SectionTitle text="Artykuły autora" className="p-[30px]" />
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
