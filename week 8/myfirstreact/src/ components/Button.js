
const Button = ({color, text, handler}) => {
  return (
    <button style={{backgroundColor: color}} className="btn" onClick={handler}>{text}</button>
  )
}

export default Button