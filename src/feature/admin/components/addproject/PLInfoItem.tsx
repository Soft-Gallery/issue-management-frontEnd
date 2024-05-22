import { plListDummy } from '../../../../dummy/plListDummy';
import React, { useState } from 'react';
import { PLUser } from '../../../../shared/types/user';
import styled from 'styled-components';
import ElementContainer from '../../../../shared/components/ElementContainer';

const PLInfoItem = () => {
  const [selectedPLs, setSelectedPLs] = useState<PLUser[]>([]);

  const handlePLChange = (index: number) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value);
    const updatedPLs = [...selectedPLs];
    const pl = plListDummy.find(pl => pl.id === selectedId);
    if (pl) {
      updatedPLs[index] = pl;
      setSelectedPLs(updatedPLs);
    }
  };

  const addPL = () => {
    setSelectedPLs(prevState => [...prevState, plListDummy[0]]);
  };

  const removePL = (index: number) => {
    setSelectedPLs(prevState => {
      const updatedPLs = [...prevState];
      updatedPLs.splice(index, 1);
      return updatedPLs;
    });
  };

  return (
    <ElementContainer>
      <ElementTitleText>PL 정보</ElementTitleText>
      {selectedPLs.map((selectedPL, index) => (
        <div key={index}>
          <ElementSubTitleText>PL 선택</ElementSubTitleText>
          <PLSelect value={selectedPL.id} onChange={handlePLChange(index)}>
            <option value="">PL을 선택하세요</option>
            {plListDummy.map(pl => (
              <option key={pl.id} value={pl.id}>
                {pl.name}
              </option>
            ))}
          </PLSelect>
          <RemoveButton onClick={() => removePL(index)}>Remove</RemoveButton>
        </div>
      ))}
      <AddButton onClick={addPL}>Add PL</AddButton>
    </ElementContainer>
  );
};

const ElementTitleText = styled.div`
  display: flex;
  text-align: left;
  margin-bottom: 12px;
  font-size: 18px;
  color: ${({ theme }) => theme.color.black};
`;

const ElementSubTitleText = styled.div`
  display: flex;
  text-align: left;
  margin-top: 12px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.gray1};
`;

const PLSelect = styled.select`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid ${({ theme }) => theme.color.gray1};
  border-radius: 4px;
  font-size: 14px;
`;

const RemoveButton = styled.button`
  margin-top: 4px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.red};
  color: white;
  cursor: pointer;
`;

const AddButton = styled.button`
  margin-top: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.green};
  color: white;
  cursor: pointer;
`;

export default PLInfoItem;
