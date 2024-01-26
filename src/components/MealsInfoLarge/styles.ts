import styled from "styled-components/native";

export const Container = styled.View`
    padding: 16px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    align-self: stretch;
    margin-bottom: 14px;
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-weight: 700;
    font-size: 24px;
    line-height: 31.2px;
    margin-bottom: 10px;
`

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_700};    
    line-height: 18.2px;
`