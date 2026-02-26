# 💎 MapCap IPO - Specialized Pioneer Interface
### *The Next Evolution of Equity Ownership on the Pi Network*

[![Version](https://img.shields.io/badge/Version-1.5.0-gold.svg)](#)
[![Tech Stack](https://img.shields.io/badge/Stack-React_19_|_Vite_|_Tailwind-blue.svg)](#)
[![Security](https://img.shields.io/badge/Security-Whale--Shield_v4_Active-green.svg)](#)

---

## 🚀 Vision Overview
Designed exclusively for the **Map of Pi** ecosystem, the **MapCap IPO Frontend** is a high-performance, single-screen experience optimized for the **Pi Browser**. It bridges the gap between traditional IPO mechanics and Web3 transparency, strictly adhering to the architectural requirements set by **Philip Jennings** and the security protocols of **Daniel**.

---

## ✨ Key Strategic Features

### 📈 1. Dynamic "Water-Level" Price Charting
* **Philip’s Algorithm:** Implements the dynamic spot-price calculation: `$Price = \frac{IPO\_Pool\_Supply}{Total\_Pi\_Invested}$`.
* **Intelligent Scaling:** The Y-axis (Price) automatically scales to **120%** of the peak price for optimal visibility.
* **Bootstrap State:** Displays a sophisticated `"Calculating..."` overlay at Day 1 until initial price discovery is finalized.
* **Static Timeline:** Fixed X-axis from **Week 1** to **Week 4** to represent the 4-week high-intensity launch phase.

### 🛡️ 2. Anti-Whale Enforcement UI
* **Real-time Transparency:** Displays global statistics with 100% precision.
* **Cap Awareness:** Built-in indicators to reflect the **10% Investment Cap** policy, ensuring fairness for all pioneers.

### 💸 3. Unified A2UaaS Integration
* **Seamless Transactions:** Integrated with the Pi SDK for **U2A (Invest)** and **A2U (Refund/Withdraw)** flows.
* **Gas Fee Transparency:** Automatically accounts for the **0.01 Pi network fee** in all refund/withdrawal calculations, as specified in the Use Case [Page 5].

---
 Design Language (The "MapCap" Identity)
​The UI follows the Requirement [Page 3] for a premium, trustworthy look:
​Primary Green: #2D5A27 (Growth & Stability)
​Accent Gold: #D4AF37 (Equity & Value)
​Typography: Clean, modern Sans-serif optimized for mobile readability in the Pi Browser.
​⚙️ Technical Setup & Environment
​Prerequisites
​Node.js v18+
​Pi Browser Dev Sandbox
​Installation

Clone the Repo:
git clone [https://github.com/map-of-pi/mapcap-ipo-frontend.git](https://github.com/map-of-pi/mapcap-ipo-frontend.git)

Install Dependencies:
npm install

Configure Environment:
Create a .env file in the root:

VITE_API_URL=[https://mapcap-api.vercel.app/api/ipo](https://mapcap-api.vercel.app/api/ipo)
VITE_PI_APP_ID=mapcap-ipo-prod-001

Launch Development Server:

npm run dev

📝 Compliance Audit (Philip's Use Case v2026)

Requirement Status Implementation Detail
Fixed IPO Supply ✅ Locked at 2,181,818 units per [Page 2, 26].
Spot-Price Logic ✅ Dynamic calculation based on total pool balance.
Anti-Whale UI ✅ Visualizes the 10% cap enforcement.
Gas Fee Logic ✅ Automated 0.01 Pi deduction on A2U transactions.



👨‍💻 Developed By
​Full-Stack Developer | AppDev @Map-of-Pi Building scalable Web3 solutions with MERN Stack & AI integration.
​"Precision in code, Transparency in finance."


## 🛠️ Project Architecture (Map)

```text
src/
├── 📂 components/
│   ├── 📊 PriceGraph.jsx       # High-fidelity D3/Chart.js implementation
│   ├── 📋 StatsPanel.jsx      # Real-time metrics (Pioneers, Volume, Capacity)
│   └── 💳 ActionButtons.jsx   # Invest/Withdraw A2UaaS triggers
├── 📂 context/
│   └── 🌐 IpoContext.jsx      # Global State Management (The "Brain")
├── 📂 styles/
│   └── 🎨 theme.css           # MapCap Gold & Green visual identity
└── 📄 App.jsx                 # Single-Screen Orchestrator

