import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl) // 回傳rxjs的observable對象
               .toPromise()  // 將其轉回Promise對象
               .then(response => response.json().data as Hero[]) // Extracting the data in the then callback
               .catch(this.handleError); // catch服務器的失敗訊息
  }

  // 我們必須預料到http會請求失敗,因為有太多無法控制的原因可能導致他出現各種錯誤
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
    // 此範例將錯誤記到控制台中, 在真實世界中應該用代碼對錯誤進行處理
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }
}
