import styled from "styled-components"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

export const MainWrapper = styled.div`
display: grid;
grid-template-columns: 2fr 2fr;
max-width: 80vw;
`

export const FormWrapper = styled.form`
display: grid;
gap:8px;
max-width:80vw;
margin: auto;
`

export const ButtonStyled = styled(Button)`
width: 100%;
height: 42px;
border-radius: 2px;
margin: 16px 0;
`

export const InputWrapper = styled(TextField)`
width: 30vw;
height: 56px;
margin: 8px 0;
`