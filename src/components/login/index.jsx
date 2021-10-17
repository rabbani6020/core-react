import ConRendering from "./ConRendering";
import LogInControl from "./logincontrol";

const Login = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <ConRendering />
            <LogInControl />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
