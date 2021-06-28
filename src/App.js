import axios from 'axios';
import React from 'react';
import { Header, Button, Segment, Card, Icon, Grid, Image } from 'semantic-ui-react';
import styled, {keyframes} from 'styled-components'
import HeaderText from './styled/HeaderText';


class App extends React.Component {
  state = { repos: [], loading: true }
  componentDidMount() {
    this.getRepos()
  }
  getRepos = async () => {
    let res = await axios.get('https://api.github.com/users/facebook/repos?sort=created')
    console.log(res)
    this.setState({
      repos: res.data,
      loading: false
    })
  }

  renderComponents = () => {
    const { repos } = this.state
    let repo_cards = repos.map(r => {
      return (
        <Grid.Column>
          <StyledCard>
            <Card.Content>
              <Card.Header>
                <Truncated>{r.full_name}</Truncated>
              </Card.Header>
              <Card.Meta>
                <Star>
                <Icon name='star' />
                </Star>
              </Card.Meta>
                
              <Card.Description>
                {r.description}
            </Card.Description>
            </Card.Content>
          </StyledCard>
        </Grid.Column>
      )
    })
    return (
      <Grid columns='three'>
        <Grid.Row>
          {repo_cards}
        </Grid.Row>
      </Grid>
    )
  }

  render() {
    const { loading } = this.state
    return (
      <AppContainer>
        <HeaderText fontSize='large' color='light'>My Portfolio</HeaderText>
        <Segment as={Transparent}>
          <HeaderText fontSize='small' color='medium'>My Projects</HeaderText>
          {loading ? <p>spinner here</p> : this.renderComponents()}

        </Segment>
        <Segment as={Transparent}>
          <HeaderText color='dark'>Contact</HeaderText>
        </Segment>
      </AppContainer>
    )
  }
}

const AppContainer = styled.div`
  background: linear-gradient(#FFBD71, #FFDCA2);
`

const Transparent = styled.div`
  background: transparent !important;
`



const Truncated = styled.div`
  white-space: nowrap !important; 
  overflow: hidden !important; 
  text_overflow: ellipsis !important; 
`

const rotate360 = keyframes `
  from{
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`

const StyledCard = styled(Card)`
  background-color: #ddd;
  border: none;
  height: 200px;
  &:hover{
    background-color: #c73866;
    transition: 3s;
  }

`


const Star = styled.div `
  display: inline-block;
  text-shadow: 1px 1px 1px black;
  &:hover !important {

    animation: ${rotate360} 2s infinite linear !important;
    color: blue !important;
  }
`

export default App;