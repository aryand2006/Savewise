# Savewise - Smarter Subscription Management

<p align="center">
  <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3" alt="Savewise Dashboard" width="100%" style="border-radius: 10px; opacity: 0.9;" />
</p>

## Overview

**Savewise** is a modern financial web application designed to turn your subscription liabilities into assets. By consolidating your recurring payments and leveraging a prepaid yield vault system, Savewise helps you offset costs through automated compounding yields.

We've reimagined the subscription manager—moving beyond simple tracking to active financial optimization. Built with a stunning glassmorphism UI, it offers a seamless experience for managing usage, analyzing budgets, and optimizing wealth.

## Key Features

#### **1. Day-to-Day Financial Intelligence (Visa Track)**
*   **Daily Spend Tracker:** Real-time visual cards tracking daily essentials like Whole Foods and Starbucks.
*   **Contextual Alerts:** Smart notifications that analyze spending patterns against historical averages (e.g., "15% higher usage this week").
*   **Actionable Insights:** Direct advice on how to curb spending frequency without cutting lifestyle quality.

#### **2. XRPL-Powered Yields (Ripple Track)**
*   **XRP Ledger Integration:** The **Yield Vault™** simulates a connection to the XRP Ledger, utilizing "Trust Lines" to secure high-yield returns.
*   **Multi-Rail Funding:** Seamlessly fund your vault using **Apple Pay** (Fiat-to-Crypto onramp) or connect a **Crypto Wallet** standard to the XRPL.
*   **Transparent Validation:** Real-time breakdown of Market Rates vs. XRPL Trust Line Boosts (+0.70%), bringing transparency to DeFi yields.
*   **Fast & Low Cost:** Leverages the speed and low transaction fees of the XRPL network for micro-compounding.

#### **3. AI Decision Support (Conway Track)**
*   **Proactive Analysis:** The system doesn't just display data; it makes decisions.
*   **Confidence Scores:** "Should I prepay annually?" Our AI provides a detailed Matrix (Usage Freq, Churn Risk, Cashflow) with a definitive **Confidence Score** (e.g., "94% Match").
*   **One-Click Optimization:** Seamlessly switch plans based on AI recommendations.

### Core Features

### Yield Vault™ Technology
*   **DeFi-Powered Yields:** We bridge the gap between traditional subscriptions and Decentralized Finance. Your prepaid funds are converted to stablecoins (USDC) and deployed into low-risk, blue-chip DeFi lending protocols (like Aave or Compound).
*   **5.20% APY (Simulated):** By cutting out the middleman, you earn institutional-grade interest rates on money that would otherwise sit idle in a merchant's bank account.
*   **Automated Offsetting:** These accrued yields are automatically applied to your subscription costs, effectively lowering the price of services like Netflix and Spotify over time.
*   **Safe & Liquid:** Funds are held in audited smart contracts with 24/7 liquidity, allowing you to withdraw or cancel at any time.

### AI-Powered Management
*   **Smart Plan Detection:** Just type "Hulu" and our AI agent automatically finding available plans and pricing tiers, saving you manual entry.
*   **Instant Savings Projection:** Immediately after adding a subscription, the system calculates your "Potential Yield Offset" (e.g., "+$9.45/yr"), psychologically reinforcing the value of the Yield Vault.
*   **Intelligent Insights:** receive proactive alerts about spending spikes, budget surpluses, and optimization opportunities (e.g., "Switching to Annual saves $45/yr").

### Intelligent Budget Planner
*   **Visual Analytics:** Deep dive into your financial health with interactive Pie and Bar charts powered by Recharts.
*   **Spending Breakdown:** See exactly how much goes to specific categories vs. savings.
*   **Projected Wealth:** visual simulators showing how your savings could grow over time with compound interest.

### Hassle-Free Control
*   **Unified Dashboard:** Manage everything from one place.
*   **One-Click Cancellation:** A streamlined, stress-free flow to cancel subscriptions directly from the app (simulated agent interaction).
*   **Global Search:** Instantly find any transaction or service.

## Tech Stack

Built with a focus on performance, aesthetics, and developer experience:

*   **Frontend Framework:** React 18
*   **Build Tool:** Vite (Blazing fast HMR)
*   **Styling:** Tailwind CSS + Custom Glassmorphism Theme
*   **Language:** TypeScript
*   **Visualization:** Recharts
*   **Icons:** Lucide React
*   **Routing:** React Router DOM

## Getting Started

Follow these steps to get the project running locally.

### Prerequisites
*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/savewise.git
    cd savewise
    ```

2.  **Install Dependencies**
    ```bash
    cd web  # Note: The project resides in the web/ directory structure or root depending on setup
    npm install
    ```
    *(If running from root configuration created during migration)*
    ```bash
    npm install
    ```

3.  **Run the Development Server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Navigate to `http://localhost:5173` to view the app.

## Project Structure

```
savewise/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── dashboard/      # Dashboard-specific widgets (Stats, Vault Card)
│   │   ├── subscriptions/  # Modals (Add, Cancel)
│   │   └── ui/             # Core primitives (Button, Card, Modal)
│   ├── context/            # Global State (SubscriptionContext)
│   ├── pages/              # Main route views (Dashboard, Analytics, etc.)
│   ├── lib/                # Utilities and helpers
│   └── types/              # TypeScript definitions
├── public/                 # Static assets
└── index.html              # Entry point
```

## Future Roadmap

*   **Real Banking Integration:** Connect via Plaid API for live transaction fetching.
*   **DeFi Protocol Hookup:** Replace simulated yield with real on-chain stablecoin vault interactions (e.g., Aave or Compound).
*   **Multi-User Vaults:** Shared pools for families or roommates.
*   **Mobile App:** Wrapping the web view into a native container for iOS/Android.

---

*Built with ❤️ for the future of finance.*
