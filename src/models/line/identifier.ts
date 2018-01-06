import { IdentifierType } from '../../enums/identifier-type';

export interface IIdentifier {
  crowding: { };
  id: string;
  name: string;
  type: IdentifierType;
  uri: string;
}
