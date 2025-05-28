import ClipLoader from 'react-spinners/ClipLoader';

type LoaderProps = {
  size?: number;
};

const Loader = ({ size = 15 }: LoaderProps) => {
  return (
    <div className="my-4 flex w-full flex-col items-center justify-center">
      <ClipLoader color="#7B68EE" size={size} />
    </div>
  );
};

export default Loader;
