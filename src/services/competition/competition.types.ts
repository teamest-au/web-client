export interface ICompetition {
  name: string;
  active: boolean;
}

export interface ICompetitionData {
  loading: boolean;
  competitions?: ICompetition[];
}

export interface ICompetitionFilter {
  includeInactive?: boolean;
}