import { LineMode } from '../../enums/tfl-api/line-mode';
import { IGroup } from './group';

export interface ILineModeGroup extends IGroup {
  modeName: LineMode;
}
