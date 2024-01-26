import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`

export const Content = styled.View`
    flex: 1;
    padding: 33px 24px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    align-items: center;
`

export const  Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-weight: 700;
    font-size: 14px;
    line-height: 18.2px;
    margin-bottom: 23px;
`