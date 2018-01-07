import { Pipe, PipeTransform } from '@angular/core';

import { IEntry } from '../../models/entry';

@Pipe({
  name: 'mapToIterable',
})
export class MapToIterablePipe implements PipeTransform {
  public transform(
      values: Map<any, any>,
      args?: any[],
  ): Array<IEntry<any>> {
    const MAP: Array<IEntry<any>> = [];

    values.forEach((value: any, key: any) => {
      MAP.push({ key, value: values.get(key) });
    });

    return MAP;
  }
}
