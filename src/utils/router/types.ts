import React from 'react';

export interface RouteConfig {
  path: string;
  component: React.LazyExoticComponent<React.FC<{}>>;
  visibleInMenu: boolean;
  menuTitle: string;
  menuIcon: React.FC;
  roles: string[];
  parent?: boolean;
}
