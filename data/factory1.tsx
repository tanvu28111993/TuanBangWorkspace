import React from 'react';
import { WorkspaceItem } from '../types';
import { IconWrapper, Symbol } from '../components/Icons';
import { APP_LINKS } from '../links';

export const factory1Data: WorkspaceItem = {
  id: 'factory1',
  title: 'NHÀ MÁY 1',
  description: 'VẬN HÀNH SẢN XUẤT',
  icon: (
    <IconWrapper>
      <Symbol name="factory" size="text-5xl" />
    </IconWrapper>
  ),
  apps: [
    { id: 'f1-planning', title: 'KH Nhà Máy', icon: <Symbol name="calendar_month" />, href: APP_LINKS.FACTORY1_PLANNING },
    { id: 'f1-workshop', title: 'KH Phân Xưởng', icon: <Symbol name="precision_manufacturing" />, href: APP_LINKS.FACTORY1_WORKSHOP },
    { id: 'f1-monitor', title: 'Giám sát Máy', icon: <Symbol name="monitor_heart" />, href: APP_LINKS.FACTORY1_MONITOR },
  ]
};