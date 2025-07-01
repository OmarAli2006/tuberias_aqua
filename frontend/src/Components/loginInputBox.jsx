const LoginInputBox = ({type, id, text, icon}) => {
  return (
    <div className="input-box">
      <input type= {type} className="input-field" id={id} required/>
      <label htmlFor= {id} className="label-field">{text}</label>
      <i className="icon-field">{icon}</i>
    </div>
  )
}

export default LoginInputBox