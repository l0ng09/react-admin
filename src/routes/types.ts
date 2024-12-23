import { ReactNode } from 'react';

export interface RouteConfig {
  path: string;
  element: ReactNode;
  children?: RouteConfig[];
  index?: boolean;
}

export interface BreadcrumbItem {
  path: string;
  label: string;
}