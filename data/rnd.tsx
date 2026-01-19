import React from 'react';
import { WorkspaceItem } from '../types';
import { IconWrapper, Symbol } from '../components/Icons';
import { APP_LINKS } from '../links';

export const rndData: WorkspaceItem = {
  id: 'rnd',
  title: 'R&D',
  description: 'NGHIÊN CỨU & PHÁT TRIỂN',
  icon: (
    <IconWrapper>
      <Symbol name="view_in_ar" size="text-5xl" />
    </IconWrapper>
  ),
  apps: [
    { id: 'rnd-design', title: 'Thiết Kế', icon: <Symbol name="draw" />, href: APP_LINKS.RND_DESIGN },
    { id: 'rnd-sample', title: 'Mẫu', icon: <Symbol name="content_cut" />, href: APP_LINKS.RND_SAMPLE },
    { id: 'rnd-mold', title: 'Khuôn', icon: <Symbol name="grid_on" />, href: APP_LINKS.RND_MOLD },
  ]
};