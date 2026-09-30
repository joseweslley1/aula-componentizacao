import logo from "../../../public/logo.png"
import { FcGoogle } from "react-icons/fc"; 
import {FaLinkedin } from "react-icons/fa";

import "./LoginBody.css"
function LoginBody() {

  return (
    <>
     <section id="login-body">
        <div id="login-form">
            <div id="logo-container">
                <img id="login-logo" src={logo} alt="" />
                <p>Entre na sua conta</p>
            </div>
            <div id="input-container">
                <input type="text" placeholder="Digite seu usuario" />
                <input type="password" placeholder="Digite sua senha" />
                <a href="">Esqueceu a senha ?</a>
                <button>Entrar</button>
            </div>
            <div id="container-links">
                <div id="container-entre-com">
                    <hr />
                    <p>Ou entre com:</p>
                    <hr />
                </div>
                <div id="container-button">
                    <button> <FcGoogle size={20}/> Google</button>
                    <button> <FaLinkedin size={20} color="#0A66C2" /> Linkedin</button>
                </div>
                <div id="container-cadastre-se">
                    <p>Ainda não tem uma conta? <a href="">Cadastre-se aqui</a></p>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default LoginBody
