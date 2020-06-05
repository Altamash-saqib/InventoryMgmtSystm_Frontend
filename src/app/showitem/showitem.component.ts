import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-showitem',
  templateUrl: './showitem.component.html',
  styleUrls: ['./showitem.component.css']
})
export class ShowitemComponent implements OnInit {

  itemList : any;

  constructor(private dataService: DataService, private router:Router,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.dataService.getItems()
  .subscribe(data =>{
    this.itemList = data;
  });
 
  }

  deleteItems(index:number)
  {
    this.dataService.deleteItems(index)
    .subscribe(data =>{
      this.itemList = this.itemList.filter(i => i!== index);
    })
  };

  
  EditDetails(item){
      this.router.navigate(['/additem',item]);
  }
    

}