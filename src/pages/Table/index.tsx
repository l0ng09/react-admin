import React from 'react'
import { ProTable } from '@ant-design/pro-components'
import type { ProColumns } from '@ant-design/pro-components'
import { Button } from 'antd'

const columns: ProColumns[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '操作',
    valueType: 'option',
    render: () => [
      <Button key="edit" type="link">
        编辑
      </Button>,
      <Button key="delete" type="link">
        删除
      </Button>,
    ],
  },
]

const Table: React.FC = () => {
  // 使用ahooks的useRequest来模拟获取数据的请求，实际中可替换为真实的API调用
  const data = [
    { id: 1, name: '张三', age: 25, email: 'zhangsan@example.com' },
    { id: 2, name: '李四', age: 30, email: 'lisi@example.com' },
    { id: 3, name: '王五', age: 28, email: 'wangwu@example.com' },
  ]

  return (
    <ProTable
      rowKey="id"
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: 10,
      }}
      params={{ a: 1, b: 2 }}
      request={(params: { current?: number; pageSize?: number }, options?: { [key: string]: any }) => {
        console.log('params: ', params)
        console.log('options: ', options)
        return Promise.resolve({
          data: data,
          success: true,
          total: 30,
        })
      }}
      search={{
        labelWidth: 80,
        collapsed: false,
        searchText: '搜索',
        resetText: '重置',
      }}
    />
  )
}

export default Table
