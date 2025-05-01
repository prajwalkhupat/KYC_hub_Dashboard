Credit Risk Analytics Dashboard
This project is a credit risk analytics dashboard designed for a fintech SaaS platform. The dashboard provides visual insights into customer financial health, risk scores, and workflow management for risk officers. The application is built using React, TypeScript, Node.js, Express, Ant Design, and Recharts.

🛠️ Tech Stack
Frontend
React (with TypeScript)

React Router

Axios (for API calls)

Ant Design (UI components)

Recharts (charts and graphs for data visualization)

Backend
Node.js + Express.js (RESTful API)

In-memory JSON (for data storage)

AI Tools Used
GitHub Copilot (for code completion and bug fixes)

ChatGPT (for logic formulation and explanation)

Figma (for UI prototyping and design)

🚀 Setup Instructions
Frontend Setup
Clone the repository:

git clone https://github.com/prajwalkhupat/KYC_hub_Dashboard.git
Navigate to the project directory:

cd credit-risk-dashboard
Install dependencies:

npm install
Run the development server:

npm start
The application will be accessible at http://localhost:3000.

Backend Setup
Navigate to the backend directory:

cd backend
Install dependencies:

npm install
Run the backend server:

npm start
The API will be accessible at http://localhost:5000.

📊 Features & Functionality
Dashboard Overview:

Displays financial metrics such as income, expenses, account balance, and credit score.

Visualizes income vs expenses over time using a line chart.

Risk score distribution is shown in a bar or pie chart.

A sortable and filterable customer data table.

Risk Assessment & Scoring:

Each customer has a computed risk score based on the following factors:

Credit score

Loan repayment history (binary: 1 = paid, 0 = missed)

Outstanding loans vs income ratio

The risk scores are displayed using Ant Design Progress bars, with color codes indicating risk levels (e.g., red for high risk, green for low risk).

Workflow Automation & Orchestration:

Risk officers can update the status of a customer (Review, Approved, Rejected) using Ant Design Select and Form components.

Status updates are persisted via a backend API.

A mock alert system triggers for high-risk customers (risk score > 70).

📈 Visualization & Analytics
Recharts is used to visualize data, providing clear and interactive charts:

Line Chart: Income vs expenses over time.

Bar/Pie Chart: Risk score distribution.

Ant Design Table: Sortable and filterable customer data.

🔐 API Usage & Integration
The backend API is built with Node.js and Express.js. It provides endpoints for managing customer data and status updates.

Available Endpoints
GET /customers: Fetch all customers.

POST /customers/update: Update the customer status.

POST /alerts: Trigger an alert for high-risk customers (score > 70).

🔧 AI Tool Usage
GitHub Copilot
Assisted in code completion and generating functions for risk scoring logic.

Helped with refactoring some of the functions for better readability.

ChatGPT
Provided logic for risk score calculations and how the credit scoring algorithm should work.

Guided in structuring the backend API and handling status updates.

Figma
Used Figma for prototyping the UI, ensuring responsive design, and setting up component structures for Ant Design.

💡 Risk Scoring Explanation
The risk score for each customer is calculated using the following formula:

Credit Score: Directly mapped to risk, where a higher score indicates lower risk.

Loan Repayment History: A binary array is used to calculate the percentage of loan repayments made.

Outstanding Loans vs Income: A ratio of outstanding loans to monthly income is computed. A higher ratio results in a higher risk score.

The final risk score is calculated as follows:

Credit score + Loan repayment history (weighted) - Loans vs income ratio.

Risk scores are categorized into three levels:

Low Risk (0-30)

Medium Risk (31-70)

High Risk (71-100)

💼 Deployment
Frontend Deployment
The frontend is deployed on Vercel (or Netlify).

Backend Deployment (Optional)
The backend is deployed on Render (or Railway).

📝 Additional Features (Bonus Points)
Unit Tests: Using Jest or Vitest for testing critical components and API endpoints.

Dark Mode Toggle: Added support for dark mode in Ant Design.

Responsive Mobile View: The dashboard is fully responsive on mobile devices.

Advanced Filters/Search: Enhanced table search functionality.

