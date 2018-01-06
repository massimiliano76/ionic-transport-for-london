import { LineMode } from '../../../enums/line-mode';
import { PlaceType } from '../../../enums/place-type';
import { IAdditionalProperties } from './additional-properties';
import { IIdentifier } from '../identifier';
import { ILineGroup } from '../line-group';
import { ILineModeGroup } from '../line-mode-group';

export interface IStopPoint {
  additionalProperties: IAdditionalProperties;
  children: IStopPoint[];
  commonName: string;
  hubNaptanCode: string;
  icsCode: string;
  id: string;
  lat: number;
  lineGroups: ILineGroup[];
  lineModeGroups: ILineModeGroup[];
  lines: IIdentifier[];
  lon: number;
  modes: LineMode[];
  naptanId: string;
  placeType: PlaceType;
  stationNaptan: string;
  status: boolean;
  stopType: string;
}
