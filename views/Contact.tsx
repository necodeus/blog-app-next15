import {
  TopNavbar,
  SectionTitle,
  ContentContainer,
  Scrollbar,
  AsideContainer,
  MainContainer,
} from "@/components";
import { Discord } from "@/components/Icons/Discord";
import { Email } from "@/components/Icons/Email";

type Props = {
  navigation: {
    url: string;
    name: string;
  }[];
};

export default function Contact({ navigation }: Props) {
  return (
    <>
      <TopNavbar items={navigation} />

      <MainContainer>
        <AsideContainer className="aside-left"></AsideContainer>

        <ContentContainer className="main">
          <Scrollbar>
            <SectionTitle text="Kontakt" className="p-[30px]" />

            <div className="p-[30px] component-border-bottom">
            Jeśli chcesz się ze mną skontaktować, możesz użyć jednej z poniższych metod kontaktu.
            </div>

            <div className="flex flex-col gap-[30px] p-[30px] component-border-bottom">
              <a className="flex items-center gap-[20px]" href="mailto:dawid@necodeo.com">
                <div className="bg-[#dfdfdf] inline-block p-[10px] rounded-[3px]">
                  <Email width="30" height="30" />
                </div>
                <div>
                  <span className="font-medium">dawid@necodeo.com</span><br />
                  Wyślij wiadomość e-mail
                </div>
              </a>
              <a className="flex items-center gap-[20px]" href="https://discordapp.com/users/311588159160844300">
                <div className="bg-[#dfdfdf] inline-block p-[10px] rounded-[3px]">
                  <Discord width="30" height="30" />
                  
                </div>
                <div>
                  <span className="font-medium">necodeus</span><br />
                  Dodaj i napisz na Discord
                </div>
              </a>
            </div>
          </Scrollbar>
        </ContentContainer>

        <AsideContainer className="aside-right"></AsideContainer>
      </MainContainer>
    </>
  );
}
