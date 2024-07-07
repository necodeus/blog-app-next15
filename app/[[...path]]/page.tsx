import dynamic from 'next/dynamic';

import Redirection from "@views/Redirection";
import { notFound } from 'next/navigation';
const Error404NotFound = dynamic(() => import('@views/Error404NotFound'));
const Error501NotImplemented = dynamic(() => import('@views/Error501NotImplemented'));
const Error500InternalServerError = dynamic(() => import('@views/Error500InternalServerError'));
const Home = dynamic(() => import('@views/Home'));
const BlogPostPage = dynamic(() => import('@views/BlogPostPage'));
const AuthorsIndex = dynamic(() => import('@views/AuthorsIndex'));
const AuthorPage = dynamic(() => import('@views/AuthorPage'));
const CategoryPage = dynamic(() => import('@views/CategoryPage'));

const PageComponents = {
  INDEX: Home,
  POST: BlogPostPage,
  AUTHORS_INDEX: AuthorsIndex,
  AUTHOR: AuthorPage,
  CATEGORY_PAGE: CategoryPage,
  REDIRECTION: Redirection as any, // special case for redirection
};

type GetInitialUrlDataProps = {
  status: string;
  url?: {
    content_type: keyof typeof PageComponents;
  };
}

async function getInitialUrlData(path: string): Promise<GetInitialUrlDataProps | null> {
  const url = `${process.env.API_BASE_URL}/initial-url-data?path=${path}`;

  console.log('Fetching', url);

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 1,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}

type DynamicPageProps = {
  params: {
    path?: string[];
  };
}

export default async function DynamicPage(props: DynamicPageProps): Promise<JSX.Element> {

  const path = '/' + (props.params.path?.join('/') || '');
  const initialPageData = await getInitialUrlData(path);

  console.log('Initial page data:', initialPageData);

  if (!initialPageData) {
    return <Error500InternalServerError />
  }

  if (!initialPageData?.url) {
    return <Error404NotFound />
  }

  const PageComponent = initialPageData?.url?.content_type && PageComponents[initialPageData.url.content_type];

  if (!PageComponent) {
    return <Error501NotImplemented {...initialPageData} />
  }

  return <PageComponent {...initialPageData} />
}
