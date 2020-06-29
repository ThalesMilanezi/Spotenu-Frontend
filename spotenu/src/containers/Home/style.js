import styled from 'styled-components'
import { Grid, Paper } from '@material-ui/core'

export const MainWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 4fr;

`

export const GridWrapper = styled(Grid)`
display: grid;
grid-template-columns: 1fr;
height: 50vh;
max-width: 80vw;
margin:0 auto;
padding: 16px;
gap: 12px;
`

export const PaperWrapper = styled(Paper)`
display: grid;
grid-template-columns: 1fr;
/* height: 50vh;
max-width: 80vw; */
margin:0 auto;
padding: 16px;
gap: 12px;
`