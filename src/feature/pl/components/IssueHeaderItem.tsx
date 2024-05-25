import React from 'react';
import ElementContainer from '../../../shared/components/ElementContainer';
import styled from 'styled-components';

const IssueHeaderItem: React.FC = () => {
  return (
    <ElementContainer>
      <Container>
        <StatusButton>
          상태버튼
        </StatusButton>
        <IssueTitle>
          이슈 제목을 여기에 보여줍니다!
        </IssueTitle>
        <IssuePriority>
          우선순위
        </IssuePriority>
      </Container>
    </ElementContainer>
  );
}

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center; /* Vertically align items */
    justify-content: space-between;
`;

const StatusButton = styled.button`
    padding: 10px;
    height: 50px;
    font-size: 22px;
    font-weight: bold;
    margin-right: 16px;
`;

const IssueTitle = styled.h3`
    flex-grow: 1;
    text-align: left;
    font-size: 22px;
`;

const IssuePriority = styled.div`
    border: ${({ theme: { color } }) => color.black200};
    border-radius: 4px;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-weight: bold;
    font-size: 22px;
`;

export default IssueHeaderItem;
