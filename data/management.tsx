import React from 'react';
import { WorkspaceItem } from '../types';
import { IconWrapper, Symbol } from '../components/Icons';
import { APP_LINKS } from '../links';

export const managementData: WorkspaceItem = {
  id: 'management',
  title: 'QUẢN LÝ',
  description: 'ĐIỀU HÀNH & GIÁM SÁT',
  icon: (
    <IconWrapper>
      <Symbol name="manage_accounts" size="text-5xl" />
    </IconWrapper>
  ),
  apps: [
    { id: 'materials', title: 'Quản Lý Vật Tư', icon: <Symbol name="inventory_2" />, href: APP_LINKS.MANAGEMENT_MATERIALS },
    { id: 'management-rnd', title: 'Quản lý R&D', icon: <Symbol name="view_in_ar" />, href: APP_LINKS.MANAGEMENT_RND },
  ]
};