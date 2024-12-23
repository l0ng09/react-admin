import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { ConfigProvider } from 'antd';

import LoadingSpinner from '@/components/common/LoadingSpinner';

const App: React.FC = () => {
	return (
		<ConfigProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </ConfigProvider>
	);
};

export default App;
