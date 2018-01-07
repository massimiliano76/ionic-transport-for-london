import { IdentifierType } from '../../enums/tfl-api/identifier-type';

export interface IIdentifier {
  crowding: { };
  id: string;
  name: string;
  type: IdentifierType;
  uri: string;
}
