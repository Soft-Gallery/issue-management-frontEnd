import React from 'react';
import ElementContainer from '../shared/components/ElementContainer';
import { TitleText } from './pl/components/AssigneeSelectItem';

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