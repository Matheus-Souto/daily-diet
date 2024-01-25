import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    icon?: boolean;
}

export function Button({ title, icon, ...rest }: Props) {
    return (
        <Container {...rest}>
            { icon ? <Icon /> : null }
            <Title>
                {title}
            </Title>
        </Container>
    )
}