import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StatisticMainCause, StatisticPriority, StatisticState } from '../feature/statistic/types/statistic';
import getState from '../feature/statistic/remote/getState';
import BubbleChart from '../feature/statistic/BubbleChart';
import getTokenFromLocalStorage from '../feature/auth/function/getTokenFromLocalStorage';

interface DataItem {
  key: string;
  data: Record<string, number>;
}

const StatisticPage: React.FC = () => {
  const userToken = getTokenFromLocalStorage();
  const [state, setState] = useState<Record<string, number> | null>(null);
  const [priority, setPriority] = useState<Record<string, number> | null>(null);
  const [mainCause, setMainCause] = useState<Record<string, number> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAll = async () => {
      if(userToken) {
        const st = await getState('state', userToken);
        const pr = await getState('priority', userToken);
        const ma = await getState('mainCause', userToken);

        setState(st);
        setPriority(pr);
        setMainCause(ma);
        setLoading(false);
      }
    };
    void getAll();
  }, [userToken]);

  const data: DataItem[] = [
    { key: '이슈 현황', data: state ?? {} },
    { key: '우선 순위', data: priority ?? {} },
    { key: '주요 원인', data: mainCause ?? {} }
  ];

  return (
    <Container>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        data.map(item => (
          <ChartContainer key={item.key}>
            <ChartTitle>{item.key}</ChartTitle>
            {item.data && <BubbleChart data={item.data} />}
            <ItemList>
              {Object.entries(item.data).map(([name, value]) => (
                <ItemText key={name}>{`${name}: ${value}`}</ItemText>
              ))}
            </ItemList>
          </ChartContainer>
        ))
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 20px;;
  background-color: #11111A;
`;

const ChartContainer = styled.div`
  margin-bottom: 40px;
`;

const ChartTitle = styled.h2`
  color: ${({ theme: { color } }) => color.white};
  text-align: center;
  margin-bottom: 20px;
`;

const ItemList = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const ItemText = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-size: 18px;
`;

const Loading = styled.div`
  color: ${({ theme: { color } }) => color.indigo};
  text-align: center;
  font-size: 24px;
`;

export default StatisticPage;
