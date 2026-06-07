import { portfolioData } from '../data/portfolio'

export type PortfolioPayload = typeof portfolioData

// JAMstack: data is bundled statically — no API call needed.
// This thin wrapper keeps the component API identical to the original,
// making it easy to swap in a real API or CMS later.
export async function getPortfolio(): Promise<PortfolioPayload> {
  return portfolioData
}

export const fallbackPortfolio: PortfolioPayload = portfolioData
