import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  tasks: any = []
  updateData: any
  res: any
  addData(data: any) {
    if (data.value != "") {
      this.tasks.push({ id: this.tasks.length, des: data.value })
      data.value = ""
    }


  }
  delete(id: number) {
    this.tasks = this.tasks.filter((item: { id: number }) => item.id != id)
    console.log(this.tasks);
    
  }

  removeAll() {
    this.tasks = []
  }
  update(data: any, id: number) {
    this.updateData = this.tasks.find((val: any) => val.id == id)
    data.value = this.updateData.des
  }
  saveUpdate(data: any) {
    var id = this.updateData.id;
    this.tasks[id].des = data.value;
    this.updateData = ""
    data.value = ""
  }
}


