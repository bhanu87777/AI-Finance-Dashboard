<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AI-Finance Dashboard</title>
</head>
<body>

  <h1>AI-Finance Dashboard</h1>
  <p>
    <strong>AI-Finance Dashboard:</strong> Built a full-stack responsive Financial Analytics Dashboard using KPI, product, and transaction models.<br>
    Application was developed with <strong>React + TypeScript + Material-UI + Redux Toolkit</strong> on the frontend and <strong>Node.js/Express + MongoDB</strong> on the backend.<br>
    It visualizes interactive charts (e.g., Profit and Revenue, Campaign and Target) using <strong>Recharts</strong> and leverages a <strong>Linear Regression Machine Learning model</strong> to forecast future company revenue, turning historical data into actionable insights for strategic decision-making.
  </p>

  <h2>🚀 Features</h2>
  <ul>
    <li>Responsive financial dashboard UI built with Material-UI</li>
    <li>KPI, products, and transactions data models with MongoDB</li>
    <li>Interactive data visualizations using Recharts</li>
    <li>Redux Toolkit for state management</li>
    <li>Backend APIs built with Express and Mongoose</li>
    <li>Machine Learning: Linear Regression for revenue forecasting</li>
  </ul>

  <h2>🛠️ Tech Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> React, TypeScript, Material-UI, Redux Toolkit, Recharts</li>
    <li><strong>Backend:</strong> Node.js, Express.js, Mongoose</li>
    <li><strong>Database:</strong> MongoDB (Atlas)</li>
    <li><strong>Machine Learning:</strong> Linear Regression (JavaScript/ML integration)</li>
  </ul>

  <h2>📂 Project Structure</h2>
  <pre>
AI-Finance-Dashboard/
├── client/                 # Frontend (React + TypeScript)
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── features/       # Redux slices and state logic
│   │   ├── pages/          # Dashboard pages
│   │   ├── charts/         # Recharts components
│   │   └── App.tsx         # Main App entry
│   └── package.json
│
├── server/                 # Backend (Node.js + Express)
│   ├── models/             # Mongoose models (KPI, Products, Transactions)
│   ├── routes/             # Express routes (API endpoints)
│   ├── controllers/        # Business logic for APIs
│   ├── index.js            # Server entry point
│   └── package.json
│
├── README.html             # Project documentation
├── package.json            # Root config (optional for monorepo)
└── .gitignore
  </pre>

  <h2>⚡ Getting Started</h2>
  <ol>
    <li>Clone the repository</li>
    <li>Set up environment variables (e.g., MongoDB URI, PORT)</li>
    <li>Install dependencies:
      <pre>
cd client && npm install
cd ../server && npm install
      </pre>
    </li>
    <li>Run backend:
      <pre>cd server && npm start</pre>
    </li>
    <li>Run frontend:
      <pre>cd client && npm start</pre>
    </li>
    <li>Visit <a href="http://localhost:3000">http://localhost:3000</a> to view the dashboard</li>
  </ol>

  <h2>📊 Example Insights</h2>
  <ul>
    <li>Profit vs Revenue trends over time</li>
    <li>Campaign performance vs target</li>
    <li>Future revenue forecasting with Linear Regression</li>
  </ul>

  <h2>🤝 Contributing</h2>
  <p>
    Contributions, issues, and feature requests are welcome!<br>
    Feel free to fork this repo and submit a pull request.
  </p>

  <h2>📜 License</h2>
  <p>This project is licensed under the MIT License.</p>

</body>
</html>
