import React from 'react';
import { Spin } from 'antd';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Spin size="large" />
    </div>
  );
};

export default LoadingSpinner;