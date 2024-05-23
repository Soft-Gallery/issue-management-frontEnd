import React from 'react';
import InfoItemDropdown from './InfoItemDropdown';
import { TesterUser } from '../../../../shared/types/user';
import { testerListDummy } from '../../../../dummy/testerListDummy';

const TesterInfoItem: React.FC = () => {
  return (
    <InfoItemDropdown
      title="Tester 정보"
      itemList={testerListDummy as TesterUser[]}
      itemType="tester"
    />
  );
};

export default TesterInfoItem;
