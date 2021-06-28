import styled , {keyframes} from 'styled-components'

const fontSize = (size) => {
    switch (size) {
        case 'large':
            return '50px'
        case 'small':
            return '35px'
        default:
            return '20px'
    }
}

const color = (color) => {
    switch (color) {
        case 'light':
            return '#C73866'
        case 'medium':
            return '#FE676E'
        case 'dark':
            return '#FD8F52'
    }
}

const rotate360 = keyframes `
  from{
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`

const HeaderText = styled.h1`
    color: ${props => color(props.color)} !important;
    text-align: center;
    font-size: ${props => fontSize(props.fontSize)} !important;
    &:hover {
        animation: ${rotate360} 2s infinite linear;
        color: #ffdca2 !important;
      }
  `
export default HeaderText