
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  // onDeleteId(value: number) {
  //   this.onDeleteCharacter(value);
  // }


  @Output()
  public onDeleteId:EventEmitter<string>=new EventEmitter();

  onDeleteCharacter(id?: string): void {
    //TODO: Emitir el ID del personaje
    if(!id) return;

    this.onDeleteId.emit(id);

  }

}
