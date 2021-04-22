import { ThrowStmt } from '@angular/compiler';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Dropdown } from 'primeng/dropdown';
import { League } from '../Models/League';
import { DatePipe } from '@angular/common';
import { BaumService } from './baum.service';
import { Fixture } from '../Models/Fixture';
import { MessageService } from 'primeng/api';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-baum',
  templateUrl: './baum.component.html',
  styleUrls: ['./baum.component.scss']
})
export class BaumComponent implements OnInit {
  leagues: League[];
  matches: Fixture[];
  selectedLeague: League;
  choosedDate: Date;
  constructor(private datePipe: DatePipe, private baumService: BaumService,private messageService: MessageService) {
    this.leagues = [
      
      { Id: 1, Name: 'Liga 1' },
      { Id: 2, Name: 'Premier League' },
      { Id: 3, Name: 'Bundesliga' },
      { Id: 4, Name: 'Serie A' },
      { Id: 5, Name: 'La Liga' }
    ];
  }
  ngOnInit() {
  }

  addSingle(i:number,type:string) {
    this.messageService.add({severity:type, summary:type, detail:'Has found '+ i +' entries'});
  } 

  searchFixtures() {
    this.datePipe.transform(this.choosedDate, "yyyy-MM-dd");
    this.baumService.searchFixtures(this.selectedLeague.Id, this.datePipe.transform(this.choosedDate, "yyyy-MM-dd")).subscribe((res) => {
      this.matches = res;
      if (res.length>0){
        this.addSingle(res.length,'success');
      }else{
        this.addSingle(res.length,'error');
      }
    });
  }
   
}

