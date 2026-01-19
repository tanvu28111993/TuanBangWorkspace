import React from 'react';

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