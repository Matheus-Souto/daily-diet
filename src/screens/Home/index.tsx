import { HeaderHome } from "@components/HeaderHome"
import { Container, MealsText } from "./styles"
import { Percent } from "@components/Percent"
import { Button } from "@components/Button"

export function Home() {
    return (
        <Container>
            <HeaderHome />
            <Percent />
            <MealsText>
                Refeições
            </MealsText>
            <Button title="Nova Refeição" icon />
        </Container>
    )
}