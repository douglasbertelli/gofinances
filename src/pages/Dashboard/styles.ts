import styled from 'styled-components/native';
import { FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import themes from '../../global/styles/theme';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

import { DataListProps } from '.';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => themes.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => themes.colors.primary};
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 25px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Photo = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  border-radius: 10px;
  background-color: #fff;
`;
export const User = styled.View`
  margin-left: 15px;
`;
export const UserGreeting = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(20)}px;

  color: ${(theme) => themes.colors.shape};
  font-family: ${(theme) => themes.fonts.regular};
`;
export const UserName = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(20)}px;
  color: ${(theme) => themes.colors.shape};
  font-family: ${(theme) => themes.fonts.bold};
`;

export const Icon = styled(Feather)`
  color: ${(theme) => themes.colors.secondary};
  font-size: ${RFValue(24)}px;
`;

export const LogoutButton = styled(TouchableOpacity)``;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 25, paddingRight: 15 },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
  flex: 1;
  padding: 0 25px;
  margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${(theme) => themes.fonts.regular};
  margin-bottom: 23px;
`;

export const TransactionList = styled(
  FlatList as new (props: FlatListProps<DataListProps>) => FlatList<DataListProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: getBottomSpace() },
})``;
