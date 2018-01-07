import { IDisruption } from './disruption';
import { ILineStatus } from './line-status';
import { IServiceType } from './service-type';

export interface ILine {
  created: Date;
  crowding: { };
  disruptions: IDisruption[];
  id: string;
  lineStatuses: ILineStatus[];
  modeName: string;
  modified: Date;
  name: string;
  routeSections: any[];
  serviceTypes: IServiceType[];
}
