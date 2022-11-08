import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string ='https://www.linkedin.com/in/lrrsouza/';
  cursoAngular:boolean = true;

  urlImagem = 'https://cdn.pixabay.com/photo/2018/06/14/22/22/ladybug-3475779_960_720.jpg';

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
