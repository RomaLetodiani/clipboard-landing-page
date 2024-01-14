import useMediaQuery from '@/hooks/useMediaQuery';

const Backgrounds = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 500px)');

  return (
    <div
      className={`-z-20 absolute top-0 w-full h-[400px] bg-cover bg-center ${
        isAboveMediumScreens ? 'bg-desktop' : 'bg-mobile'
      }`}
    >
      <div className="-z-10 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
    </div>
  );
};

export default Backgrounds;
