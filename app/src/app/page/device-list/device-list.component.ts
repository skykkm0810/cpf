import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Device, deviceHeader, deviceFilter } from '../../interface/interface';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DeviceAddComponent} from '../../modal/device-add/device-add.component';
import { PhxChannelService } from 'src/app/service/phx-channel.service';
import { MatTab } from '@angular/material/tabs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements AfterViewInit {

  allComplete: boolean = false;
  DEVICES: Device[] = [];
  
  displayedColumns: string[] = deviceHeader;
  dataSource: MatTableDataSource<Device>;
  selection = new SelectionModel<Device>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  filter = deviceFilter
  CheckFilter : Device[] = [];
  filteredData : Device[] = [];

  constructor(
    public dialog: MatDialog,
    private phxChannel: PhxChannelService,
    private datepipe: DatePipe
  ) {
    this.dataSource = new MatTableDataSource(this.CheckFilter);
    phxChannel.Devices.subscribe( data => {
      this.CheckFilter = [];
      data.body.forEach(el => {
        // const _d = new Date(el.inserted);
        // el.inserted = datepipe.transform(_d, 'yyyy년 MM월 dd일');
        this.CheckFilter.push({ 
          id: el.id,
          name: el.name,
          centerId: el.centerId,
          location: el.location,
          status: el.status,
          type: el.type,
          inserted: el.inserted
        })

      });
      this.dataSource = new MatTableDataSource(this.CheckFilter);
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.phxChannel.gets("device", { body: 1 });
    console.log('hello');
  }
  
  addDevice( Device? : Device ): void {
    const dialogRef = this.dialog.open(DeviceAddComponent, {
      width: '40%',
    });
  }

  applyFilter(event: Event) { 
    
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if ( this.dataSource.paginator ) {
      this.dataSource.paginator.firstPage();
    }
    console.log(this.dataSource);
  }
  
  updateAllComplete() {
    this.allComplete = this.filter.subFilters != null && this.filter.subFilters.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.filter.subFilters == null) {
      return false;
    }
    return this.filter.subFilters.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.filter.subFilters == null) {
      return;
    }
    this.filter.subFilters.forEach(t => t.completed = completed);
  }
  checkFilter(filter){

    this.filteredData = [];
    let filterS = [];
    let filterT = [];
    let arrS = [];
    let arrT = [];
    for ( var i = 0; i < filter.subFilters.length; i++ ) {
      if ( filter.subFilters[i].completed == true ) {
        if ( i < 3 ) {
          arrS.push( filter.subFilters[i].name );
        } else {
          arrT.push( filter.subFilters[i].name );
        }
      }
    }
    if ( !arrS.length && !arrT.length ) {
      this.dataSource = new MatTableDataSource(this.DEVICES);
    } else {
      for ( var i = 0; i < 3; i++ ) {
        for ( var j = 0; j < this.CheckFilter.length; j++ ) {
          if ( this.CheckFilter[j].status == arrS[i] ) {
            filterS.push( this.CheckFilter[j] );
          }
          if ( this.CheckFilter[j].type == arrT[i] ) {
            filterT.push( this.CheckFilter[j] );
          }
        }
      }
      if ( arrT.length && arrS.length ) {
        this.filteredData = filterS.filter(x => filterT.includes(x));
      } else if ( arrT.length ) {
        this.filteredData = filterT;
      } else if ( arrS.length ) {
        this.filteredData = filterS;
      }
      console.log( filterS, filterT );
      this.dataSource = new MatTableDataSource(this.filteredData);
    }
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
    // 선택된 것과 데이터 row 개수가 같은지 확인 true false
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Device): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
   checkedNum(){
    var checkBoxes = document.querySelectorAll('td .mat-checkbox .mat-checkbox-input');
    var checkedBoxes = document.querySelectorAll('td .mat-checkbox .mat-checkbox-input:checked');
   }
}
