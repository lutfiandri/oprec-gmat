const Dummy = ({ text }) => {
  return (
    <div className="bg-white rounded-md p-2 col-span-5">
      <div className="h-60 flex justify-center items-center">{text}</div>
    </div>
  );
};

export default Dummy;
