import { Container, Divider, HourText, MealText, Status } from "./styles";

export function Meal() {
    return (
        <Container>
            <HourText>20:00</HourText>
            <Divider />
            <MealText>X-Tudo</MealText>
            <Status type='SECONDARY' />
        </Container>
    )
}