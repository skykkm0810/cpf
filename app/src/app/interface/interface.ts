import { ThemePalette } from "@angular/material/core"

export const TAGS : Record<string, string> = {
  DASHBOARD: '/',
  DEVICELIST: 'devistList',
  SENIORLIST: 'seniorList',
  SENIORPRESENTLIST: 'seniorPresentList',
  ACTIVITYLIST: 'activityList',
  WORKERLIST: 'workerList',
  TASKLIST: 'taskList',
  CCTVLIST: 'cctvList',
  NOTICELIST: 'noticeList',
  CENTERA: 'centerA',
  CENTERB: 'centerB',
} 

export interface AsideItem {
  path: string;
  name: string;
  subItem?: AsideItem[];
}

export const ASIDELISTS: AsideItem[] = [
  {
    path: TAGS.DASHBOARD,
    name: '대시보드'
  },
  { 
    path: '',
    name: '시설 관리',
    subItem: [
      {
        path: TAGS.CENTERA,
        name: '녹양주간보호센터'
      },
      { 
        path: TAGS.CENTERB,
        name: '요셉주간보호센터'
      },
    ]
  },
  { 
    path: '', 
    name: '어르신 정보',
    subItem: [
      {
        path: TAGS.SENIORLIST,
        name: '어르신 목록'
      },
      {
        path: TAGS.SENIORPRESENTLIST,
        name: '출석부'
      },
    ] 
  },
  { 
    path: TAGS.CCTVLIST,
    name: 'CCTV 관리' 
  },
  { 
    path: TAGS.DEVICELIST,
    name: '돌봄 기기' 
  },
  { 
    path: TAGS.WORKERLIST, 
    name: '인력 관리' 
  },
  { 
    path: TAGS.ACTIVITYLIST, 
    name: '활동 관리' 
  },
  { 
    path: TAGS.TASKLIST, 
    name: '업무 관리' 
  },
]

export interface Filter {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subFilters?: Filter[];
}

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
  colors: string;
};

export interface Device {
  id: number;
  type: string;
  name: string;
  location?: string;
  status: string;
  color?: string;
  center?: string;
  inserted?: string;
};

export const deviceHeader: string[] = ['id', 'type', 'name', 'center', 'location', 'inserted', 'status'];

export const deviceFilter: Filter = {
  name: '전체',
  completed: false,
  color: 'primary',
  subFilters: [
    {name: '정상', completed: false, color: 'primary'},
    {name: '이상', completed: false, color: 'primary'},
    {name: '수리 중', completed: false, color: 'primary'},
    {name: '로봇', completed: false, color: 'primary'},
    {name: '센서류', completed: false, color: 'primary'},
    {name: '스마트 스피커', completed: false, color: 'primary'},
  ]
}

export const DEVICES: Device[] = [
  { id: 1, name: 'RB-01', type: '로봇', center: '시설A', inserted: '2020.10.15', location: '활동실', status: '정상', color: 'blue'},
  { id: 2, name: 'ST-04', type: '센서', center: '시설B', inserted: '2020.11.25', location: '주방', status: '정상', color: 'blue'},
  { id: 3, name: 'ST-01', type: '센서', center: '시설C', inserted: '2020.11.16', location: '활동실', status: '정상', color: 'blue'},
  { id: 4, name: 'RB-01', type: '로봇', center: '시설B', inserted: '2020.10.05', location: '휴게실', status: '이상', color: 'red'},
  { id: 5, name: 'ST-02', type: '센서', center: '시설C', inserted: '2020.10.15', location: '출입구', status: '수리', color: 'orange'},
]

export interface Senior {
  id : number;
  photo : string;
  name : string;
  gender : string;
  age : number;
  desc : string;
  latest : string;
  center : string;
  temp? : string;
  guardian? : string;
}

