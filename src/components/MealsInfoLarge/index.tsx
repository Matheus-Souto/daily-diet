import { Container, Text, Title } from "./styles";

type Props = {
    title: string;
    text: string;
}
export function MealsInfoLarge({title, text}: Props) {
    return (
        <Container>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Container>
    )
}