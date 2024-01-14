type Props = {
  text: string;
  type: string;
};

const Button = ({ text, type }: Props) => {
  return (
    <button
      className={`${
        type === 'secondary' ? 'bg-secondary' : 'bg-primary'
      } tracking-widest hover:opacity-80 cursor-pointer text-[#ffffff] text-lg py-3 px-8 rounded-full border-b-2 drop-shadow-xl border-b-[#0000004d]`}
    >
      {text}
    </button>
  );
};

export default Button;
