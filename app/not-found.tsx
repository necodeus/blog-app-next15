import { AsideContainer } from "@components/AsideContainer";
import { BasicSection } from "@components/BasicSection";
import { MainContainer } from "@components/MainContainer";
import { SectionWrapper } from "@components/SectionWrapper";

import { ExternalLinks } from "@components/common-external-links/ExternalLinks";
import { OtherPosts } from "@components/common-other-posts/OtherPosts";
import { ErrorHeader } from "@components/error-header/ErrorHeader";

export default function NotFound(props: any) {
    return (
        <div>
            <MainContainer>
                <SectionWrapper width="var(--desktop-main-content-width)">
                    <BasicSection
                        width="var(--main-width)"
                        extraClasses="component-border-vertical lg:h-[100vh]"
                    >
                        <ErrorHeader code={404} message="Page was not found!" />
                    </BasicSection>
                </SectionWrapper>
            </MainContainer>

            <AsideContainer extraClasses="component-border-vertical">
                <BasicSection>
                    <OtherPosts />
                </BasicSection>
                <BasicSection>
                    <ExternalLinks />
                </BasicSection>
            </AsideContainer>
        </div>
    );
};
