import styled from 'styled-components';
import BDLogo from '../images/beerserker-design-logo.svg';
import BPLogo from '../images/beerserker-productions-logo.svg';
import BILogo from '../images/burns-iceman-logo.svg';

export default function NavBar () {
    return <NavBarWrapper>
        <LogoContainer>
        <BDLogoWrapper src={BDLogo} alt='Beerserker-Design-Logo' />
        <BPLogoWrapper src={BPLogo} alt='Beerserker-Productions-Logo' />
        <BILogoWrapper src={BILogo} alt='Burns-and-Iceman-Logo' />
        </LogoContainer>
        <Title>Daniel Schrader</Title>
    </NavBarWrapper>
}

const NavBarWrapper = styled.header`
display: grid;
grid-template-areas: 'logos title';
grid-template-columns: 164px auto;
gap: 10px;
align-items: center;
justify-items: start;

@media screen and (max-width: 960px) {
    grid-template-areas: 'logos'
                         'title';
    grid-template-columns: none;
    justify-items: center;
    gap: 5px;
}
`

const LogoContainer = styled.div`
grid-area: logos;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 10px;

@media screen and (max-width: 960px) {
    gap: 20px;
}

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
grid-area: title;
display: grid;
margin: 0;
padding: 0;
font-size: 200%;
font-weight: 300;

@media screen and (max-width: 960px) {
    font-size: 150%;
}
`