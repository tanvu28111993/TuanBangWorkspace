import React from 'react';
import { WorkspaceItem } from '../types';
import { IconWrapper, Symbol } from '../components/Icons';
import { APP_LINKS } from '../links';

export const warehouseData: WorkspaceItem = {
  id: 'warehouse',
  title: 'NGHIỆP VỤ KHO',
  description: 'VẬN HÀNH & KIỂM SOÁT',
  icon: (
    <IconWrapper>
      <Symbol name="forklift" size="text-5xl" />
    </IconWrapper>
  ),
  apps: [
    // Paper Group
    { id: 'web-warehouse', title: 'Giấy Web', icon: <Symbol name="article" />, href: APP_LINKS.WAREHOUSE_PAPER_WEB },
    { id: 'mobile-warehouse', title: 'Giấy MOBILE', icon: <Symbol name="smartphone" />, href: APP_LINKS.WAREHOUSE_PAPER_APP },
    
    // Material Group
    { id: 'material-web', title: 'Vật Tư Web', icon: <Symbol name="construction" />, href: APP_LINKS.WAREHOUSE_MATERIAL_WEB },
    { id: 'material-mobile', title: 'Vật Tư MOBILE', icon: <Symbol name="developer_mode" />, href: APP_LINKS.WAREHOUSE_MATERIAL_APP },
    
    // Product Group
    { id: 'product-web', title: 'Thành Phẩm Web', icon: <Symbol name="inventory_2" />, href: APP_LINKS.WAREHOUSE_PRODUCT_WEB },
    { id: 'product-mobile', title: 'Thành Phẩm MOBILE', icon: <Symbol name="ad_units" />, href: APP_LINKS.WAREHOUSE_PRODUCT_APP },

    // Tools Group
    { id: 'mold-web', title: 'Khuôn Web', icon: <Symbol name="extension" />, href: APP_LINKS.WAREHOUSE_MOLD_WEB },
    { id: 'sample-web', title: 'Mẫu Web', icon: <Symbol name="style" />, href: APP_LINKS.WAREHOUSE_SAMPLE_WEB },
  ]
};