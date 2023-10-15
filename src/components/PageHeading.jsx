const PageHeading = (props) => {
  const { title } = props;

  return (
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
      {title}
    </h2>
  );
};

export default PageHeading;
