import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  title: string; //= "1";
  text: string; /*= "⁃ Привет\n" +
      " ⁃ Привет ;)\n" +
      " ⁃ А что ты тут делаешь?\n" +
      " ⁃ Тебя жду (смущаясь и краснея ответил я)\n" +
      " ⁃ Зачем? Ты, что? Следишь за мной?\n" +
      " ⁃ Я видел, как ты уходила из класса всего на пару минут, а возвращалась в таком виде будто тебя полгода не было.\n" +
      " ⁃ Дурак! Отстань от меня и не выдумывай глупости\n" +
      " ⁃ Постой! Пожалуйста! Я.. я правда видел. Тебя.. Я знаю. Знаю, что ты мне врешь.\n";*/
  constructor() { }
}
