type Props = {
  title: string;
  desc: string;
  textAligment?: string;
  titleSize?: string;
  descSize?: string;
  descMaxWidth?: string;
  gapSize?: string;
};

const TextsDiv = ({
  title,
  desc,
  textAligment,
  titleSize,
  descSize,
  descMaxWidth,
  gapSize,
}: Props) => {
  return (
    <div
      className={`${
        textAligment === 'center'
          ? 'text-center'
          : textAligment === 'right'
          ? 'text-right'
          : 'text-left'
      }`}
    >
      <p className={`${titleSize} ${gapSize} font-semibold text-darkGreyBlue`}>
        {title}
      </p>
      <p className={`${descSize} ${descMaxWidth} text-GrayishBlue`}>{desc}</p>
    </div>
  );
};

export default TextsDiv;
