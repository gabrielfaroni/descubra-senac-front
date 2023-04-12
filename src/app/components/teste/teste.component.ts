import { Component } from '@angular/core';
import { Router } from '@angular/router';

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



  constructor(private router: Router) { }


  acaoSim(questao: number): void {

    switch (questao) {

      case 1:
        this.questao2 = true
        break;

      case 2:
        this.questao4 = true

        break;
      case 3:
        this.router.navigateByUrl(`cursos`)
      // informatica basica
        break;
      case 4:
        this.router.navigateByUrl(`cursos`)
        break;
      case 5:
        this.questao7 = true
        break;
      case 6:
        // Edição de vídeo  para redes sociais
        break;
      case 7:
        this.questao10 = true
        break;
      case 8:
        // Power BI
        break;
      case 9:
        //Programador Web (lógica de programação)
        break;
      case 10:
        //Programador Web (lógica de programação)
        break;
      case 11:
        // Excel básico e avançado
        
        break;

      default:
        break;

    }


  }

  acaoNao(questao: number): void {

    switch (questao) {

      case 1:
        this.questao2 = true
        break;

      case 2:
        this.questao3 = true
        break;
      case 3:
        this.questao5 = true

        break;
      case 4:
        this.questao3 = true

        break;
      case 5:
        this.questao6 = true
        break;
      case 6:
        this.questao11 = true
        break;
      case 7:
        this.questao6 = true

        break;
      case 8:
        this.questao9 = true
        
        break;
      case 9:
        // Excel avançado, Excel básico, BI
        break;
      case 10:
        // Excel avançado, Excel básico, BI
        break;
      case 11:
        

      // AutoCAD2D
        
        
        break;

      default:
        break;


    }

  }

}
