const Heading = ({ title }: { title: string }) => {
  return (
    <div>
      <div className="text-center">
        <span className="text-light-secondary-txt dark:text-dark-primary-txt border-b-4 text-3xl border-b-light-secondary-txt dark:border-b-dark-primary-txt">
          &lt; <span className="text-primary">{title}</span> &gt;
        </span>
      </div>
    </div>
  );
};

export default Heading;
