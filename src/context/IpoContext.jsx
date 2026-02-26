/**
 * MapCap IPO Global State Provider
 * ---------------------------------------------------------
 * Lead Architect: Eslam Kora | AppDev @Map-of-Pi
 * Project: MapCap Ecosystem (Philip Jennings & Daniel Spec)
 * * Purpose: 
 * This Context serves as the 'Single Source of Truth' for the application.
 * It synchronizes the Pi Network Pioneer session with the MERN backend 
 * to provide real-time updates for the 4 mandatory IPO metrics.
 */

import React, { createContext, useContext, useState, useCallback } from 'react';
import { getIpoMetrics } from '../services/api.service';

// Initialize Context
const IpoContext = createContext();

/**
 * IpoProvider Component
 * Wraps the application to provide global access to Pi stats and Auth state.
 */
export const IpoProvider = ({ children }) => {
  // Authentication State: Stores the Pi Pioneer profile
  const [currentUser, setCurrentUser] = useState(null);

  // Financial Metrics State: Directly maps to Philip's 4-Value requirement [Page 4]
  const [metrics, setMetrics] = useState({
    totalInvestors: 0,   // Value 1
    totalPi: 0,          // Value 2
    userPi: 0,           // Value 3
    dailyPrices: [],     // Market growth data for SVG Visualization
    spotPrice: 0         // Current calculation based on Water-Level logic
  });

  // Global Syncing Status: Controls the branded loading overlay in App.jsx
  const [loading, setLoading] = useState(true);

  /**
   * refreshData (callback)
   * Orchestrates the fetching of real-time stats from the Node.js/MERN Engine.
   * @param {string} username - Optional override for initial auth sync.
   */
  const refreshData = useCallback(async (username) => {
    const targetUser = username || currentUser?.username;
    
    // We only fetch if we have a valid pioneer identity to ensure data integrity
    if (!targetUser) return;

    try {
      const data = await getIpoMetrics(targetUser);
      setMetrics({
        totalInvestors: data.totalInvestors || 0,
        totalPi: data.totalPiInvested || 0,
        userPi: data.userPiInvested || 0,
        dailyPrices: data.dailyPrices || [],
        spotPrice: data.spotPrice || 0
      });
    } catch (err) {
      console.error("Context-Engine Sync Failure:", err);
    }
  }, [currentUser]);

  // The exposed Context Value containing all global states and functions
  const value = {
    currentUser,
    setCurrentUser,
    metrics,
    setMetrics,
    loading,
    setLoading,
    refreshData
  };

  return (
    <IpoContext.Provider value={value}>
      {children}
    </IpoContext.Provider>
  );
};

/**
 * useIpo (Custom Hook)
 * Simplifies the consumption of global state within functional components.
 * Usage: const { metrics, refreshData } = useIpo();
 */
export const useIpo = () => {
  const context = useContext(IpoContext);
  if (!context) {
    throw new Error("useIpo must be used within an IpoProvider");
  }
  return context;
};

export default IpoContext;
