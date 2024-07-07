import dynamic from 'next/dynamic';

import Redirection from "@views/Redirection";

const Error404NotFound = dynamic(() => import('@views/Error404NotFound'));
const Error501NotImplemented = dynamic(() => import('@views/Error501NotImplemented'));
const Error500InternalServerError = dynamic(() => import('@views/Error500InternalServerError'));
const IndexView = dynamic(() => import('@views/IndexView'));
const PostView = dynamic(() => import('@views/PostView'));
const AuthorIndexView = dynamic(() => import('@views/AuthorIndexView'));
const AuthorView = dynamic(() => import('@views/AuthorView'));
const CategoryPostListingView = dynamic(() => import('@views/CategoryPostListingView'));
const TagPostListingView = dynamic(() => import('@views/TagPostListingView'));

// import { notFound } from 'next/navigation';

const PageComponents = {
  INDEX: IndexView,
  POST: PostView,
  AUTHORS_INDEX: AuthorIndexView,
  AUTHOR: AuthorView,
  CATEGORY_POST_LISTING: CategoryPostListingView,
  TAG_POST_LISTING: TagPostListingView,
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
