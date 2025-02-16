
export class LoadList {
  static readonly type = '[CONSULTANTS] Load Consultants';
}

export class ToggleOrder {
  static readonly type = '[CONSULTANTS] Toggle Order';

  constructor(public isAscending: boolean) { }
}

