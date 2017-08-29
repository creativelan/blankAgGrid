import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GridOptions } from "ag-grid/main";
//import {RedComponent} from '../../components/red/red';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  gridOptions: GridOptions;
  columnDefs: any[]
  rowData: any[];

  constructor(public navCtrl: NavController) {
    this.gridOptions = <GridOptions>{};

    this.columnDefs = [
      { headerName: "Make", field: "make", width: 100 },
      { headerName: "Model", field: "model", width: 100},// cellRendererFramework: RedComponent },
      { headerName: "Price", field: "price", width: 100},
      //{ headerName: "Year", field: "year" }
    ];

    this.rowData = [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Chevrolet", model: "Wagon", price: 93000, year: 1957 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 }
    ];
  }
  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }

  selectAllRows() {
    this.gridOptions.api.selectAll();
  }

}
