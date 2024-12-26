import { StyledBtn } from "./btnStyle"

const Button = ({onClick, value, name}) => {
    return(
        <StyledBtn onClick={onClick} value={value}>{name}</StyledBtn>
    )
}

export default Button