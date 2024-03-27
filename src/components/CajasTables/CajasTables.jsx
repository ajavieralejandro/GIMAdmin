import React from 'react';
import { Space, Table, Tag } from 'antd';

const App = ({columns,data}) => <Table       scroll={{ x: 650, y: 600 }}
columns={columns} dataSource={data} />;
export default App;