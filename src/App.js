// import external css
import "./assets/dependency/font-awesome-v6/css/all.css";

//import app scss
import "./assets/scss/app.scss";

//  imports
import Header from "./components/header";
import Footer from "./components/footer";

import ClassComponent from "./components/classbase";
import FunctionalComponent from "./components/functionalComponent";

import Student from "./components/student";
import Student2 from "./components/student2";
import Student3 from "./components/student3";
import Counter from "./components/counter";
import Counter2 from "./components/counter2";

import Clock from "./components/Clock";
import Clock2 from "./components/clock2";
import Clock3 from './components/clock3'

function App() {
  return (
    <>
      {/* <Header />

      <ClassComponent name="Class Base"/>
      <FunctionalComponent name="Functional"/>

      <Footer /> */}

      {/* <Student
        name="Md. Golam Rabbani"
        classNo={12}
        age={25 + 2}
        result="Fail"
        language={["HTML", "CSS", "JS"]}
        myObj={{ a: 10, b: 20 }}
      />
      <Student2
        name="Md. Shahin Ahmed"
        classNo={11}
        age={25 - 2}
        result="Pass"
        language={["HTML", "CSS", "PHP", "WP"]}
        myObj={{ a: 10, b: 20 }}
      />

      <Student3 /> */}

      <Counter />
      {/* <Counter2 /> */}
      <Clock />
      {/* <Clock2 /> */}
      <Clock3 />
    </>
  );
}

export default App;
