import React from 'react';
import { plListDummy } from '../../../../dummy/plListDummy';
import InfoItemDropdown from './InfoItemDropdown';
import { PLUser } from '../../../../shared/types/user';

const PLInfoItem: React.FC = () => {
  return (
    <InfoItemDropdown
      title="PL 정보"
      itemList={plListDummy as PLUser[]}
      itemType="pl"
    />
  );
};

export default PLInfoItem;
