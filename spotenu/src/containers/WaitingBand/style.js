import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

export const MainWrapper = styled.div`
display: flex;
`

export const TitleWrapper = styled.h1`

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

export const Paragraph = styled.p`

`