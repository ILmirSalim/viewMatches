export type MatchesState = {
  matches: Match[]
  loading: boolean
  error: string | null
  statusFilter: StatusFilter
}

type Player = {
  kills: number
  username: string
}

type Team = {
  name: string
  place: number
  players: Player[]
  points: number
  total_kills: number
}

export type MatchStatus = "Finished" | "Ongoing" | "Scheduled";

export type Match = {
  awayScore: number
  awayTeam: Team
  homeScore: number
  homeTeam: Team
  status: MatchStatus
  time: string
  title: string
}

export type ApiResponse = {
  data: {
    matches: Match[]
  }
}

export enum StatusFilter {
  ALL = 'Все статусы',
  FINISHED = 'Finished',
  ONGOING = 'Ongoing',
  SCHEDULED = 'Scheduled'
}