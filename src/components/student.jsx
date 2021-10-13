const Student = ({ name, classNo, age, result, language,myObj }) => {
  return (
    <>
      <div className="student py-2">
        <h2 className="name">Name :{name} </h2>
        <div>Class:{classNo} </div>
        <div>Age: {age}</div>
        <div>Result:{result} </div>

        <div className="loves">
          {language.map((ele) => (
            <p className="m-0 fw-bold">
              {name} loves {ele}
            </p>
          ))}
        </div>

        <div>a: {myObj.a} b: {myObj.b}</div>
      </div>
    </>
  );
};

export default Student;
