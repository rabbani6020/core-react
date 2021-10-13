const FunctionalComponent = (props) => {
  return (
    <>
      <div className="functional  section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2> Hi i am from {props.name} component</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunctionalComponent;
