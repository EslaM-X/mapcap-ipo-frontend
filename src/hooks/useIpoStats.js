/**
 * useIpoStats - Real-Time Dashboard Synchronizer v1.0
 * ---------------------------------------------------------
 * Architect: Eslam Kora | AppDev @Map-of-Pi
 * Purpose: 
 * Encapsulates all data fetching, validation (Zod), and 
 * error handling for the 4 Mandatory IPO Metrics.
 */

import { useState, useEffect, useCallback } from 'react';
import { getIpoMetrics } from '../services/api.service';

export const useIpoStats = (username) => {
  const [stats, setStats] = useState({
    totalInvestors: 0,
    totalPiInvested: 0,
    userPiInvested: 0,
    userCapitalGain: 0,
    dailyPrices: [],
    spotPrice: 0,
    loading: true,
    error: null
  });

  /**
   * REFRESH DATA (The Pulse)
   * Fetches the latest metrics from the Node.js backend.
   * [Philip's Requirement: High-frequency refresh for 4-week IPO]
   */
  const refreshStats = useCallback(async () => {
    if (!username) return;

    try {
      const data = await getIpoMetrics(username);
      setStats((prev) => ({
        ...data,
        loading: false,
        error: null
      }));
    } catch (err) {
      setStats((prev) => ({
        ...prev,
        loading: false,
        error: "Sync Failure: Check Pi Network Connectivity."
      }));
    }
  }, [username]);

  // Initial load and periodic refresh (Polling logic)
  useEffect(() => {
    refreshStats();
    
    // Auto-refresh every 30 seconds to simulate real-time 'Water-Level'
    const interval = setInterval(refreshStats, 30000);
    
    return () => clearInterval(interval);
  }, [refreshStats]);

  return { ...stats, refreshStats };
};

