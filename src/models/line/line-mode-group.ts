import { LineMode } from '../../enums/line-mode';
import { IGroup } from './group';

export interface ILineModeGroup extends IGroup {
  modeName: LineMode;
}
