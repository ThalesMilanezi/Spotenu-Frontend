import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from "@material-ui/core/Typography"

export const BoxWrapper = styled(Box)`
background-color: #fff;
width: 100%;
height: 640px;
display: flex;
flex-direction: column;
align-items: center;
padding: 16px;
`

export const FormWrapper = styled.form`
display: grid;
gap:8px;
max-width:80vw;
margin: auto;
`

export const LogoWrapper = styled.div`
width: 504px;
height: 208px;
object-fit: contain;
position: absolute;
display: flex;
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
export const Text = styled(Typography)`
font-size: 32px;
letter-spacing: -0.39px;
text-align: center;
height: 64px;
display: flex;
align-items: center;
justify-content: center;
`
