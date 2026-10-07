function InputFormCadastro(props) {

  return (
    <>
        <label>{props.label}</label>
       <input id="input-cadastro-body" style={props.style} type={props.type} placeholder={props.placeholder} /> 
    </>
  )
}

export default InputFormCadastro
