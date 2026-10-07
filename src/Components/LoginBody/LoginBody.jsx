import logo from "../../../public/logo.png"
import { FcGoogle } from "react-icons/fc"; 
import {FaLinkedin } from "react-icons/fa";

import "./LoginBody.css"
import LoginInputForm from "../LoginInputForm/LoginInputForm";
import ButtonFormLink from "../ButtonFormLink/ButtonFormLink";
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
                <LoginInputForm
                type="text"
                placeholder="Digite seu usuário"
                />
                <LoginInputForm
                type="password"
                placeholder="Digite sua senha"
                />
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
                    <ButtonFormLink
                    icon={<FcGoogle size={20}/>}
                    name="Google"
                    />
                    <ButtonFormLink
                    icon={<FaLinkedin size={20} color="#0A66C2" />}
                    name="Linkedin"
                    />
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
