import dynamic from 'next/dynamic';
import { ReactElement } from 'react';

const Error500InternalServerError = dynamic(() => import('@/views/Error500InternalServerError'));
const Error404NotFound = dynamic(() => import('@/views/Error404NotFound'));

import { getInitialUrlData } from '@/utils/data';
import { getViewByContentType } from '@/utils/logic';

type Props = {
  params: {
    path?: string[];
  };
}

export default async function DynamicPage(props: Props): Promise<ReactElement> {
  const path = '/' + (props.params.path?.join('/') || '');
  const initialPageData = await getInitialUrlData(path);

  if (!initialPageData) {
    return <Error500InternalServerError />
  }

  if (!initialPageData?.url) {
    return <Error404NotFound {...initialPageData} />;
  }

  const PageComponent = getViewByContentType(initialPageData?.url?.content_type);

  return <PageComponent {...initialPageData} />
}
