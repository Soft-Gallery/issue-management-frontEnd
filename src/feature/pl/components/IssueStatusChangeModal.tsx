import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IssueStatus } from '../../../shared/types/issue';
import { UserRole } from '../../../shared/types/user';
import { ADMIN_ISSUE_STATUS_STATE, PL_ISSUE_STATUS_STATE, TESTER_ISSUE_STATUS_STATE, DEV_ISSUE_STATUS_STATE } from '../../issue/issueStatusConstants';

interface ModalProps {
  onConfirm: (selectedOption: IssueStatus) => void;
  onClose: () => void;
  defaultStatus: IssueStatus;
  role: string
}

const IssueStatusChangeModal: React.FC<ModalProps> = ({ onConfirm, onClose, defaultStatus, role }) => {
  const [selectedOption, setSelectedOption] = useState<IssueStatus>(defaultStatus);
  const [statusOptionByRole, setStatusOptionByRole] = useState<string[]>([]);

  const handleOptionClick = (option: string) => {
    let tempSelectedOption: IssueStatus = 'NEW';

    switch (option) {
      case 'NEW':
        tempSelectedOption = 'NEW';
        break;
      case 'ASSIGNED':
        tempSelectedOption = 'ASSIGNED';
        break;
      case 'FIXED':
        tempSelectedOption = 'FIXED';
        break;
      case 'RESOLVED':
        tempSelectedOption = 'RESOLVED';
        break;
      case 'CLOSED':
        tempSelectedOption = 'CLOSED';
        break;
      default:
        tempSelectedOption = 'NEW';
    }

    setSelectedOption(tempSelectedOption);
  };

  const handleConfirm = () => {
    onConfirm(selectedOption);
    onClose();
  };

  useEffect(() => {
    let optionsForRole: string[] = [];

    switch (role) {
      case 'ROLE_ADMIN':
        optionsForRole = Object.values(ADMIN_ISSUE_STATUS_STATE);
        break;
      case 'ROLE_PL':
        optionsForRole = Object.values(PL_ISSUE_STATUS_STATE);
        break;
      case 'ROLE_TESTER':
        optionsForRole = Object.values(TESTER_ISSUE_STATUS_STATE);
        break;
      case 'ROLE_DEVELOPER':
        optionsForRole = Object.values(DEV_ISSUE_STATUS_STATE);
        break;
      default:
        optionsForRole = [];
    }

    setStatusOptionByRole(optionsForRole);
  }, [role]);

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>닫기</CloseButton>
        <OptionsContainer>
          {statusOptionByRole.map((option) => (
            <Option key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </Option>
          ))}
        </OptionsContainer>
        <ConfirmButton onClick={handleConfirm}>변경하기</ConfirmButton>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 60px 20px 20px 20px;
    border-radius: 8px;
    position: relative;
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
`;

const Option = styled.div`
    padding: 12px 0;
    cursor: pointer;
    border: 1px solid ${({ theme: { color } }) => color.gray1};
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;

    &:hover {
        background-color: #f5f5f5;
    }
`;

const ConfirmButton = styled.button`
    margin-top: 16px;
    padding: 12px 16px;
    background-color: ${({ theme: { color } }) => color.blue};
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    background-color: transparent;
    border: none;
    font-size: 16px;
    cursor: pointer;
`;

export default IssueStatusChangeModal;
