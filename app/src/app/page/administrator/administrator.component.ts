import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ACCOUNTS, Account,CENTERS , Center } from '../../interface/interface';
@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements AfterViewInit {
  accountColumns: string[] =['idx','id','passward','name','contact','authority','birthday','email']
  accountData: MatTableDataSource<Account>
  centerColumns: string[] =['idx','name','address','maxUser','manager','contact','email']
  centerData: MatTableDataSource<Center>
  @ViewChild('pagnator1') paginator1: MatPaginator;
  @ViewChild('pagnator2') paginator2: MatPaginator;
  @ViewChild('sort1') sort1: MatSort;
  @ViewChild('sort2') sort2: MatSort;
  constructor(
  ) { 
    this.accountData = new MatTableDataSource(ACCOUNTS);
    this.centerData = new MatTableDataSource(CENTERS);
  }

  ngAfterViewInit(): void {
    this.accountData.paginator = this.paginator1;
    this.centerData.paginator = this.paginator2;
    this.accountData.sort = this.sort1;
    this.centerData.sort = this.sort2;
  }
  addAccount(){
    var accountTable = document.getElementById('accountTable');
    var lastColumns = accountTable.getElementsByClassName('lastColumns')
    for(var i=0; i<lastColumns.length; i++){
      var hiddenButton = lastColumns[i].getElementsByClassName('addedButton')
      var show = (hiddenValue) => hiddenValue.style.display = 'none';
    }
  }
  addCenter(){

  }
}
