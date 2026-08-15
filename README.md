# MapCap IPO · Pioneer Frontend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![CI](https://github.com/EslaM-X/mapcap-ipo-frontend/actions/workflows/ci.yml/badge.svg)](https://github.com/EslaM-X/mapcap-ipo-frontend/actions)

Pioneer-facing dashboard for the MapCap IPO on the Pi Network: live
"water-level" price charting, the four mandatory IPO metrics, and
non-custodial Pi payments via the Pi Browser SDK.

> Part of the MapCap ecosystem · designed and built by
> [EslaM-X](https://github.com/EslaM-X).

---

## What it does

- **Water-level pricing** — dynamic spot-price chart based on
  `Price = Pool Supply / Total Pi Invested`, with intelligent Y-axis
  scaling and a day-1 "Calculating…" bootstrap state.
- **IPO metrics** — total investors, total π invested, your π invested,
  your capital gain — refreshed every 30 seconds.
- **Pi payments** — U2A (user-to-app) payments through the Pi Browser SDK,
  non-custodial, with incomplete-payment auditing.
- **Pioneer + admin** — dashboard and admin panel routes.

## Stack

| Layer | Tech |
| --- | --- |
| UI | React 19 · Vite |
| Validation | Zod |
| Data | Axios → Node.js backend API |
| Wallet | Pi Browser SDK (auth + U2A payments) |

## Quick start

```bash
npm install
npm run dev
```

## Project layout

```
src/
  pages/          Dashboard, AdminPanel
  components/     StatsPanel, PriceGraph, ActionButtons, Navbar
  hooks/          useIpoStats (30s polling), usePiNetwork
  services/       api, auth, pi (SDK bridge)
  context/        IpoContext
```

## License

MIT. See `LICENSE`.
