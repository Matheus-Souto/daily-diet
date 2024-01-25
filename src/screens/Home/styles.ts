import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
`;

export const MealsText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 16px;
  line-height: 20.8px;
  margin-top: 40px;
  margin-bottom: 10px;
`