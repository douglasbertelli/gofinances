import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons"
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import themes from "../../global/styles/theme";

interface TypeProps {
  type: 'up' | 'down' | 'total'
}

export const Container = styled.View<TypeProps>`
  background-color: ${ ( {theme, type } ) => type === 'total' ? themes.colors.secondary :  themes.colors.shape };
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 20px 20px ${RFValue(40)}px 20px;
  margin-right: 15px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text<TypeProps>`
  font-family: ${(theme)=> themes.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${ ( {theme, type } ) => type === 'total' ? themes.colors.shape :  themes.colors.text_dark };
`

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;
  
  ${(props)=> props.type === 'up' && css`
    color: ${(theme)=> themes.colors.success};
  `};

  ${(props)=> props.type === 'down' && css`
    color: ${(theme)=> themes.colors.attendion};
  `};

  ${(props)=> props.type === 'total' && css`
    color: ${(theme)=> themes.colors.shape};
  `};
`

export const Footer = styled.View`

`

export const Amount = styled.Text<TypeProps>`
  font-family: ${({theme})=> themes.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${ ( {theme, type } ) => type === 'total' ? themes.colors.shape :  themes.colors.text_dark };
  margin-top: 38px;
`

export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${({theme})=> themes.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${ ( {theme, type } ) => type === 'total' ? themes.colors.shape :  themes.colors.text };
`
