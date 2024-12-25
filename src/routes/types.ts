import { ReactNode } from 'react';

export interface RouteConfig {
  index?: boolean;
  path?: string;
  element?: ReactNode;
  auth?: {
    required: boolean;
  };
  children?: RouteConfig[];
}