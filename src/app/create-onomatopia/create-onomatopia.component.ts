import { Component,EventEmitter,Output } from '@angular/core';
// 1° tout d'abord, j'ai rajouté l'EventEmitter et l'Output dans l'import ci-dessus) 

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.scss']
})
export class CreateOnomatopiaComponent {

newOnomatopia: string ="";
// 2° je crée ma propriété de type string comme dis à l'énoncé

  @Output() sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();
// 3° je crée ma propriété de type EventEmitter ( la boite pour transporter ma fonction  ci-dessous vers le parent)

createOnomatopia(): void {
  this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  // 4° je crée ma méthode pour envoyer mon output au composant parent
}



}
