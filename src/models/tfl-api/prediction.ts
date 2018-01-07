import { LineMode } from '../../enums/tfl-api/line-mode';
import { IPredictionTiming } from './prediction-timing';

export interface IPrediction {
  bearing: string;
  currentLocation: string;
  destinationName: string;
  destinationNaptanId: string;
  direction: string;
  expectedArrival: Date;
  id: string;
  lineId: string;
  lineName: string;
  modeName: LineMode;
  naptanId: string;
  operationType: number;
  platformName: string;
  stationName: string;
  timeToLive: Date;
  timeToStation: number;
  timestamp: Date;
  timing: IPredictionTiming;
  towards: string;
  vehicleId: string;
}
