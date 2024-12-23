import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const Home: React.FC = () => {
  return (
    <div>
      <Title level={2}>Welcome to Home Page</Title>
      <p>This is the home page of your application.</p>
    </div>
  );
};

export default Home;