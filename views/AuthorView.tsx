import { AsideContainer } from "@components/components/AsideContainer/AsideContainer";
import { BasicSection } from "@components/components/BasicSection/BasicSection";
import CustomScrollbar from "@components/components/CustomScrollbar/CustomScrollbar";
import { ExternalLinkSection } from "@components/components/ExternalLinkSection/ExternalLinkSection";
import { MainContainer } from "@components/components/MainContainer/MainContainer";
import { SectionWrapper } from "@components/components/SectionWrapper/SectionWrapper";

import { SectionTitle } from "@components/components/SectionTitle/SectionTitle";

import styles from './AuthorView.module.css';
import { Navigation } from "@components/components/Navigation/Navigation";
import { EXTERNAL_LINKS } from "@components/components/ExternalLinkSection/consts";
import Link from "next/link";

export default function AuthorView(props: any) {
  const author = {
    id: '0000000001',
    name: 'necodeus',
    role: 'Software Developer',
    description: 'Necodeus to pasjonat technologii i programowania, który dzieli się swoją wiedzą i doświadczeniem na łamach bloga. Jego artykuły skupiają się na najnowszych trendach w branży IT, praktycznych poradach dla programistów oraz recenzjach narzędzi i technologii.',
  };

  const posts = [
    {
      path: '/',
      id: '0000000001',
      image: 'https://images.necodeo.com/3f387cf4-d184-49d7-87de-278d4b8be607/230x160',
      tagName: 'cloud',
      title: 'DevOps na sterydach',
      publishedAt: '2024-05-31',
    },
    {
      path: '/',
      id: '0000000002',
      image: 'https://images.necodeo.com/3f387cf4-d184-49d7-87de-278d4b8be607/230x160',
      tagName: 'cloud',
      title: 'DevOps na sterydach',
      publishedAt: '2024-05-31',
    },
    {
      path: '/',
      id: '0000000003',
      image: 'https://images.necodeo.com/3f387cf4-d184-49d7-87de-278d4b8be607/230x160',
      tagName: 'cloud',
      title: 'DevOps na sterydach',
      publishedAt: '2024-05-31',
    },
    {
      path: '/',
      id: '0000000004',
      image: 'https://images.necodeo.com/3f387cf4-d184-49d7-87de-278d4b8be607/230x160',
      tagName: 'cloud',
      title: 'DevOps na sterydach',
      publishedAt: '2024-05-31',
    },
    {
      path: '/',
      id: '0000000005',
      image: 'https://images.necodeo.com/3f387cf4-d184-49d7-87de-278d4b8be607/230x160',
      tagName: 'cloud',
      title: 'DevOps na sterydach',
      publishedAt: '2024-05-31',
    },
    {
      path: '/',
      id: '0000000006',
      image: 'https://images.necodeo.com/3f387cf4-d184-49d7-87de-278d4b8be607/230x160',
      tagName: 'cloud',
      title: 'DevOps na sterydach',
      publishedAt: '2024-05-31',
    },
  ];

  const postCount = 22;

  return (
    <>
      <Navigation />
      <MainContainer extraClasses="lg:h-[100vh]">
        <CustomScrollbar>
          <SectionWrapper
            width="var(--desktop-main-content-width)"
            extraClasses="flex-grow"
            childrenClasses="flex-grow flex flex-col"
          >
            <BasicSection width="var(--main-width)" extraClasses="component-border-vertical component-border-bottom overflow-hidden">
              <SectionTitle containerClass="p-[30px] component-border-bottom">
                <h1><b>Wpisy </b>autora</h1>
              </SectionTitle>
              <div className="font-jost">
                <div className="component-padding relative bg-white">
                  <div className="font-jost flex items-center text-[20px] rounded-[7px]">
                    <picture>
                      <img className="mobile-photo min-w-[55px] max-w-[55px] min-h-[55px] max-h-[55px] bg-cover bg-center !rounded-[50%] bg-[#eee]" src="https://images.necodeo.com/1ad0fa37-17ad-4881-9ced-54d7718b35f5/55x55" alt="" loading="lazy" />
                    </picture>
                    <div className="ml-[20px]">
                      <div className="flex items-center">
                        <div className="font-medium">necodeus</div>
                      </div>
                      <div className="mt-[2px] text-[16px]">Software Developer</div>
                    </div>
                  </div>
                </div>
              </div>
            </BasicSection>
            {/* ... */}
            <BasicSection width="var(--main-width)" extraClasses="component-border-vertical pt-[30px] font-jost pb-[30px] flex-grow">
              <div className={"grid mx-[30px] gap-[25px] " + styles.responsiveGrid}>
                {posts.map((post: any) => (
                  <Link href={post.path || ''} key={post.id}>
                    <div className="relative mb-[18px]">
                      <div className="absolute left-[-10px] bg-[#fff] top-[15px] border-[1px] border-solid border-[#cfcfcf] text-[11px] p-[5px_12px] uppercase font-[600] tracking-[2px]">{post.tagName}</div>
                      <img className="rounded-[7px]" src={post.image} />
                    </div>
                    <div className="text-[20px] font-[500] mb-[2px]">{post.title}</div>
                  </Link>
                ))}
              </div>
            </BasicSection>
            {/* ... */}
          </SectionWrapper>
        </CustomScrollbar>
      </MainContainer>

      <AsideContainer extraClasses="component-border-vertical">
        <CustomScrollbar>
          <div></div>
        </CustomScrollbar>
      </AsideContainer>
    </>
  );
}
