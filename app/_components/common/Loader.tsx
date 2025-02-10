import ClipLoader from 'react-spinners/ClipLoader';

const Loader = () => {
  return (
    <div className="my-4 flex flex-col items-center justify-center">
      <ClipLoader color="#ffffff" size={15} />
    </div>
  );
};

export default Loader;
