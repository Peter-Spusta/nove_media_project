import { Component, OnInit, ViewChild } from '@angular/core';
import { questions } from '../constants/questions';
import { Router, ActivatedRoute } from '@angular/router';
//import { MatExpansionPanel } from '@angular/material';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  //@ViewChild('expansionPanel') expansionPanel: MatExpansionPanel;
  questions:any;
  question:any;
  questionIndex:number = 0;
  questionCnt:number;
  answered:boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log(questions);
    this.questions = questions;
    this.questionCnt = questions.length-1;
    this.question = questions[this.questionIndex];
    console.log(questions.length)
  }

  nextQuestion() {
    if (this.questionIndex < this.questionCnt) {
      this.question = questions[++this.questionIndex];
    }
    this.answered = false;
  }

  answerChoosed() {
    this.answered = true;
  }

}
