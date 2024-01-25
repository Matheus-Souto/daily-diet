import { Plus } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    width: 100%;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const Title = styled.Text`
    font-size: 14px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.WHITE};
    line-height: 18.2px;
`

export const Icon = styled(Plus).attrs(({ theme }) => ({
    size: 16,
    color: theme.COLORS.WHITE,
}))`
    margin-right: 10px;
`