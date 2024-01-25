import { HeaderHome } from "@components/HeaderHome"
import { Container } from "./styles"
import { Percent } from "@components/Percent"

export function Home() {
    return (
        <Container>
            <HeaderHome />
            <Percent />
        </Container>
    )
}