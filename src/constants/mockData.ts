import { GameMatchup, FeaturedGame } from '../types';

export const featuredGame: FeaturedGame = {
  peoplePlaced: 540,
  teams: ['[team name]', '[team name]'],
  date: 'Dec 25',
  time: '4:30pm ET',
};

export const gameMatchups: GameMatchup[] = [
  {
    id: '1',
    homeTeam: { name: 'LA Chargers' },
    awayTeam: { name: 'DET Lions' },
    date: 'Sep 4',
    time: '8:21PM ET',
    homeOdds: { spread: '+1.5', odds: '-155' },
    awayOdds: { spread: '+1.5', odds: '-155' },
    overUnder: {
      over: { spread: '+1.5', odds: '-155' },
      under: { spread: '+1.5', odds: '-155' },
    },
    moneyLine: {
      home: '+1.5',
      away: '+1.5',
    },
  },
  {
    id: '2',
    homeTeam: { name: 'LA Chargers' },
    awayTeam: { name: 'DET Lions' },
    date: 'Sep 4',
    time: '8:21PM ET',
    homeOdds: { spread: '+1.5', odds: '-155' },
    awayOdds: { spread: '+1.5', odds: '-155' },
    overUnder: {
      over: { spread: '+1.5', odds: '-155' },
      under: { spread: '+1.5', odds: '-155' },
    },
    moneyLine: {
      home: '+1.5',
      away: '+1.5',
    },
  },
];
