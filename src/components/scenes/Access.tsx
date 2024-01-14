import TextsDiv from '../TextsDiv';
import tablet from '../../assets/images/image-devices.png';

const Access = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-10">
      <TextsDiv
        title="Access Clipboard anywhere"
        desc="Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks."
        textAligment="center"
        titleSize="text-xl sm:text-3xl"
        descSize="text-sm"
        descMaxWidth="max-w-md"
        gapSize="mb-3"
      />
      <div>
        <img src={tablet} alt="tablet-mobile" />
      </div>
    </div>
  );
};

export default Access;
