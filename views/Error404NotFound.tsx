"use client";

import {
  ErrorHeader,
  TopNavbar,
} from "@/components";
import { ContentLayout } from "@/components/ContentLayout/ContentLayout";

type Props = {
  navigation: {
    url: string;
    name: string;
  }[];
};

export default function Error404NotFound({ navigation }: Props) {
  return (
    <ContentLayout header={<TopNavbar items={navigation} />}>
      <ErrorHeader code={404} message="Strona nie została znaleziona!" />
    </ContentLayout>
  );
}
