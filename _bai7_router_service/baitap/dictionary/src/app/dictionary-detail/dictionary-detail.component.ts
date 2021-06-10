import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from '../service/dictionary-service.service';
import {ActivatedRoute} from '@angular/router';
import {IWord} from '../iword';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  wordComponent: IWord;

  constructor(private dictionaryService: DictionaryServiceService,
              private activatedRoute: ActivatedRoute) {
    let wordFromURL = this.activatedRoute.snapshot.params.word;
    console.log(wordFromURL);
    this.wordComponent = this.dictionaryService.findByWord(wordFromURL);
    console.log(this.wordComponent);
  }

  ngOnInit(): void {
  }


}
