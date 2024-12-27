import { StyledBtn } from "./btnStyle"

const Button = ({onClick, value, name,style}) => {
    return(
        <StyledBtn style={style} onClick={onClick} value={value}>{name}</StyledBtn>
    )
}

export default Button