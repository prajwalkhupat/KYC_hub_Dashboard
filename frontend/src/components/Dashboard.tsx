/*
import { useEffect, useState } from "react";
import { Table, Card, Statistic, Progress, Select, Input, Row, Col, Space, Typography } from "antd";
import { fetchCustomers, postAlert, updateStatus } from "../api";
import { Customer } from "../types";
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const { Title } = Typography;

const Dashboard = () => {
  const [data, setData] = useState<Customer[]>([]);
  const [search, setSearch] = useState('');

  const getRiskScore = (customer: Customer) => {
    const missed = customer.loanRepaymentHistory.filter(p => p === 0).length;
    const ratio = customer.outstandingLoans / customer.monthlyIncome;
    let score = 100 - missed * 10 - ratio * 10;
    if (customer.creditScore < 700) score -= 10;
    const final = Math.max(0, Math.min(100, score));
    if (final > 70) postAlert({ customerId: customer.customerId, risk: final });
    return final;
  };

  useEffect(() => {
    fetchCustomers().then(res => setData(res.data));
  }, []);

  const updateCustomerStatus = (id: string, status: Customer["status"]) => {
    updateStatus(id, status).then(() => {
      const updated = data.map(c =>
        c.customerId === id ? { ...c, status: status as Customer["status"] } : c
      );
      setData(updated);
    });
  };
  
  const filtered = data.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.status.toLowerCase().includes(search.toLowerCase())
  );

  const pieData = [
    { name: 'Low', value: filtered.filter(c => getRiskScore(c) < 40).length },
    { name: 'Medium', value: filtered.filter(c => getRiskScore(c) >= 40 && getRiskScore(c) <= 70).length },
    { name: 'High', value: filtered.filter(c => getRiskScore(c) > 70).length }
  ];

  const COLORS = ["#52c41a", "#faad14", "#ff4d4f"];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Title level={3}>📊 Overview</Title>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic title="Total Customers" value={filtered.length} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="Total Outstanding Loans"
              value={filtered.reduce((a, c) => a + c.outstandingLoans, 0)}
              prefix="₹"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Input.Search
            placeholder="Search by name or status"
            onChange={e => setSearch(e.target.value)}
            allowClear
          />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card title="Income vs Expenses">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={filtered}>
                <Line type="monotone" dataKey="monthlyIncome" stroke="#52c41a" />
                <Line type="monotone" dataKey="monthlyExpenses" stroke="#ff4d4f" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Risk Score Distribution">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} dataKey="value" outerRadius={100} label>
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      <Card title="Customer Table">
        <Table dataSource={filtered} rowKey="customerId" pagination={{ pageSize: 5 }} columns={[
          {
            title: "Name",
            dataIndex: "name",
            sorter: (a, b) => a.name.localeCompare(b.name),
            filteredValue: [search],
            onFilter: (value, record) =>
              record.name.toLowerCase().includes((value as string).toLowerCase()),
          },
          { title: "Credit Score", dataIndex: "creditScore" },
          {
            title: "Risk Score",
            render: (_, c) => {
              const score = getRiskScore(c);
              const color = score > 70 ? "red" : score > 40 ? "orange" : "green";
              return <Progress percent={score} strokeColor={color} />;
            }
          },
          {
            title: "Status",
            render: (_, c) => (
              <Select
                value={c.status}
                onChange={val => updateCustomerStatus(c.customerId, val)}
              >
                <Select.Option value="Review">Review</Select.Option>
                <Select.Option value="Approved">Approved</Select.Option>
                <Select.Option value="Rejected">Rejected</Select.Option>
              </Select>
            )
          }
        ]} />
      </Card>
    </Space>
  );
};

export default Dashboard;
*/

import { useEffect, useState } from "react";
import {
  Table,
  Card,
  Statistic,
  Progress,
  Select,
  Input,
  Row,
  Col,
  Space,
  Typography,
  message
} from "antd";
import { fetchCustomers, postAlert, updateStatus } from "../api";
import { Customer } from "../types";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";

const { Title } = Typography;

