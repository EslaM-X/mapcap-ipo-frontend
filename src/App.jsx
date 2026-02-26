/**
 * MapCap IPO - Main Application Orchestrator (Context-Driven)
 * ---------------------------------------------------------
 * Lead Architect: Eslam Kora | AppDev @Map-of-Pi
 * Project: MapCap Ecosystem | Spec: Philip Jennings & Daniel
 * * DESIGN PRINCIPLE: 
 * Implements the "Golden Ratio" layout (33.33vh vertical split).
 * Handles the critical Pi SDK Handshake and global state hydration.
 */

import React, { useEffect } from 'react';
import './App.css';

// UI Components - Orchestrating the "Single-Screen" Architecture
import Navbar from './components/Navbar';
import PriceGraph from './components/PriceGraph';
import StatsPanel from './components/StatsPanel';
import ActionButtons from './components/ActionButtons';

// Global State & Intelligence
import { useIpo } from './context/IpoContext';
import { PiService } from './services/pi.service';

function App() {
  const { 
    currentUser, 
    setCurrentUser, 
    loading, 
    setLoading, 
    refreshData 
  } = useIpo();

  /**
   * SYSTEM BOOTSTRAP:
   * Lifecycle method to synchronize the Pi Network environment with 
   * the MapCap Node.js ledger.
   */
  useEffect(() => {
    const initializeMapCap = async () => {
      try {
        if (window.Pi) {
          // Initialize Pi SDK (Note: sandbox should be false for mainnet deployment)
          window.Pi.init({ version: "2.0", sandbox: true });
          
          // Step 1: Secure Pioneer Authentication [Daniel's Security Requirement]
          const user = await PiService.authenticate();
          setCurrentUser(user);
          
          // Step 2: Hydrate Global State with real-time IPO Metrics (Values 1-4)
          await refreshData(user.username);
        } else {
          console.warn("Pi SDK not detected. Ensure you are within the Pi Browser.");
        }
      } catch (err) {
        console.error("Critical: SDK handshake failed or Pioneer rejected Auth.", err);
      } finally {
        // Step 3: Transition out of loading state to reveal the dashboard
        setLoading(false); 
      }
    };

    initializeMapCap();
  }, [setCurrentUser, refreshData, setLoading]);

  /**
   * LOADING EXPERIENCE:
   * Professional branding transition while auditing the Pi Network Ledger.
   */
  if (loading) {
    return (
      <div className="flex-center loading-screen">
        <div className="brand-pulse">
          <h2 className="brand-title">MAPCAP IPO</h2>
          <div className="loader-dots">
            <span></span><span></span><span></span>
          </div>
          <p className="loading-text">Synchronizing with Pi Network Ledger...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mapcap-root-container">
      
      {/* SECTION 1: TOP (33.33vh) - MARKET VISUALIZATION
          Host for PriceGraph component & Brand Identity. */}
      <section className="layout-section section-top">
        <Navbar username={currentUser?.username} />
        <PriceGraph />
      </section>

      {/* SECTION 2: MIDDLE (33.33vh) - THE TRANSPARENCY LEDGER
          Renders the 4 Mandatory IPO Metrics (Investors, Total Pi, User Stake, Capital Gain). */}
      <section className="layout-section section-middle">
        <StatsPanel />
      </section>

      {/* SECTION 3: BOTTOM (33.33vh) - LIQUIDITY CONTROLS
          Operational hub for Investments and A2UaaS Withdrawals. */}
      <section className="layout-section section-bottom">
        <ActionButtons />
      </section>

    </div>
  );
}

export default App;
