import { TouchableOpacityProps, View } from "react-native";
import { Container, Divider, HourText, MealText, Status } from "./styles";

type Props = TouchableOpacityProps & {
    hour: string;
    meal: string;
    status: string;
}
export function Meal({ hour, meal, status }: Props) {
    return (
        <View style={{}}>
            <Container>
            <HourText>{hour}</HourText>
            <Divider />
            <MealText>{meal}</MealText>
            <Status type={status} />
        </Container>
        </View>
        
    )
}