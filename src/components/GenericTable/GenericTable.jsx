import React from 'react';
import { Space, Table, Tag } from 'antd';

const GenericTable = ({columns,data}) => <Table       scroll={{ x: 450, y: 200 }}
columns={columns} dataSource={data} />;
export default GenericTable;