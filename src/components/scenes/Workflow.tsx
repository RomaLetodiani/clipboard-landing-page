import Button from '../UI/Button';
import { companies, workFlow } from '../shared/consts';
import TextsDiv from '../TextsDiv';

const Workflow = () => {
  return (
    <div className="flex flex-col items-center">
      <TextsDiv
        textAligment="center"
        titleSize="text-xl sm:text-3xl"
        gapSize="mb-5"
        title="Supercharge your workflow"
        desc="We've got the tools to boost your productivity."
      />
      <div className="flex flex-col md:flex-row gap-10 mt-20">
        {workFlow.map((item) => (
          <div className="flex flex-col items-center gap-10" key={item.id}>
            <img src={item.icon} alt={item.title} />
            <TextsDiv
              textAligment="center"
              descMaxWidth="max-w-[20rem]"
              title={item.title}
              titleSize="sm:text-2xl"
              desc={item.desc}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-20 my-20">
        {companies.map((item) => (
          <div className="flex justify-center items-center">
            <img key={item.id} src={item.logo} alt={item.alt} />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-10 my-20">
        <TextsDiv
          textAligment="center"
          titleSize="text-2xl sm:text-3xl"
          descSize="text-lg"
          gapSize="mb-5"
          descMaxWidth="max-w-[43rem]"
          title="Clipboard for iOS and Mac OS"
          desc="Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard."
        />
        <div className=" flex flex-col md:flex-row gap-5 justify-center items-center">
          <Button text="Download for IOS" type="primary" />
          <Button text="Download for Mac" type="secondary" />
        </div>
      </div>
    </div>
  );
};

export default Workflow;
