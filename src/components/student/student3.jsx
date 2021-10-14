import React from "react";

class Student3 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Md. Abdur Rahim",
      age: 28,
      result: "Pass",
    };
  }

  render() {
    const { name, age, result } = this.state;

    return (
      <>
        <div className="student3 py-2">
          <p className="name m-0">Name: {name}</p>
          <p className="name m-0">Age: {age}</p>
          <p className="name m-0">Result: {result}</p>
        </div>
      </>
    );
  }
}

export default Student3;
