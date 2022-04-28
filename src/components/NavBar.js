import styled from 'styled-components';
import BDLogo from '../images/beerserker-design-logo.svg';
import BPLogo from '../images/beerserker-productions-logo.svg';
import BILogo from '../images/burns-iceman-logo.svg';

export default function NavBar () {
    return <NavBarWrapper>
        <BDLogoWrapper src={BDLogo} alt='Beerserker-Design-Logo' />
        <BPLogoWrapper src={BPLogo} alt='Beerserker-Productions-Logo' />
        <BILogoWrapper src={BILogo} alt='Burns-and-Iceman-Logo' />
        <Title>Daniel Schrader</Title>
    </NavBarWrapper>
}

const NavBarWrapper = styled.header`
display: grid;
grid-template-columns: 48px 48px 48px auto;
gap: 10px;
align-items: center;
`

const BDLogoWrapper = styled.img`
display: grid;
width: 48px;
`

const BPLogoWrapper = styled.img`
display: grid;
width: 48px;
`

const BILogoWrapper = styled.img`
display: grid;
width: 48px;
`

const Title = styled.h1`
display: grid;
margin: 0;
padding: 0;
font-size: 200%;
font-weight: 300;
text-align: center;
`