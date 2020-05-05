import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @ouput is so the parent component can listen to this event

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
  }
  onSave(){
    this.dataStorageService.storeRecipes();
}

onFetch(){
  this.dataStorageService.fetchRecipes().subscribe();
}

}
