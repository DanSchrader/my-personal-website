import styled from 'styled-components';
import BDLogo from '../images/beerserker-design-logo.svg'

export default function NavBar () {
    return <NavBarWrapper>
        <BDLogoWrapper src={BDLogo} alt='Beerserker-Design-Logo' />
        <Title>Beerserker Design - Daniel Schrader</Title>
    </NavBarWrapper>
}

const NavBarWrapper = styled.header`
display: grid;
grid-template-columns: 48px auto;
gap: 10px;
align-items: center;
`

const BDLogoWrapper=styled.img`
display: grid;
width: 48px;
`

const Title = styled.h1`
display: grid;
margin: 0;
padding: 0;
font-size: 200%;
font-weight: 300;
`