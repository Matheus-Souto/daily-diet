import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

export type StatusTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
    type: StatusTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    width: 100%;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    align-items: center;
    flex-direction: row;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_300};
    padding: 0 10px;
    margin-bottom: 10px;
`

export const HourText = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    font-size: 12px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    line-height: 15.6px;
    margin-right: 10px;
    font-weight: 700;
`

export const Divider = styled.View`
    width: 1px;
    height: 14px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    margin-right: 10px;
`

export const MealText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: 16px;
    line-height: 20.8px;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Status = styled(View) <Props>`
    position: absolute;
    top: 19px;
    right: 0;
    left: 330px;
    bottom: 0;
    width: 14px;
    height: 14px;
    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
    border-radius: 14px;
`

export const DateText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 23.4px;
    margin-top: 20px;
`