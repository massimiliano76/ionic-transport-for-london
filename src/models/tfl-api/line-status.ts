import { IDisruption } from './disruption';
import { IValidityPeriod } from './validity-period';

export interface ILineStatus {
  created: Date;
  disruption: IDisruption;
  id: number;
  lineId: string;
  reason: string;
  statusSeverity: number;
  statusSeverityDescription: string;
  validityPeriods: IValidityPeriod[];
}
