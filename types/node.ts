export type PeerId = string;

export interface NodeMetrics {
  participation: number; // From getVoterVoteCount - can be 0
  rewards: number; // From getTotalRewards - CAN BE NEGATIVE (int256)
  wins: number; // From getTotalWins - can be 0
}

export interface GensynNode {
  peerId: PeerId;
  address?: string; // From getEoa
  keyMetrics: NodeMetrics;
  lastUpdated: Date;
}

