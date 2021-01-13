import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ACCOUNTS, Account , Center } from '../../interface/interface';
import { MatDialog} from '@angular/material/dialog';
import { AccountAddComponent} from '../../modal/account-add/account-add.component';
import { CenterAddComponent} from '../../modal/center-add/center-add.component';
import { AccountUpdateComponent } from 'src/app/modal/account-update/account-update.component';
import { CenterUpdateComponent } from 'src/app/modal/center-update/center-update.component';
import { PhxChannelService } from 'src/app/service/phx-channel.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})



export class AdministratorComponent implements AfterViewInit {

  accountColumns: string[] =['idx','id','passward','name','contact','belong','authority','birthday','email']
  accountData: MatTableDataSource<Account>
  centerColumns: string[] =['idx','name','address','maxUser','manager','contact','email']
  centerData: MatTableDataSource<Center>

  CENTERS: Center[] = [];

  @ViewChild('pagnator1') paginator1: MatPaginator;
  @ViewChild('pagnator2') paginator2: MatPaginator;
  @ViewChild('sort1') sort1: MatSort;
  @ViewChild('sort2') sort2: MatSort;

  constructor(
    public dialog1:MatDialog,
    public dialog2:MatDialog,
    public dialog3:MatDialog,
    public dialog4:MatDialog,
    private phxChannel: PhxChannelService
  ) {
    phxChannel.Centers.subscribe( data => {
      this.CENTERS = [];
      data.forEach( e => {
        this.CENTERS.push({
          idx: e.id,
          contact: e.contact,
          maxUser: e.limited,
          address: e.address,
          manager: e.manager,
          name: e.name,
          email: e.email
        })
      });
      this.centerData = new MatTableDataSource(this.CENTERS);
    })
    
    this.accountData = new MatTableDataSource(ACCOUNTS);
    this.centerData = new MatTableDataSource(this.CENTERS);
  }

  ngAfterViewInit(): void {
    this.accountData.paginator = this.paginator1;
    this.centerData.paginator = this.paginator2;
    this.accountData.sort = this.sort1;
    this.centerData.sort = this.sort2;
    this.phxChannel.gets("center", { body: '' });
  }
  addAccount(){
    const dialogRef = this.dialog1.open(AccountAddComponent,{
      width:'40%', height:'70%',
    });
  }
  addCenter(){
    const dialogRef2 = this.dialog3.open(CenterAddComponent,{
      width:'40%',  height:'70%'
    });
    
  }
  editAccount(){
      var accountTable = document.getElementById('accountTable');
      var lastColumns = accountTable.getElementsByClassName('lastColumns')

    for(var i=0; i<lastColumns.length; i++){
      var hiddenButton = lastColumns[i].getElementsByClassName('addedButton');
      (hiddenButton[0] as HTMLElement).classList.remove('hidden');
      (hiddenButton[1] as HTMLElement).classList.remove('hidden');
    }
    var editButton = document.getElementsByClassName('editAccount')[0];
    var updateButton = document.getElementsByClassName('updateAccount')[0];
    editButton.classList.add('hidden')
    updateButton.classList.remove('hidden')
  }
  reviceAccount(){
    const reviceAccount = this.dialog2.open(AccountUpdateComponent,{
      width:'40%', height:'70%',
    });
  }
  reviceCenter( info ){
    const reviceCenter = this.dialog4.open(CenterUpdateComponent,{
      width:'40%', height:'70%', data: info
    });
  }
  editCenter(){
      var centerTable = document.getElementById('centerTable');
      var lastColumns = centerTable.getElementsByClassName('lastColumns')
    for(var i=0; i<lastColumns.length; i++){
      var hiddenButton = lastColumns[i].getElementsByClassName('addedButton');
      (hiddenButton[0] as HTMLElement).classList.remove('hidden');
      (hiddenButton[1] as HTMLElement).classList.remove('hidden');
    }
    var editButton = document.getElementsByClassName('editCenter')[0];
    var updateButton = document.getElementsByClassName('updateCenter')[0];
    editButton.classList.add('hidden')
    updateButton.classList.remove('hidden')
  }

  updateAccount(){
    if(confirm('적용하시겠습니까?')){
      var accountTable = document.getElementById('accountTable');
      var lastColumns = accountTable.getElementsByClassName('lastColumns')
      for(var i=0; i<lastColumns.length; i++){
        var hiddenButton = lastColumns[i].getElementsByClassName('addedButton');
        (hiddenButton[0] as HTMLElement).classList.add('hidden');
        (hiddenButton[1] as HTMLElement).classList.add('hidden');
      }
      var editButton = document.getElementsByClassName('editAccount')[0];
      var updateButton = document.getElementsByClassName('updateAccount')[0];
      updateButton.classList.add('hidden');
      editButton.classList.remove('hidden');
    }
  }
  updateCenter(){
    if(confirm('적용하시겠습니까?')){
      var cetnerTable = document.getElementById('centerTable');
      var lastColumns = cetnerTable.getElementsByClassName('lastColumns')
      for(var i=0; i<lastColumns.length; i++){
        var hiddenButton = lastColumns[i].getElementsByClassName('addedButton');
        (hiddenButton[0] as HTMLElement).classList.add('hidden');
        (hiddenButton[1] as HTMLElement).classList.add('hidden');
      }
      var editButton = document.getElementsByClassName('editCenter')[0];
      var updateButton = document.getElementsByClassName('updateCenter')[0];
      updateButton.classList.add('hidden');
      editButton.classList.remove('hidden');
    }
  }
  
  deleteCenter( d ){
    if(confirm('삭제하시겠습니까?')){
      this.phxChannel.del("center", { id: d.idx });
    }
  }
  deleteAccount( d ){
    if(confirm('삭제하시겠습니까?')){
      this.phxChannel.del("Account", { id: d.idx });
    }
  }

}
