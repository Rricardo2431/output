import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'output';

onomatopeiaList: string[]= [];
// 5° je crée ma propriété de type array comme dis à l'énoncé

onReceiveNewOnomatopia(event: string): void {
 this.onomatopeiaList.push(event); 
 // 6) je rajoute avec push dans mon tableau à chaque click lorsque l'enfant appelle le parent
}

}
