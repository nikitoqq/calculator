import { StyledButton } from "./style"

const Button = ({onClick, value, name,style}) => {
    return(
        <StyledButton style={style} onClick={onClick} value={value}>{name}</StyledButton>
    )
}

export default Button