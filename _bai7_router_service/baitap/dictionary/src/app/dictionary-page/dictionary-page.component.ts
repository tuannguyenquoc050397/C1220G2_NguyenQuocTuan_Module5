import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from '../service/dictionary-service.service';
import {IWord} from '../iword';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  wordList: IWord[];
  constructor(private dictionaryService: DictionaryServiceService) { }

  ngOnInit(): void {
   this.wordList = this.dictionaryService.findAll();
  }

}
