import React, { Component } from "react";

import { studentListData } from "../../constant/data/studentInfo";

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentInfoList: studentListData,
    };
  }

  deleteStudentHandler = (id, index) => {
    this.setState({
      studentInfoList: this.state.studentInfoList.filter(
        (std) => std.id !== id
      ),
    });
  };

  render() {
    const { studentInfoList } = this.state;
    return (
      <>
        <div className="student-list-table py-5">
          <h2 className="title text-center mb-4">Student List</h2>
          <table className="table table-bordered table-responsive align-middle">
            <thead class="table-head-primary">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Mobile No</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {studentInfoList.map((student) => (
                <tr
                  key={student.id}
                  className={student.id % 2 === 0 ? "bg-light" : "bg-dark"}
                >
                  <th scope="row">{student.id}</th>
                  <td>{student.name}</td>
                  <td>{student.mobileNo}</td>
                  <td>{student.email}</td>
                  <td>{student.address}</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => this.deleteStudentHandler(student.id)}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                        <button type="button" className="btn btn-warning">
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default StudentList;
