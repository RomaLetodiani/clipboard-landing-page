import logo from '../../assets/images/logo.svg';
import Button from '../UI/Button';
import TextsDiv from '../textsDiv';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 min-h-[600px]">
      <div>
        <img src={logo} alt="Clipboard" />
      </div>
      <TextsDiv
        title="A history of everything you copy"
        desc="Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices."
        titleSize="text-5xl"
        descSize="text-2xl"
        descMaxWidth="max-w-[50rem]"
        textAligment="center"
        gapSize="mb-4"
      />
      <div className="flex gap-4">
        <Button text="Download for IOS" type="primary" />
        <Button text="Download for Mac" type="secondary" />
      </div>
    </div>
  );
};

export default Hero;