const Dashboard = () => {
  const [data, setData] = useState<Customer[]>([]);
  const [search, setSearch] = useState("");

  const getRiskScore = (customer: Customer) => {
    const missed = customer.loanRepaymentHistory.filter((p) => p === 0).length;
    const ratio = customer.outstandingLoans / customer.monthlyIncome;
    let score = 100 - missed * 10 - ratio * 10;
    if (customer.creditScore < 700) score -= 10;
    const final = Math.max(0, Math.min(100, score));
    if (final > 70) postAlert({ customerId: customer.customerId, risk: final });
    return final;
  };

  useEffect(() => {
    fetchCustomers().then((res) => setData(res.data));
  }, []);

  const updateCustomerStatus = (id: string, status: Customer["status"]) => {
    updateStatus(id, status).then(() => {
      const updated = data.map((c) =>
        c.customerId === id ? { ...c, status: status as Customer["status"] } : c
      );
      setData(updated);
      message.success(`Status updated to ${status}`);
    });
  };

  const filtered = data.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.status.toLowerCase().includes(search.toLowerCase())
  );

  const pieData = [
    {
      name: "Low",
      value: filtered.filter((c) => getRiskScore(c) < 40).length
    },
    {
      name: "Medium",
      value: filtered.filter((c) => {
        const score = getRiskScore(c);
        return score >= 40 && score <= 70;
      }).length
    },
    {
      name: "High",
      value: filtered.filter((c) => getRiskScore(c) > 70).length
    }
  ];

  const COLORS = ["#52c41a", "#faad14", "#ff4d4f"];

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
     <Row>
      <Col span={24}>
        <Title level={3} style={{ wordBreak: 'break-word', marginBottom: 0 }}>
          📊 Overview
        </Title>
      </Col>
    </Row>
    
      {/* Summary Cards & Search */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic title="Total Customers" value={filtered.length} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="Total Outstanding Loans"
              value={filtered.reduce((a, c) => a + c.outstandingLoans, 0)}
              prefix="₹"
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Input.Search
            placeholder="Search by name or status"
            onChange={(e) => setSearch(e.target.value)}
            allowClear
          />
        </Col>
      </Row>

      {/* Charts */}
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card title="Income vs Expenses">
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={filtered}>
                  <Line
                    type="monotone"
                    dataKey="monthlyIncome"
                    stroke="#52c41a"
                  />
                  <Line
                    type="monotone"
                    dataKey="monthlyExpenses"
                    stroke="#ff4d4f"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Risk Score Distribution">
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    outerRadius={100}
                    label
                  >
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Table */}
      <Card title="Customer Table">
        <div style={{ overflowX: "auto" }}>
          <Table
            dataSource={filtered}
            rowKey="customerId"
            pagination={{ pageSize: 5 }}
            scroll={{ x: "max-content" }}
            columns={[
              {
                title: "Name",
                dataIndex: "name",
                sorter: (a, b) => a.name.localeCompare(b.name),
                filteredValue: [search],
                onFilter: (value, record) =>
                  record.name
                    .toLowerCase()
                    .includes((value as string).toLowerCase())
              },
              { title: "Credit Score", dataIndex: "creditScore" },
              {
                title: "Risk Score",
                render: (_, c) => {
                  const score = getRiskScore(c);
                  const color =
                    score > 70 ? "red" : score > 40 ? "orange" : "green";
                  return (
                    <Progress percent={score} strokeColor={color} />
                  );
                }
              },
              {
                title: "Status",
                render: (_, c) => (
                  <Select
                    value={c.status}
                    onChange={(val) =>
                      updateCustomerStatus(c.customerId, val)
                    }
                    style={{ minWidth: 100 }}
                  >
                    <Select.Option value="Review">Review</Select.Option>
                    <Select.Option value="Approved">Approved</Select.Option>
                    <Select.Option value="Rejected">Rejected</Select.Option>
                  </Select>
                )
              }
            ]}
          />
        </div>
      </Card>
    </Space>
  );
};

export default Dashboard;
