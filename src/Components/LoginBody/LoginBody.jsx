import logo from "../../../public/logo.png"
import "./LoginBody.css"
function LoginBody() {

  return (
    <>
     <section id="login-body">
        <div>
            <div>
                <img id="login-logo" src={logo} alt="" />
                <p>Entre na sua conta</p>
            </div>
            <div>
                <input type="text" placeholder="Digite seu usuario" />
                <input type="password" placeholder="Digite sua senha" />
                <a href="">Esqueceu a senha ?</a>
                <button>Entrar</button>
            </div>
            <div>
                <div>
                    <hr />
                    <p>Ou entre com:</p>
                    <hr />
                </div>
                <div>
                    <button>Google</button>
                    <button>Linkedin</button>
                </div>
                <div>
                    <p>Ainda não tem uma conta? <a href="">Cadastre-se aqui</a></p>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default LoginBody
