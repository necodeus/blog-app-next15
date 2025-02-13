import {
  TopNavbar,
  SectionTitle,
  AuthorDetails,
  AuthorPosts,
  AsideSpotify,
  AsideLinks,
} from "@/components";
import { ContentLayout } from "@/components/ContentLayout/ContentLayout";

type Props = {
  navigation: {
    url: string;
    name: string;
  }[];
  author: any;
  posts: any[];
  links: any[];
  spotifyActivity: any;
};

export default function Author({
  navigation,
  author,
  posts,
  links,
  spotifyActivity,
}: Props) {
  return (
    <ContentLayout
      header={<TopNavbar items={navigation} />}
      rightSidebar={
        <>
          {links.length > 0 && (
            <>
              <SectionTitle text="Linki zewnętrzne" className="p-[30px]" />
              <AsideLinks links={links} />
            </>
          )}

          {spotifyActivity?.player?.length && (
            <>
              <SectionTitle text="Spotify na żywo" className="p-[30px]" />
              <div className="p-[15px] component-border-bottom">
                <AsideSpotify spotifyActivity={spotifyActivity} />
              </div>
            </>
          )}
        </>
      }
    >
      <SectionTitle text={`Autor ${author.name}`} className="p-[30px]" />
      <AuthorDetails
        className="p-[30px] component-border-bottom"
        name={author.name}
        bio={author.bio}
        numberOfPosts={posts.length}
        avatar_image_id={author.avatar_image_id}
      />

      <SectionTitle text="Artykuły" className="p-[30px]" />
      <AuthorPosts posts={posts} />
    </ContentLayout>
  );
}
