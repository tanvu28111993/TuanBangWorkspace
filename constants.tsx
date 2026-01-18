import React from 'react';

// --- Helpers ---
const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-12 h-12 flex items-center justify-center">{children}</div>
);

const Symbol = ({ name, size = "text-4xl" }: { name: string; size?: string }) => (
  <span className={`material-symbols-outlined ${size}`}>{name}</span>
);

// --- App Configuration / Links ---
export const APP_LINKS = {
  MATERIALS: '#',
  PAPER_AUDIT: 'https://tuan-bang-workspace.vercel.app/',
  PAPER_WAREHOUSE_WEB: '#',
  PAPER_WAREHOUSE_APP: '#',
  // R&D Links
  RND_DESIGN: '#',
  RND_SAMPLE: '#',
  RND_MOLD: '#',
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
      <IconWrapper>
        <Symbol name="manage_accounts" size="text-5xl" />
      </IconWrapper>
    ),
    apps: [
        { id: 'materials', title: 'Quản lý vật tư', icon: <Symbol name="inventory_2" />, href: APP_LINKS.MATERIALS },
        { id: 'mobile-audit', title: 'Kiểm kê giấy', icon: <Symbol name="fact_check" />, href: APP_LINKS.PAPER_AUDIT },
    ]
  },
  {
    id: 'warehouse',
    title: 'Nghiệp Vụ Kho',
    description: 'VẬN HÀNH & KIỂM SOÁT',
    icon: (
      <IconWrapper>
        <Symbol name="forklift" size="text-5xl" />
      </IconWrapper>
    ),
    apps: [
        { id: 'web-warehouse', title: 'Kho giấy Web', icon: <Symbol name="desktop_windows" />, href: APP_LINKS.PAPER_WAREHOUSE_WEB },
        { id: 'mobile-warehouse', title: 'Kho giấy App', icon: <Symbol name="install_mobile" />, href: APP_LINKS.PAPER_WAREHOUSE_APP },
    ]
  },
  {
    id: 'rnd',
    title: 'R&D',
    description: 'NGHIÊN CỨU & PHÁT TRIỂN',
    icon: (
      <IconWrapper>
        <Symbol name="science" size="text-5xl" />
      </IconWrapper>
    ),
    apps: [
        { id: 'rnd-design', title: 'Thiết Kế', icon: <Symbol name="draw" />, href: APP_LINKS.RND_DESIGN },
        { id: 'rnd-sample', title: 'Mẫu', icon: <Symbol name="content_cut" />, href: APP_LINKS.RND_SAMPLE },
        { id: 'rnd-mold', title: 'Khuôn', icon: <Symbol name="grid_on" />, href: APP_LINKS.RND_MOLD },
    ]
  },
];