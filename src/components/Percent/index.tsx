import { TouchableOpacity } from "react-native";
import { Container, Icon, MealsText, PercentText } from "./styles";

export function Percent() {
    return (
        <TouchableOpacity>
            <Container>
                <Icon />
                <PercentText>
                    90,86%
                </PercentText>
                <MealsText>
                    das refeições dentro da dieta
                </MealsText>
            </Container>
        </TouchableOpacity>
    )
}