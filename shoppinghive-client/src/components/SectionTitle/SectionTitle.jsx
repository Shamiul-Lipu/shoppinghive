const SectionTitle = ({ titleText, quoteText }) => {
  return (
    <>
      <div className="text-center">
        <h3 className="border-t-4 border-t-amber-300 border-b-2 border-b-amber-100 inline-flex font-bold text-2xl py-1 text-blue-950">
          {titleText}
        </h3>
      </div>
      <div className="text-center">
        <h5 className="text-center border-b-4 border-b-amber-300 inline-flex font-medium text-gray-500">
          {quoteText}
        </h5>
      </div>
    </>
  );
};

export default SectionTitle;
