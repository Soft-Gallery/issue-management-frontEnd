import styled from 'styled-components';

export const ElementTitleText = styled.div`
  display: flex;
  text-align: left;
  margin-bottom: 12px;
  font-size: 18px;
  color: ${({ theme }) => theme.color.black};
`;

export const UserSelect = styled.select`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid ${({ theme }) => theme.color.gray1};
  border-radius: 4px;
  font-size: 14px;
`;

export const UserText = styled.div`
  display: flex;
  text-align: left;
  font-size: 14px;
  color: ${({ theme }) => theme.color.gray1};
  align-self: center;
  justify-self: center;
  margin-right: 8px;
`;

export const RemoveButton = styled.button`
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

export const AddButton = styled.button`
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

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-left: 4px;
`;
