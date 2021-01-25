import {Component,  OnInit,
  AfterViewInit,
  ViewChild,
  NgModule} from '@angular/core';
import {ChartDataSets,
  ChartOptions
} from 'chart.js';
import {
  Color,
  Label
} from 'ng2-charts';
import {
  REQUESTS,
  Request
} from '../../interface/interface';
import {
  MatPaginator
} from '@angular/material/paginator';
import {
  MatSort
} from '@angular/material/sort';
import {
  MatTableDataSource
} from '@angular/material/table';
import {
  log,
  LOG
} from '../../interface/interface';
import {
  weather,
  WEATHER
} from '../../interface/interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WeatherService } from '../../service/weather.service';
import { SocketioService } from 'src/app/service/socketio.service';
export interface covid19 {
  id:number;
  date:string;
  new?:number;
  updated?:string;
}
export const COVIDDATA : covid19[] =[];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  requestColumns: string[] = ["id", "progress", "from", "desc", "who"];
  requestData: MatTableDataSource < Request > ;
  logColumns: string[] = ["id", 'name', 'type', 'center', 'time', 'desc'];
  logData: MatTableDataSource < log > ;
  weatherColumns: string[] = ["id", 'center', 'todayT', 'todayW', 'tmrrwT', 'tmrrwW'];
  weatherData: MatTableDataSource < weather > ;
  wheaherdata : any;
  
  covidColumns: string[] = ["id", 'date', 'new', 'updated'];
  covidData: MatTableDataSource < covid19 > ;
  @ViewChild('pagnator1') paginator1: MatPaginator;
  @ViewChild('pagnator2') paginator2: MatPaginator;
  @ViewChild('pagnator3') paginator3: MatPaginator;
  @ViewChild('pagnator4') paginator4: MatPaginator;
  @ViewChild('sort1') sort1: MatSort;
  @ViewChild('sort2') sort2: MatSort;
  @ViewChild('sort3') sort3: MatSort;
  @ViewChild('sort4') sort4: MatSort;
  wheatherApi :any
  constructor(
    private nodeio: SocketioService
  ) {
    this.requestData = new MatTableDataSource(REQUESTS);
    this.logData = new MatTableDataSource(LOG);
    this.weatherData = new MatTableDataSource(WEATHER);
    this.covidData = new MatTableDataSource(COVIDDATA);
    nodeio.Covid.subscribe(data => {
      // console.log(data)
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(data,"text/xml");
      var total1 = xmlDoc.getElementsByTagName('decideCnt')[0].innerHTML;
      var total2 = xmlDoc.getElementsByTagName('decideCnt')[1].innerHTML;
      var newDe = Number(total1) - Number(total2)
      var date = xmlDoc.getElementsByTagName('createDt')[0].innerHTML;
      var today = date.substr(0, 10 )
      var upDate = date.substr(0,16)
      var pushdata :any;
      pushdata = {id:1, date: today, new:newDe, updated: upDate }
      COVIDDATA.push(pushdata)
      this.covidData = new MatTableDataSource(COVIDDATA);
    })
    nodeio.Weather.subscribe(data => {
      console.log(data)
      // console.log(JSON.parse(data).response.body.items.item);
      // REH - 습도 , T1H - 기온 , TMN 아침 최저 , TMX 낮 최고 , POP 강수 확률 


    })
  }
  ngAfterViewInit(): void {
    this.requestData.paginator = this.paginator1;
    this.requestData.sort = this.sort1;
    this.logData.paginator = this.paginator2;
    this.logData.sort = this.sort2;
    this.weatherData.paginator = this.paginator3;
    this.weatherData.sort = this.sort3;
    this.covidData.paginator = this.paginator4;
    this.covidData.sort = this.sort4;
    this.nodeio.weatherCall(80,96);
    this.nodeio.covidCall();
  }

  public lineChartData: ChartDataSets[] = [{
      data: [65, 59, 80, 81, 56, 55, 40, 63, 40, 113, 102, 56],
      label: '녹양주간보호센터',
      fill: false
    },
    {
      data: [60, 19, 85, 71, 126, 105, 110, 56, 19, 83, 102, 86],
      label: '요셉주간보호센터',
      fill: false
    },
  ];
  public lineChartLabels: Label[] = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
  public lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartColors: Color[] = []
  public lineChartLegend = true;

}
