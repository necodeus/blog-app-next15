import Link from "next/link";

import Scrollbar from "@components/Scrollbar/Scrollbar";
import { AsideContainer } from "@components/AsideContainer/AsideContainer";
import { BasicSection } from "@components/BasicSection/BasicSection";
import { MainContainer } from "@components/MainContainer/MainContainer";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import { SectionTitle } from "@components/SectionTitle/SectionTitle";
import { TopNavbar } from "@components/TopNavbar/TopNavbar";

import styles from './AuthorView.module.css';
import { AsideProfiles } from "@components/AsideProfiles/AsideProfiles";
import { AsideLinks } from "@components/AsideLinks/AsideLinks";
import { EXTERNAL_LINKS } from "@components/AsideLinks/consts";

export default function AuthorView({ author, posts }: any) {
  return (
    <>
      <TopNavbar />
      <MainContainer extraClasses="lg:h-[100vh]">
        <Scrollbar>
          <SectionWrapper
            width="var(--desktop-main-content-width)"
            extraClasses="flex-grow"
            childrenClasses="flex-grow flex flex-col"
          >
            <BasicSection width="var(--main-width)" extraClasses="component-border-vertical component-border-bottom overflow-hidden">
              <SectionTitle containerClass="p-[30px] component-border-bottom">
                <h1><b>Profil </b>autora</h1>
              </SectionTitle>
              <div className="font-jost">
                <div className="component-padding relative bg-white">
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
            </BasicSection>

            <BasicSection width="var(--main-width)" extraClasses="component-border-vertical pt-[30px] font-jost pb-[30px] flex-grow">
              {posts?.length > 0 && <div className={"grid px-[30px] pb-[30px] gap-[25px] " + styles.responsiveGrid + " component-border-bottom"}>
                {posts.map((post: any) => (
                  <Link href={post.path || ''} key={post.id}>
                    <div className="relative mb-[18px]">
                      <div className="absolute left-[-10px] bg-[#fff] top-[15px] border-[1px] border-solid border-[#cfcfcf] text-[11px] p-[5px_12px] uppercase font-[600] tracking-[2px]">
                        {post.tagName}
                      </div>
                      <img className="h-[150px] object-cover" src={post.image} />
                    </div>
                    <div className="text-[20px] font-[500] mb-[2px]">{post.title}</div>
                  </Link>
                ))}
              </div>}
              {posts?.length === 0 && <div className="px-[30px] pb-[30px] component-border-bottom">Brak wpisów</div>}
            </BasicSection>
          </SectionWrapper>
        </Scrollbar>
      </MainContainer>

      <AsideContainer extraClasses="component-border-vertical">
        <Scrollbar>
          <AsideProfiles />
          <AsideLinks links={EXTERNAL_LINKS} />
          {/* <AsideSpotify /> */}
        </Scrollbar>
      </AsideContainer>
    </>
  );
}
