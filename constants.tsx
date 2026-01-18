import React from 'react';

const Icon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-12 h-12 flex items-center justify-center">{children}</div>
);

// --- Sub-App Icons (Material Symbols) ---
const MaterialsIcon = () => <span className="material-symbols-outlined text-4xl">inventory_2</span>;
const WebWarehouseIcon = () => <span className="material-symbols-outlined text-4xl">desktop_windows</span>;
const MobileWarehouseIcon = () => <span className="material-symbols-outlined text-4xl">install_mobile</span>;
const MobileAuditIcon = () => <span className="material-symbols-outlined text-4xl">fact_check</span>;

// --- App Configuration / Links ---
// Centralized location for all application links to make editing easier
export const APP_LINKS = {
  MATERIALS: '#',
  PAPER_AUDIT: 'https://script.google.com/macros/s/AKfycbwkppC48oyefMpwM-Xk29MG7-OWIkuJNi6bxfVZ-6cja1m7FQPLwV5TslfA3DZfjjRI/exec',
  PAPER_WAREHOUSE_WEB: '#',
  PAPER_WAREHOUSE_APP: '#',
};

export interface App {
  id: string;
  title: string;
  icon: React.ReactNode;
  href: string;
}

export interface WorkspaceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  apps: App[];
}

export const WORKSPACE_ITEMS: WorkspaceItem[] = [
  {
    id: 'management',
    title: 'Quản Lý',
    description: 'ĐIỀU HÀNH & GIÁM SÁT',
    icon: (
      <Icon>
        <span className="material-symbols-outlined text-5xl">manage_accounts</span>
      </Icon>
    ),
    apps: [
        { id: 'materials', title: 'Quản lý vật tư', icon: <MaterialsIcon />, href: APP_LINKS.MATERIALS },
        { id: 'mobile-audit', title: 'Kiểm kê giấy', icon: <MobileAuditIcon />, href: APP_LINKS.PAPER_AUDIT },
    ]
  },
  {
    id: 'warehouse',
    title: 'Nghiệp Vụ Kho',
    description: 'VẬN HÀNH & KIỂM SOÁT',
    icon: (
      <Icon>
        <span className="material-symbols-outlined text-5xl">forklift</span>
      </Icon>
    ),
    apps: [
        { id: 'web-warehouse', title: 'Kho giấy Web', icon: <WebWarehouseIcon />, href: APP_LINKS.PAPER_WAREHOUSE_WEB },
        { id: 'mobile-warehouse', title: 'Kho giấy App', icon: <MobileWarehouseIcon />, href: APP_LINKS.PAPER_WAREHOUSE_APP },
    ]
  },
];