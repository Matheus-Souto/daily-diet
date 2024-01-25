import { Container, Logo, Photo } from "./styles";
import logoImg from '@assets/logo.png'

export function HeaderHome() {
    console.log('Renderizando HeaderHome')
    return (
        <Container>
            <Logo source={logoImg} resizeMode="contain" />
            <Photo source={{uri: 'https://imgs.search.brave.com/Bnx2ZZLbbBQ88kTAD0fU1SfzX6k3LGTbxhFgDXmoY50/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cmV2aXN0YXBlc3Nv/YS5jb20vZmljaGVp/cm9zL2FydGlnb3Mv/dGFtYW5obzEvMTY4/OTUzMDc5OC5qcGc'}} />
        </Container>
    )
}