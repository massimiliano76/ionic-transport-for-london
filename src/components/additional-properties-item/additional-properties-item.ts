import { Component, Input } from '@angular/core';

import { IAdditionalProperties } from '../../models/tfl-api/additional-properties';

@Component({
  selector: 'component-additional-properties-item',
  templateUrl: 'additional-properties-item.html',
})
export class AdditionalPropertiesItemComponent {
  @Input() public additionalProperties: IAdditionalProperties;

  public prettyPrintString(stringToPrettyPrint: string): string {
    return stringToPrettyPrint
    .replace(
        /([A-Z])/g,
        ' $1',
    )
    .replace(
        /\w\S*/g,
        (stringToTitleCase: string) =>
            stringToTitleCase.charAt(0).toUpperCase() +
            stringToTitleCase.substr(1).toLowerCase(),
    );
  }
}
