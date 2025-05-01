import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let alerts: any[] = [];

let customers = [
  {
    customerId: "CUST1001",
    name: "Alice Johnson",
    monthlyIncome: 6200,
    monthlyExpenses: 3500,
    creditScore: 710,
    outstandingLoans: 15000,
    loanRepaymentHistory: [1, 0, 1, 1, 1, 1, 0, 1],
    accountBalance: 12500,
    status: "Review"
  },
  {
    customerId: "CUST1002",
    name: "Bob Smith",
    monthlyIncome: 4800,
    monthlyExpenses: 2800,
    creditScore: 640,
    outstandingLoans: 20000,
    loanRepaymentHistory: [1, 1, 1, 0, 0, 1, 0, 0],
    accountBalance: 7300,
    status: "Approved"
  },
  {
    customerId: "CUST1003",
    name: "Charlie Green",
    monthlyIncome: 7000,
    monthlyExpenses: 3200,
    creditScore: 680,
    outstandingLoans: 10000,
    loanRepaymentHistory: [1, 1, 1, 1, 0, 1, 1, 1],
    accountBalance: 8500,
    status: "Review"
  },
  {
    customerId: "CUST1004",
    name: "Diana Prince",
    monthlyIncome: 9000,
    monthlyExpenses: 4000,
    creditScore: 750,
    outstandingLoans: 20000,
    loanRepaymentHistory: [1, 1, 1, 1, 1, 1, 1, 1],
    accountBalance: 12000,
    status: "Approved"
  },
  {
    customerId: "CUST1005",
    name: "Ethan Hunt",
    monthlyIncome: 8000,
    monthlyExpenses: 3600,
    creditScore: 620,
    outstandingLoans: 18000,
    loanRepaymentHistory: [1, 0, 0, 1, 1, 1, 0, 1],
    accountBalance: 5000,
    status: "Review"
  },
  {
    customerId: "CUST1006",
    name: "Felicity Jones",
    monthlyIncome: 9500,
    monthlyExpenses: 5000,
    creditScore: 770,
    outstandingLoans: 22000,
    loanRepaymentHistory: [1, 1, 1, 1, 1, 1, 1, 1],
    accountBalance: 13500,
    status: "Approved"
  },
  {
    customerId: "CUST1007",
    name: "George Martin",
    monthlyIncome: 4000,
    monthlyExpenses: 2800,
    creditScore: 610,
    outstandingLoans: 12000,
    loanRepaymentHistory: [0, 0, 1, 1, 1, 0, 1, 0],
    accountBalance: 3000,
    status: "Rejected"
  },
  {
    customerId: "CUST1008",
    name: "Hannah Singh",
    monthlyIncome: 10000,
    monthlyExpenses: 6500,
    creditScore: 740,
    outstandingLoans: 25000,
    loanRepaymentHistory: [1, 1, 1, 0, 1, 1, 1, 1],
    accountBalance: 14000,
    status: "Review"
  },
  {
    customerId: "CUST1009",
    name: "Ishaan Patel",
    monthlyIncome: 5200,
    monthlyExpenses: 3100,
    creditScore: 695,
    outstandingLoans: 11000,
    loanRepaymentHistory: [1, 1, 0, 0, 1, 0, 1, 1],
    accountBalance: 7200,
    status: "Review"
  },
  {
    customerId: "CUST1010",
    name: "Julia Chen",
    monthlyIncome: 6800,
    monthlyExpenses: 4200,
    creditScore: 705,
    outstandingLoans: 14500,
    loanRepaymentHistory: [1, 1, 1, 1, 1, 0, 1, 1],
    accountBalance: 9600,
    status: "Approved"
  },
  {
    customerId: "CUST1011",
    name: "Karan Kapoor",
    monthlyIncome: 7400,
    monthlyExpenses: 3900,
    creditScore: 715,
    outstandingLoans: 16000,
    loanRepaymentHistory: [1, 1, 1, 1, 1, 1, 0, 1],
    accountBalance: 10500,
    status: "Approved"
  },
  {
    customerId: "CUST1012",
    name: "Lena Hart",
    monthlyIncome: 6900,
    monthlyExpenses: 3700,
    creditScore: 680,
    outstandingLoans: 17000,
    loanRepaymentHistory: [1, 1, 0, 1, 1, 1, 1, 0],
    accountBalance: 8900,
    status: "Review"
  }
  
];

// Get all customers
app.get('/api/customers', (req, res) => {
  res.json(customers);
});

// Update status of a customer
app.put('/api/customers/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  customers = customers.map(c => c.customerId === id ? { ...c, status } : c);
  res.json({ success: true });
});

// Log alerts (if risk score > 70)
app.post('/api/alerts', (req, res) => {
  console.log('🚨 Alert received:', req.body);
  alerts.push(req.body);
  res.status(200).send('Alert received');
});

app.listen(5000, () => {
  console.log('✅ Backend is running at http://localhost:5000');
});
