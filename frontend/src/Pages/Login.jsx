import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import LoginInputBox from "../Components/loginInputBox";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="form-header">
          <div className="titles">
            <div className="title-login">ACCESO</div>
          </div>
        </div>
        <form className="form-login" autoComplete="off">
          <LoginInputBox
            type="email"
            id="log-email"
            text="Email"
            icon={<MdOutlineMail />}
          />
          <LoginInputBox
            type="password"
            id="log-password"
            text="Contraseña"
            icon={<CiLock />}
          />
          <div className="form-cols">
            <div className="col-1"></div>
            <div className="col-2">
              <a href="#" className="btn-login">
                Recuperar Contraseña
              </a>
            </div>
          </div>
          <div className="input-box">
            <button className="btn-submit" id="SignInBtn">
              Iniciar Sesión
              <i>
                <IoLogOutOutline />
              </i>
            </button>
          </div>
          <div className="switch-form">
            <span>
              ¿No tienes cuenta? <a href="#">Registrate</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
