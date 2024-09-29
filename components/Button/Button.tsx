import { ButtonProps } from "./types"

const Button = ({className, onClick, children}: ButtonProps) => {
  return (
   <button onClick={onClick} className={`p-2 rounded-full ${className}`}>
      {children}
   </button>
  )
}

export default Button