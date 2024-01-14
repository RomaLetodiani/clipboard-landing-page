import { footerTexts, socials } from '../shared/consts';
import logo from '../../assets/images/logo.svg';

const Footer = () => {
  return (
    <div className="py-10 px-28 bg-[#f3f4f6]">
      <div className="flex flex-col gap-10 md:flex-row items-center justify-between max-w-[1440px] ">
        <div className="flex flex-col items-center md:flex-row gap-[clamp(2rem,5vw,12rem)] flex-[2]">
          <img className="w-[60px] h-[60px]" src={logo} alt="Clipboard" />
          <div className="flex flex-col text-center md:text-left md:flex-row md:gap-20 gap-0">
            <div>
              {footerTexts.slice(0, 2).map((text) => (
                <p
                  className="text-lg leading-loose text-darkGreyBlue"
                  key={text.id}
                >
                  {text.title}
                </p>
              ))}
            </div>
            <div>
              {footerTexts.slice(2, 4).map((text) => (
                <p
                  className="text-lg leading-loose text-darkGreyBlue"
                  key={text.id}
                >
                  {text.title}
                </p>
              ))}
            </div>
            <div>
              {footerTexts.slice(4).map((text) => (
                <p
                  className="text-lg leading-loose text-darkGreyBlue"
                  key={text.id}
                >
                  {text.title}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 justify-end flex gap-5">
          {socials.map((social) => (
            <a key={social.id} target="_blank" href={social.link}>
              <img src={social.icon} alt={social.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
