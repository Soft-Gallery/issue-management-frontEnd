export interface StatisticState {
  NEW: number;
  CLOSED: number;
  RESOLVED: number;
  ASSIGNED: number;
  FIXED: number;
}

export interface StatisticPriority {
  MAJOR: number;
  MINOR: number;
  TRIVIAL: number;
  BLOCKER: number;
  CRITICAL: number;
}

export interface StatisticMainCause {
  DOCUMENTATION: number;
  TYPO: number;
  STRUCTURE: number;
  CONFIGURATION: number;
  FEATURE: number;
  INFRA: number;
  LOGIC: number;
  RESOLVING: number;
}
