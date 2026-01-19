import React from 'react';
import { WorkspaceItem } from '../types';
import { IconWrapper, Symbol } from '../components/Icons';
import { APP_LINKS } from '../links';

export const planningData: WorkspaceItem = {
  id: 'planning',
  title: 'KẾ HOẠCH',
  description: 'SẢN XUẤT & ĐIỀU PHỐI',
  icon: (
    <IconWrapper>
      <Symbol name="calendar_month" size="text-5xl" />
    </IconWrapper>
  ),
  apps: [
    { id: 'production-schedule', title: 'KH Sản Xuất', icon: <Symbol name="date_range" />, href: APP_LINKS.PLANNING_SCHEDULE },
    { id: 'production-order', title: 'Lệnh Sản Xuất', icon: <Symbol name="assignment" />, href: APP_LINKS.PLANNING_ORDER },
  ]
};