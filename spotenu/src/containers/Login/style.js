import styled from 'styled-components'
import TextField  from '@material-ui/core/TextField'

export const FormWrapper = styled.form`
display: grid;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
border: 1px solid black;
max-width:50vw;
margin: 0 auto;
padding: 24px;
height: 80vh;
gap:4px;
`

export const TextFieldWrapper = styled(TextField)`
max-width: 20vw;
align-content: center;
`
