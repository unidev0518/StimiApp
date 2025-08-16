export interface BettingMode {
  mode: 'cash' | 'coin';
}

export interface OddsButton {
  spread: string;
  odds: string;
}

export interface Team {
  name: string;
  logo?: string;
}

export interface GameMatchup {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  date: string;
  time: string;
  homeOdds: OddsButton;
  awayOdds: OddsButton;
  overUnder: {
    over: OddsButton;
    under: OddsButton;
  };
  moneyLine: {
    home: string;
    away: string;
  };
}

export interface FeaturedGame {
  peoplePlaced: number;
  teams: string[];
  date: string;
  time: string;
}
