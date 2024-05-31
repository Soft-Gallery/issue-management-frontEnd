import React, { useState } from 'react';
import styled from 'styled-components';
import ElementContainer from '../../../shared/components/ElementContainer';
import { devListDummy } from '../../../dummy/devListDummy';
import { Issue, IssuePriority, IssueStatus } from '../../../shared/types/issue';
import { DevUser } from '../../../shared/types/user';
import { Comments } from '../../../shared/types/comment';

const TesterIssueCreate = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<IssueStatus>('NEW');
  const [priority, setPriority] = useState<IssuePriority>('MAJOR');
  const [reporter, setReporter] = useState('');
  const [devs, setDevs] = useState<DevUser[]>([]);
  const [comments, setComments] = useState<Comments[]>([]);

  const handleSubmit = () => {
    // const newIssue: Issue = {
    //   title,
    //   description,
    //   status,
    //   priority,
    //   reporter,
    //   devs,
    //   comments,
    // };
    // console.log(newIssue);
  };

  const handleAssigneeChange = (index: number) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value, 10);
    const selectedAssignee = devListDummy.find(dev => dev.id === selectedId);
    if (selectedAssignee) {
      const updatedAssignees = [...devs];
      updatedAssignees[index] = selectedAssignee;
      setDevs(updatedAssignees);
    }
  };

  const addAssignee = () => {
    setDevs(prevState => [...prevState, devListDummy[0]]);
  };

  const removeAssignee = (index: number) => {
    setDevs(prevState => {
      const updatedAssignees = [...prevState];
      updatedAssignees.splice(index, 1);
      return updatedAssignees;
    });
  };

  return (
    <Container>
      <ElementContainer>
        <Label>Title</Label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </ElementContainer>
      <ElementContainer>
        <Label>Description</Label>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </ElementContainer>
      <ElementContainer>
        <Label>Status</Label>
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value as IssueStatus)}
        >
          <option value="NEW">NEW</option>
          <option value="ASSIGNED">ASSIGNED</option>
          <option value="FIXED">FIXED</option>
          <option value="RESOLVED">RESOLVED</option>
          <option value="CLOSED">CLOSED</option>
        </Select>
      </ElementContainer>
      <ElementContainer>
        <Label>Priority</Label>
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value as IssuePriority)}
        >
          <option value="BLOCKER">BLOCKER</option>
          <option value="CRITICAL">CRITICAL</option>
          <option value="MAJOR">MAJOR</option>
          <option value="MINOR">MINOR</option>
          <option value="TRIVIAL">TRIVIAL</option>
        </Select>
      </ElementContainer>
      <ElementContainer>
        <Label>Reporter</Label>
        <Input
          type="text"
          value={reporter}
          onChange={(e) => setReporter(e.target.value)}
        />
      </ElementContainer>
      <ElementContainer>
        <ElementTitleText>Assignees</ElementTitleText>
        {devs.map((dev, index) => (
          <DropDownContainer key={index}>
            <UserText>Assignee</UserText>
            <UserSelect value={dev.id} onChange={handleAssigneeChange(index)}>
              <option value="">Select Assignee</option>
              {devListDummy.map(dev => (
                <option key={dev.id} value={dev.id}>
                  {dev.name}
                </option>
              ))}
            </UserSelect>
            <RemoveButton onClick={() => removeAssignee(index)}>Remove</RemoveButton>
          </DropDownContainer>
        ))}
        <AddButton onClick={addAssignee}>Add Assignee</AddButton>
      </ElementContainer>
      <Button onClick={handleSubmit}>Create Issue</Button>
    </Container>
  );
};

export default TesterIssueCreate;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  border-radius: 30px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ElementTitleText = styled.div`
  display: flex;
  text-align: left;
  margin-bottom: 12px;
  font-size: 18px;
  color: ${({ theme }) => theme.color.black};
`;

const UserSelect = styled.select`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid ${({ theme }) => theme.color.gray1};
  border-radius: 4px;
  font-size: 14px;
`;

const UserText = styled.div`
  display: flex;
  text-align: left;
  font-size: 14px;
  color: ${({ theme }) => theme.color.gray1};
  align-self: center;
  justify-self: center;
  margin-right: 8px;
`;

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