export const SENIORS: Senior[] = [
  { id: 1, photo: '1.jpg', name: '김모모', gender: '남', age: 74, temp: '36.5',  desc: '', guardian: '무', latest: '어제', center: '시설A'},
  { id: 2, photo: '2.jpg', name: '윤모모', gender: '남', age: 68, temp: '36.5',  desc: '장애 5급', guardian: '무', latest: '어제', center: '시설A'},
  { id: 3, photo: '3.jpg', name: '박모모', gender: '여', age: 64, temp: '36.5',  desc: '', guardian: '무', latest: '어제', center: '시설B'},
  { id: 4, photo: '4.jpg', name: '임모모', gender: '남', age: 72, temp: '36.5',  desc: '휠체어', guardian: '무', latest: '어제', center: '시설A'},
  { id: 5, photo: '5.jpg', name: '정모모', gender: '남', age: 80, temp: '36.5',  desc: '', guardian: '무', latest: '어제', center: '시설A'},
  { id: 6, photo: '6.jpg', name: '설모모', gender: '남', age: 78, temp: '36.5',  desc: '', guardian: '무', latest: '어제', center: '시설B'},
  { id: 7, photo: '7.jpg', name: '이모모', gender: '여', age: 71, temp: '36.5',  desc: '', guardian: '무', latest: '어제', center: '시설A'},
  { id: 8, photo: '8.jpg', name: '김모모', gender: '남', age: 66, temp: '36.5',  desc: '', guardian: '무', latest: '3일 전', center: '시설B'},
  { id: 9, photo: '1.jpg', name: '최모모', gender: '여', age: 61, temp: '36.5',  desc: '', guardian: '무', latest: '5일 전', center: '시설B'},
  { id: 10, photo: '2.jpg', name: '진모모', gender: '남', age: 63, temp: '36.5',  desc: '', guardian: '무', latest: '지난 달', center: '시설B'},
]

export interface Worker {
  task : string;
  name : string;
  contact : string;
  center : string;
  region : string;
  date : string;
}

export const workerHeader: string[] = ['task', 'name', 'contact', 'center', 'region', 'date'];

export const workerFilter: Filter = {
  name: '전체',
  completed: false,
  color: 'primary',
  subFilters: [
    {name: '보건', completed: false, color: 'primary'},
    {name: '레크리에이터', completed: false, color: 'primary'},
    {name: '자원봉사자', completed: false, color: 'primary'},
    {name: '노래교실', completed: false, color: 'primary'},
    {name: '볼링', completed: false, color: 'primary'},
    {name: '요양보호사', completed: false, color: 'primary'},
  ]
}

export const WORKERS: Worker[] = [
  { name : '윤모모', contact : '010-0000-0000', center : '시설A', region : '경기도', date: '10/15', task : '보건' },
  { name : '김모모', contact : '010-0000-0000', center : '시설B', region : '김천', date: '10/17', task : '레크리에이터' },
  { name : '허모모', contact : '010-0000-0000', center : '시설C', region : '경기도', date: '', task : '자원봉사자' },
  { name : '서모모', contact : '010-0000-0000', center : '시설A', region : '김천', date: '10/22', task : '자원봉사자' },
  { name : '윤모모', contact : '010-0000-0000', center : '시설B', region : '경기도', date: '10/26', task : '노래교실' },
  { name : '강모모', contact : '010-0000-0000', center : '시설C', region : '김천', date: '', task : '볼링' },
  { name : '고모모', contact : '010-0000-0000', center : '시설A', region : '경기도', date: '11/05', task : '자원봉사자' },
  { name : '하모모', contact : '010-0000-0000', center : '시설B', region : '김천', date: '11/17', task : '보건' },
  { name : '정모모', contact : '010-0000-0000', center : '시설C', region : '경기도', date: '11/20', task : '자원봉사자' },
  { name : '이모모', contact : '010-0000-0000', center : '시설A', region : '김천', date: '', task : '볼링' },
]

export interface Activity {
  task : string;
  teacher : string;
  contact : string;
  center : string;
  color : string;
  progress : string;
  datetime : string;
  photo : string;
}

export const activityHeader: string[] = ['task', 'teacher', 'contact', 'center', 'progress', 'datetime'];

export const activityFilter: Filter = {
  name: '전체',
  completed: false,
  color: 'primary',
  subFilters: [
    {name: '예정', completed: false, color: 'primary'},
    {name: '진행중', completed: false, color: 'primary'},
    {name: '완료', completed: false, color: 'primary'},
    {name: '취소', completed: false, color: 'primary'},
  ]
}

