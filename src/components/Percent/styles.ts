import { ArrowUpRight } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  padding: 20px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 30px;
`

export const PercentText = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    text-align: center;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: 32px;
    line-height: 41.6px;
`

export const MealsText = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    text-align: center;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: 14px;
    line-height: 18.2px;
`

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
    size: 18,
    color: theme.COLORS.GREEN_DARK,
}))`
    position: absolute;
    top: 10px;
    left: 335px;
    right: 0;
    bottom: 0;
`