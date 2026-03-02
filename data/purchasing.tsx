import React from 'react';
import { WorkspaceItem } from '../types';
import { IconWrapper, Symbol } from '../components/Icons';
import { APP_LINKS } from '../links';

export const purchasingData: WorkspaceItem = {
  id: 'purchasing',
  title: 'MUA HÀNG',
  description: 'TIẾP NHẬN & XỬ LÝ',
  icon: (
    <IconWrapper>
      <Symbol name="shopping_cart" size="text-5xl" />
    </IconWrapper>
  ),
  apps: [
    { id: 'materials', title: 'Tổng Kho Vật Tư', icon: <Symbol name="warehouse" />, href: APP_LINKS.PURCHASING_GENERAL_WAREHOUSE },
  ]
};
