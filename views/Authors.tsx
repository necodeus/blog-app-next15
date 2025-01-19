import {
  TopNavbar,
  SectionTitle,
  AuthorDetails,
} from "@/components";
import { ContentLayout } from "@/components/ContentLayout/ContentLayout";

type Props = {
  navigation: {
    url: string;
    name: string;
  }[];
  authors: any;
};

export default function Authors({ navigation, authors }: Props) {
  return (
    <ContentLayout header={<TopNavbar items={navigation} />}>
      <SectionTitle text="Autorzy" className="p-[30px]" />

      <div className="flex flex-col gap-[30px] p-[30px] component-border-bottom">
        {authors.map((author: any) => (
          <AuthorDetails
            name={author.name}
            bio={author.bio}
            avatar_image_id={author.avatar_image_id}
            path={author.path}
            numberOfPosts={author.numberOfPosts}
          />
        ))}
      </div>
    </ContentLayout>
  );
}
