import React from 'react';
import InfoItemDropdown from './InfoItemDropdown';
import { DevUser } from '../../../../shared/types/user';
import { devListDummy } from '../../../../dummy/devListDummy';

const PLInfoItem: React.FC = () => {
  return (
    <InfoItemDropdown
      title="Dev 정보"
      itemList={devListDummy as DevUser[]}
      itemType="dev"
    />
  );
};

export default PLInfoItem;
