import Logo from "@/components/Logo";
import Icons from "@/components/Icons";

type TitleProps = {
  children: string;
};

type ListProps = {
  title: string;
  items: string[];
};

const FooterListTitle = ({ children }: TitleProps) => (
  <div className="font-roboto-condensed font-bold text-2xl whitespace-nowrap text-brand-blue-50 mb-1 lg:mb-5">
    {children}
  </div>
);

const FooterList = ({ title, items }: ListProps) => {
  return (
    <div>
      <FooterListTitle>{title}</FooterListTitle>
      <ul className="font-roboto text-brand-grey-900">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => (
  <div className="bg-brand-grey-600">
    <div className="container flex flex-col py-10 items-center gap-10 self-stretch md:max-lg:px-10">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center md:items-start self-stretch">
        <div>
          <Logo />
          <div className="hidden md:block text-brand-grey-900 mt-3 italic font-playfair">
            <br />
          "Unleashing Passion, Forging Victory:
          <br /> Hajduk Pride Never Subsides."
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-11">
          <FooterList
            title="Sitemap"
            items={[
              "Home",
              "Showcase",
              "Blog",
              "About",
              "Contact Us",
            ]}
          />
          <div>
            <FooterListTitle>Contact Us</FooterListTitle>
            <ul className="font-roboto text-brand-grey-900 mb-4">
              <li>Ruđera Boškovića 32</li>
              <li>21000, Split, Croatia</li>
            </ul>
            <ul className="font-roboto text-brand-grey-900 mb-4">
              <li className="flex gap-2 items-center">
                +385 123 0000
              </li>
              <li className="flex gap-2 items-center">
                design@fesb.hr
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="font-roboto text-brand-grey-900 text-base sm:text-lg">
        Copyright @ 2023 FESB. All rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
