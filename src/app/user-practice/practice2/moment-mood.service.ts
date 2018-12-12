import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MomentMoodService {

  constructor() { }

  Mmood = [
    '怒气冲天',
    '怒形于色',
    '怒火冲天',
    '火冒三丈',
    '发指眦裂'
  ];
}
