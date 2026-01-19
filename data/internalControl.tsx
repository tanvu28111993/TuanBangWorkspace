import React from 'react';
import { WorkspaceItem } from '../types';
import { IconWrapper, Symbol } from '../components/Icons';
import { APP_LINKS } from '../links';

export const internalControlData: WorkspaceItem = {
  id: 'internal-control',
  title: 'KIỂM SOÁT NỘI BỘ',
  description: 'QUY CHUẨN & TUÂN THỦ',
  icon: (
    <IconWrapper>
      <Symbol name="policy" size="text-5xl" />
    </IconWrapper>
  ),
  apps: [
    { id: 'mobile-audit', title: 'Kiểm Kê Giấy', icon: <Symbol name="fact_check" />, href: APP_LINKS.IC_PAPER_AUDIT },
    { id: 'material-audit', title: 'Kiểm Vật Tư', icon: <Symbol name="inventory" />, href: APP_LINKS.IC_MATERIAL_AUDIT },
    { id: 'product-audit', title: 'Kiểm Thành Phẩm', icon: <Symbol name="pallet" />, href: APP_LINKS.IC_PRODUCT_AUDIT },
  ]
};