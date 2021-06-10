import {Injectable} from '@angular/core';
import {IWord} from '../iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {

  wordList: IWord[] = [
    {
      word: 'router',
      mean: 'là thành phần dùng để điều hướng đến trang khác '
    },
    {
      word: 'service',
      mean: 'trong angular service dùng để tăng khả năng tái sử dụng code, call API, xử lý logic,..'
    },
    {
      word: 'ActiveRoute',
      mean: 'dùng để lấy tham số trên đường dẫn'
    },
    {
      word: 'router-outlet',
      mean: 'là 1 thẻ dùng để xác định vị trí để hiển thị component'
    },
  ];

  constructor() {
  }

  findAll(): IWord[]{
    return this.wordList;
  }
  findByWord(word: string): IWord{
    return this.wordList.find(wordObj => wordObj.word === word)
  }
}
