import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import {ActivatedRoute} from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  dynamicForm: FormGroup;
  submitted = false;
  addItemData = [];
  editItem = {};

  constructor(private formBuilder: FormBuilder, private dataService: DataService, 
    private route: ActivatedRoute) {}

  ngOnInit() {
      this.dynamicForm = this.formBuilder.group({
          itemno: ['',Validators.required],
          name: ['',Validators.required],
          category: ['',Validators.required],
          cprice: ['',Validators.required],
          sprice: ['',Validators.required],
          quantity: ['',Validators.required]
      });

      this.route.paramMap.subscribe( param => {
        this.editItem = param["params"];
        if (Object.keys(this.editItem).length !== 0) {
        console.log('populating values' + JSON.stringify(this.editItem));
        this.dynamicForm.patchValue({
        itemno: this.editItem['itemno'],
        name: this.editItem['name'],
        category: this.editItem['category'],
        cprice: this.editItem['cprice'],
        sprice: this.editItem['sprice'],
        quantity: this.editItem['quantity'],
        });
      }
 });
}
 
  get f(){
    return this.dynamicForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    
    if(this.dynamicForm.invalid)
    {
      return;
    }
    console.log(this.dynamicForm.value);
    this.dataService.addItem(this.dynamicForm.value)
    .subscribe(data =>
    { alert('Item Added successfully');
  }); 
    this.dynamicForm.reset();
    this.submitted = false;
};


updateItem()
{
  this.submitted=false;
  const item = this.dynamicForm.value;
  console.log(this.dynamicForm.value);
  const itemIndex = this.dynamicForm.value.itemno;
  console.log(this.dynamicForm.value.itemno);
  this.dataService.updateItem(item, itemIndex).subscribe(data =>{
  alert('Item Updated successfully');
});
this.dynamicForm.reset();
};

}