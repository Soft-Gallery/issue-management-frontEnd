import { plListDummy } from '../../../../dummy/plListDummy';
import React, { useState } from 'react';
import { PLUser } from '../../../../shared/types/user';
import styled from 'styled-components';
import ElementContainer from '../../../../shared/components/ElementContainer';
import { useRecoilState } from 'recoil';
import { adminPageAddProjectState } from '../../../../recoil/admin/atom';

const PLInfoItem = () => {
  const [projectState, setProjectState] = useRecoilState(adminPageAddProjectState);
  const [selectedPLs, setSelectedPLs] = useState<PLUser[]>([]);

  const handlePLChange = (index: number) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value);
    const updatedPLs = [...selectedPLs];
    const pl = plListDummy.find(pl => pl.id === selectedId);
    if (pl) {
      updatedPLs[index] = pl;
      setSelectedPLs(updatedPLs);
      setProjectState((prev) => ({
        ...prev,
        pl: updatedPLs,
      }));
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
        <DropDownContainer key={index}>
          <PLText>PL</PLText>
          <PLSelect value={selectedPL.id} onChange={handlePLChange(index)}>
            <option value="">PL을 선택하세요</option>
            {plListDummy.map(pl => (
              <option key={pl.id} value={pl.id}>
                {pl.name}
              </option>
            ))}
          </PLSelect>
          <RemoveButton onClick={() => removePL(index)}>Remove</RemoveButton>
        </DropDownContainer>
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

const PLSelect = styled.select`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid ${({ theme }) => theme.color.gray1};
  border-radius: 4px;
  font-size: 14px;
`;

const PLText = styled.text`
  display: flex;
  text-align: left;
  font-size: 14px;
  color: ${({ theme }) => theme.color.gray1};
  align-self: center;
  justify-self: center;
  margin-right: 8px;
`

const RemoveButton = styled.button`
  margin-top: 4px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.red};
  color: white;
  cursor: pointer;
  align-self: center;
  margin-left: 8px;
`;

const AddButton = styled.button`
  display: inline-flex;
  align-items: center;
  outline: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 20px;
  text-align: center;

  margin-top: 12px;
  height: 40px;
  font-size: 16px;
  width: auto;

  border: 1.5px solid ${({ theme: { color } }) => color.black200};

  color: ${({ theme: { color } }) => color.gray1};
  background: ${({ theme: { color } }) => color.white};

  &:hover {
    color: ${({ theme: { color } }) => color.white};
    background: ${({ theme: { color } }) => color.indigo};
  }

  &:active {
    color: ${({ theme: { color } }) => color.white};
    background: ${({ theme: { color } }) => color.indigo};
  }
`;

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-left: 4px;
`;


export default PLInfoItem;
