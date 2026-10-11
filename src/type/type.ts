export interface RicePrice {
  id: number;
  category: string;
  categoryIcon: string;
  categoryNameBn: string;
  change: {
    dir: "up" | "down";
    pct: number;
  };
  image: string;
  lastMonth: number;
  lastWeek: number;
  markets: Market[];
  nameBn: string;
  slug: string;
  today: number;
  unit: string;
  yesterday: number;
}

export interface Market {
  division: string;
  market: string;
  max: number;
  min: number;
}