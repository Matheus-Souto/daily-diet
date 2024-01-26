import { HeaderStatistics } from "@components/HeaderStatistics";
import { Container, Content, Title } from "./style";
import { MealsInfoLarge } from "@components/MealsInfoLarge";

export function Statistics() {
    return (
        <Container>
            <HeaderStatistics />
            <Content>
                <Title>Estatísticas gerais</Title>
                <MealsInfoLarge title="22" text="melhor sequência de pratos dentro da dieta" />
                <MealsInfoLarge title="109" text="refeições registradas" />
            </Content>
        </Container>
    )
}