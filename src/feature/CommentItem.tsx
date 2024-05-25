import React from 'react';
import ElementContainer from '../shared/components/ElementContainer';
import { TitleText } from './pl/components/AssigneeItem';

const CommentItem:React.FC = () => {

  return (
    <ElementContainer>
      <TitleText>
        Comments
      </TitleText>
    </ElementContainer>

  );
}

export default CommentItem;