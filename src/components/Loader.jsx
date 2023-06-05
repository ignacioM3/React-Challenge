import { ChaoticOrbit } from '@uiball/loaders'
import styled from 'styled-components'


const Loader = () => {
  return (
    <Container>
      <ChaoticOrbit size={25} speed={1.5} color="black" />
    </Container>
  )
}


const Container = styled.div`
  margin: 30px auto;
`
export default Loader