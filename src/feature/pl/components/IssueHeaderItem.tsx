import React, {useState, useEffect} from 'react';
import ElementContainer from '../../../shared/components/ElementContainer';
import styled from 'styled-components';

const IssueHeaderItem: React.FC = () => {
  const [status,setStatus] = useState('New');
  const priority = 'Critical';

  useEffect(()=>{
    // 서버로부터 info 받아옵시다.. 근데 이거 상태관리로 해서 한 번에 받아오고 값을 구독해서 필요한 정보만 recolieValue로 가져와야 할 듯
  })

  return (
    <ElementContainer>
      <Container>
        {/*이 버튼 누르면 satus 변경할 수 있는 dialog 띄우기*/}
        <StatusButton>
          {status}
        </StatusButton>
        <IssuePriority>
          [{priority}]
        </IssuePriority>
        <IssueTitle>
          이슈 제목을 여기에 보여줍니다!
        </IssueTitle>
      </Container>
    </ElementContainer>
  );
}

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: start;
`;

const StatusButton = styled.button`
    width: 120px;
    height: 50px;
    border: 2px solid ${({ theme: { color } }) => color.black200};
    border-radius: 10px;
    justify-content: center;
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-weight: bold;
    font-size: 22px;
    margin-right: 16px;
    cursor: pointer;
`;


const IssuePriority = styled.div`
    justify-content: center;
    width: 80px;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-weight: bold;
    font-size: 21px;
    margin-right: 2px;
`;

const IssueTitle = styled.h3`
    flex-grow: 1;
    text-align: left;
    font-size: 20px;
`;

export default IssueHeaderItem;
