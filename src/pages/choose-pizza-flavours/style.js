import styled from 'styled-components'
import CardLink from '../../components/card-link'

export const Img = styled.img`
    width: 200px;
`

export const Label = styled(CardLink).attrs({
    component: 'label'
})``