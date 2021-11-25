import React from "react";
import axios from "axios";

const studentUrl = "http://localhost:4000/students";
const post2Url = "http://localhost:4000/post2/all-posts";

// axios.get(studentUrl).then((res) => console.log(res.data.data));
axios.get(post2Url).then((res) => console.log(res.data));


// const postBaseUrl = "https://jsonplaceholder.typicode.com/posts";

class HttpReqeustDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      students: [],
    };
  }

  componentDidMount() {
    // get Request
    // axios.get(postBaseUrl).then((res) => {
    //   const getPost = res.data.slice(0, 5);
    //   this.setState({
    //     posts: getPost,
    //   });
    // });

    axios.get(studentUrl).then((res) => {
      this.setState({
        students: res.data.data,
      });
    });
  }

  deleteStudentHandler = (id, index) => {
    this.setState({
      students: this.state.students.filter((std) => std._id !== id),
    });
  };

  render() {
    const { posts, students } = this.state;
    return (
      <>
        <h2>HTTP Request Demo</h2>
        {!!students.length ? (
          <div>
            <h2>Post shown here</h2>

            <div className="student-list-table py-5">
              <h2 className="title text-center mb-4">Student List</h2>
              <table className="table table-bordered table-responsive align-middle">
                <thead className="table-head-primary">
                  <tr>
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">Mobile No</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student._id}>
                      <th scope="row">{student.firstName}</th>
                      <td>{student.lastName}</td>
                      <td>{student.mobile}</td>
                      <td>{student.email}</td>
                      <td>
                        <div className="d-flex justify-content-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() =>
                                this.deleteStudentHandler(student._id)
                              }
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
          </div>
        ) : (
          <div>
            <h2>Loading...............</h2>
          </div>
        )}
        {/* {!!posts.length ? (
          <div>
            <h2>Post shown here</h2>
            <ul className="list-group">
              {posts.map((post) => (
                <li className="list-group-item" key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h2>Loading...............</h2>
          </div>
        )} */}
      </>
    );
  }
}

export default HttpReqeustDemo;
