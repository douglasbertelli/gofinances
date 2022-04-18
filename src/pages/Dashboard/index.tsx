import React, { useCallback, useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
  LogoutButton,
} from './styles';

import HighlightCard from '../../components/HighlightCard';
import TransactionCard, {
  TransactionCardProps,
} from '../../components/TransactionCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export default function Dashboard() {
  /* UseState inicia vazio no formato de array */
  const [data, setData] = useState<DataListProps[]>([]);

  async function loadingTransactions() {
    
    /* Dados [Coleção] que está no AsyncStorage do dispositivo do usuário. */
    const dataKey = '@gofinances:transactions';
    
    /* Buscando os dados no AsyncStorage e armazenando na variavel response. */
    const response = await AsyncStorage.getItem(dataKey);
    
    /* Verificando se existe no AsyncStorge e transformando os dados de strings para objeto. */
    const transactions = response ? JSON.parse(response) : [];

    /* Formatando algums dados como: valor e data. */
    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        /* Formatando o dado amount no formato de moeda. */
        const amount = Number(item.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        /* Formatando a data. */
        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        }).format(new Date(item.date));

        /* Retornando os dados e formatandos. */
        return {
          ...item,
          amount,
          date
        };
      }
    );

    /* Passando os novos dados para o useState [setDada] */
    setData(transactionsFormatted);
  }

  useEffect(() => {
    loadingTransactions();
  }, []);

  useFocusEffect(useCallback(() => {
    loadingTransactions();
  }, []))

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://i.pravatar.cc/146'}} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Douglas</UserName>
            </User>
          </UserInfo>

          <LogoutButton onPress={() => {}}>
            <Icon name={'power'} />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title={'Entradas'}
          amount={'R$ 17.400,00'}
          lastTransaction={'Última entrada dia 13 de abril'}
        />
        <HighlightCard
          type="down"
          title={'Saídas'}
          amount={'R$ 1.259,00'}
          lastTransaction={'Última saída dia 03 de abril'}
        />
        <HighlightCard
          type="total"
          title={'Total'}
          amount={'R$ 16.141,00'}
          lastTransaction={'01 à 16 de abril'}
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={(item: DataListProps) => item.id}
          renderItem={(item: DataListProps ) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
