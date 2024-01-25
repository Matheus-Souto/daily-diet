import styled from "styled-components/native"

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.Image`
`

export const Photo = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_600};
`