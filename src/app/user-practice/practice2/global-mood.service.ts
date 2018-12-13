import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalMoodService {

  n = 0;

  constructor() { }

  MoodBase: Array<any> = [
    '咬牙切齿',
    '令人发指',
    '万念俱灰',
    '垂头丧气',
    '心烦意乱'
  ];

  GLBmood:Array<any> = [];
}
