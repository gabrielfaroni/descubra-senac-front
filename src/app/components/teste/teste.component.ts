import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})


export class TesteComponent {
  questao2: Boolean = false;
  questao3: Boolean = false;
  questao4: Boolean = false;
  questao5: Boolean = false;
  questao6: Boolean = false;
  questao7: Boolean = false;
  questao8: Boolean = false;
  questao9: Boolean = false;
  questao10: Boolean = false;
  questao11: Boolean = false;



  constructor() { }


  acaoSim(questao: number): void {

    switch (questao) {

      case 1:
        this.questao2 = true
        break;

      case 2:
        this.questao4 = true
        this.questao3 = false
        break;
      case 3:
        // informatica basica
        break;















      default:
        break;





    }

    this.questao2 = true;
  }

  acaoNao(questao: number): void {

    switch (questao) {

      case 1:
        this.questao2 = true
        break;

      case 2:
        this.questao3 = true
        this.questao4 = false
        break;
      case 3:
        this.questao5 = true
        break;









      default:
        break;


    }

  }















}