export const ACTIVITIES: Activity[] = [
  { teacher : '김모모', progress: '예정', center : '시설A', contact: '010-0000-0000', photo: '1.jpg', datetime: '2020.10.15 14:13', task : '스트레칭', color: 'info'},
  { teacher : '윤모모', progress: '진행', center : '시설B', contact: '010-0000-0000', photo: '2.jpg', datetime: '2020.10.17 10:15', task : '노래교실', color: 'warning'},
  { teacher : '박모모', progress: '예정', center : '시설C', contact: '010-0000-0000', photo: '3.jpg', datetime: '2020.10.19 16:24', task : '실버스포츠', color: 'info'},
  { teacher : '임모모', progress: '완료', center : '시설A', contact: '010-0000-0000', photo: '4.jpg', datetime: '2020.10.22 14:13', task : '댄스스포츠', color: 'success'},
  { teacher : '정모모', progress: '완료', center : '시설B', contact: '010-0000-0000', photo: '5.jpg', datetime: '2020.10.26 14:13', task : '볼링', color: 'success'},
  { teacher : '설모모', progress: '취소', center : '시설C', contact: '010-0000-0000', photo: '6.jpg', datetime: '2020.11.01 14:13', task : '볼링', color: 'danger'},
  { teacher : '이모모', progress: '예정', center : '시설A', contact: '010-0000-0000', photo: '7.jpg', datetime: '2020.11.05 14:13', task : '스트레칭', color: 'info'},
  { teacher : '김모모', progress: '진행', center : '시설B', contact: '010-0000-0000', photo: '8.jpg', datetime: '2020.11.17 14:13', task : '노래교실', color: 'warning'},
  { teacher : '최모모', progress: '완료', center : '시설C', contact: '010-0000-0000', photo: '1.jpg', datetime: '2020.11.20 14:13', task : '댄스스포츠', color: 'success'},
  { teacher : '진모모', progress: '예정', center : '시설A', contact: '010-0000-0000', photo: '2.jpg', datetime: '2020.12.01 14:13', task : '볼링', color: 'info'},
]

export interface Task {
  id : string;
  name : string;
  event : string;
  center : string;
  present : number;
  datetime : string;
}

export const taskHeader: string[] = ['id', 'name', 'event', 'center', 'present', 'datetime'];

export const taskFilter: Filter = {
  name: '전체',
  completed: false,
  color: 'primary',
  subFilters: [
    {name: '화재', completed: false, color: 'primary'},
    {name: '낙상', completed: false, color: 'primary'},
    {name: '배화', completed: false, color: 'primary'},
    {name: '체온이상자', completed: false, color: 'primary'},
    {name: '무단 결석자', completed: false, color: 'primary'},
    {name: '기타 사건사고', completed: false, color: 'primary'},
  ]
}

export const TASKS: Task[] = [
  { id : '#REQ001', center : '시설A', present: 40, datetime: '2020.10.15 14:13', name : '김모모', event: '낙상'},
  { id : '#REQ002', center : '시설B', present: 40, datetime: '2020.10.17 10:15', name : '윤모모', event: '무'},
  { id : '#REQ003', center : '시설C', present: 40, datetime: '2020.10.19 16:24', name : '박모모', event: '무'},
  { id : '#REQ004', center : '시설A', present: 40, datetime: '2020.10.22 14:13', name : '임모모', event: '기타 사건사고'},
  { id : '#REQ005', center : '시설B', present: 40, datetime: '2020.10.26 14:13', name : '정모모', event: '화재'},
  { id : '#REQ006', center : '시설C', present: 40, datetime: '2020.11.01 14:13', name : '설모모', event: '낙상'},
  { id : '#REQ007', center : '시설A', present: 40, datetime: '2020.11.05 14:13', name : '이모모', event: '무'},
  { id : '#REQ008', center : '시설B', present: 40, datetime: '2020.11.17 14:13', name : '김모모', event: '무'},
  { id : '#REQ009', center : '시설C', present: 40, datetime: '2020.11.20 14:13', name : '최모모', event: '무'},
  { id : '#REQ0010', center : '시설A', present: 39, datetime: '2020.12.01 14:13', name : '진모모', event: '무단 결석'},
]

export interface Request {
  id : number;
  color : string;
  progress : string;
  from : string;
  desc : string;
  who : string;
}

export const REQUESTS: Request[] = [
  { id: 1, color: 'info', progress: '진행 중', from: '관리자', desc: '택시 호출', who: '김모모'},
  { id: 2, color: 'info', progress: '진행 중', from: '관리자', desc: '병원 동행', who: '윤모모'},
  { id: 3, color: 'danger', progress: '취소', from: '로봇', desc: '노래 검색', who: '박모모'},
  { id: 4, color: 'success', progress: '완료', from: '로봇', desc: '병원 동행', who: '임모모'},
  { id: 5, color: 'info', progress: '진행 중', from: '로봇', desc: '택시 호출', who: '정모모'},
  { id: 6, color: 'success', progress: '완료', from: '앱', desc: '택시 호출', who: '설모모'},
  { id: 7, color: 'success', progress: '완료', from: '로봇', desc: '노래 검색', who: '이모모'},
  { id: 8, color: 'danger', progress: '취소', from: '관리자', desc: '병원 동행', who: '김모모'},
  { id: 9, color: 'success', progress: '완료', from: '앱', desc: '관공서 서비스', who: '최모모'},
  { id: 10, color: 'success', progress: '완료', from: '관리자', desc: '관공서 서비스', who: '진모모'},
]