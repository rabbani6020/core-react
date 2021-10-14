// External imports
import React from "react";

// Internal imports
import Student1 from "./student1";
import Student2 from "./student2";
import Student3 from "./student3";

// Student component
const Student = () => {
  return (
    <>
      <div className="main-student">
        <Student1 />
        <Student2 />
      </div>
    </>
  );
};

export default Student;
