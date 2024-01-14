import TextsDiv from '../TextsDiv';
import computer from '../../assets/images/image-computer.png';
import { snippets } from '../shared/consts';
import useMediaQuery from '@/hooks/useMediaQuery';

const Snippets = () => {
  const isAboveMD = useMediaQuery('(min-width: 1060px)');
  return (
    <div className="flex flex-col items-center gap-10">
      <TextsDiv
        title="Keep track of your snippets"
        desc="Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything."
        textAligment="center"
        titleSize="text-xl sm:text-3xl"
        descMaxWidth="max-w-xl"
        gapSize="mb-5"
      />
      <div className="flex flex-col md:flex-row md:-left-44 relative gap-[clamp(3rem,9vw,8rem)] mt-5">
        <div className="max-w-[500px] md:max-w-none">
          <img src={computer} alt="Desktop" />
        </div>
        <div className="flex flex-1 flex-col gap-8 md:gap-16 justify-center ">
          {snippets.map((snippet) => (
            <TextsDiv
              key={snippet.id}
              title={snippet.title}
              desc={snippet.desc}
              textAligment={isAboveMD ? 'left' : 'center'}
              titleSize=" sm:text-2xl"
              descSize="text-sm"
              descMaxWidth="md:max-w-[18rem]"
              gapSize="mb-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Snippets;
