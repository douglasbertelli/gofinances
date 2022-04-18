import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../../global/styles/theme';

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  margin-top: -5px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.attendion};
`;
