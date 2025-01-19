"use client";

import {
  Scrollbar,
  ContentContainer,
  ErrorHeader,
  TopNavbar,
  MainContainer,
} from "@/components";
import { ContentLayout } from "@/components/ContentLayout/ContentLayout";

type Props = {
  navigation: {
    url: string;
    name: string;
  }[];
  otherPosts: any[];
};

export default function Error404NotFound({ navigation, otherPosts }: Props) {
  return (
    <ContentLayout header={<TopNavbar items={navigation} />}>
      <ErrorHeader code={404} message="Strona nie została znaleziona!" />
    </ContentLayout>
  );
}
