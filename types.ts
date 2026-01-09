export enum ThreatLevel {
  LOW = 'DÜŞÜK',
  MEDIUM = 'ORTA',
  HIGH = 'YÜKSEK',
  CRITICAL = 'KRİTİK',
  SAFE = 'GÜVENLİ'
}

export interface SecurityLog {
  id: string;
  timestamp: string;
  message: string;
  level: ThreatLevel;
}

export interface ChartData {
  name: string;
  value: number;
  fullMark: number;
}

export interface AnalysisResult {
  threatLevel: ThreatLevel;
  analysis: string;
  protocol: string;
}
