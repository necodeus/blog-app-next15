export interface DefaultProps {
  status: string;
  url?: {
    content_type: any;
  };
}

interface Props extends DefaultProps {
  navigation: {
    url: string;
    name: string;
  }[];
};

export async function getInitialUrlData(path: string): Promise<Props | null> {
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
