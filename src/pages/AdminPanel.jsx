import React from 'react';
import { useIpoStats } from '../hooks/useIpoStats';

const AdminPanel = () => {
  const { totalInvestors, totalPiInvested, spotPrice } = useIpoStats('admin');

  return (
    <div className="admin-container">
      <h1 className="audit-title">Security & Audit Dashboard</h1>
      <div className="metrics-row">
        <div className="metric-box">
          <h4>Global Liquidity</h4>
          <p>{totalPiInvested} π</p>
        </div>
        <div className="metric-box">
          <h4>Whale Shield Status</h4>
          <p style={{color: '#4caf50'}}>Level 4 Active</p>
        </div>
      </div>
      <div className="log-area">
        <h3>System Logs (Audit Trail)</h3>
        <p>Monitoring real-time A2UaaS requests...</p>
      </div>
    </div>
  );
};

export default AdminPanel;

