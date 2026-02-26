/**
 * MapCap IPO Official Navbar (Context-Aware)
 * ---------------------------------------------------------
 * Architect: Eslam Kora | Spec: Philip Jennings [Page 3, 8]
 * Project: MapCap Ecosystem | Map-of-Pi
 * * This component renders the top-tier branding and navigation icons.
 * Enhanced for Spec Compliance: External M.A.C AI Chat integration.
 */

import React from 'react';
import { useIpo } from '../context/IpoContext';

const Navbar = () => {
  // Accessing global state and refresh trigger from Context
  const { currentUser, refreshData, setLoading } = useIpo();

  /**
   * Action: External Help per Spec [Page 3, Requirement 53-54]
   * Redirects the Pioneer to chatwithmac.com (M.A.C AI Chatbot).
   * Using window.open with _blank to preserve the IPO app session.
   */
  const handleHelpClick = () => {
    window.open("https://chatwithmac.com", "_blank");
  };

  /**
   * Action: Smart Sync
   * Re-fetches the latest IPO metrics from the MERN engine.
   * Aligns with Requirement [78] for real-time data transparency.
   */
  const handleRefreshClick = async () => {
    if (currentUser?.username) {
      setLoading(true);
      try {
        await refreshData(currentUser.username);
      } catch (err) {
        console.error("Manual refresh failed:", err);
      } finally {
        setLoading(false);
      }
    } else {
      // If session is lost during the interaction, re-trigger SDK login
      window.location.reload();
    }
  };

  return (
    <nav className="main-navbar">
      {/* App Branding: Requirement [Page 8] - Gold title on MapCap Green */}
      <div className="navbar-title">
        MapCapIPO {currentUser ? ` - @${currentUser.username}` : ' app'}
      </div>

      {/* Navigation Icons: Balanced 5-icon horizontal spread [Philip's UX Spec] */}
      <div className="navbar-icons">
        
        {/* 1. Left: Navigational Back Arrow (Gold) */}
        <span className="icon-gold" title="Back">←</span>

        {/* 2. Left/Middle: Home silhouette */}
        <span className="icon-gold" title="Home">🏠</span>

        {/* 3. Center: Pi Token / MapCap Branding */}
        <div className="token-icon-wrapper">
          <span className="icon-gold pi-logo animate-pulse">π</span>
        </div>

        {/* 4. Right/Middle: Active Help (Link to M.A.C AI) */}
        <span 
          className="icon-gold active-btn" 
          title="Help" 
          onClick={handleHelpClick}
        >
          ❓
        </span>

        {/* 5. Right: Active Smart-Refresh (Real-time Ledger Sync) */}
        <span 
          className="icon-gold active-btn" 
          title="Refresh" 
          onClick={handleRefreshClick}
        >
          ↻
        </span>

      </div>
    </nav>
  );
};

export default Navbar;
