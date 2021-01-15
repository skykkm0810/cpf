import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TAGS } from './interface/interface';
import { ActivityListComponent } from './page/activity-list/activity-list.component';
import { CctvListComponent } from './page/cctv-list/cctv-list.component';
import { CenterAComponent } from './page/center-a/center-a.component';
import { CenterBComponent } from './page/center-b/center-b.component';
import { DeviceListComponent } from './page/device-list/device-list.component';
import { NoticeListComponent } from './page/notice-list/notice-list.component';
import { SeniorListComponent } from './page/senior-list/senior-list.component';
import { TaskListComponent } from './page/task-list/task-list.component';
import { WorkerListComponent } from './page/worker-list/worker-list.component';
import { DietaryComponent } from './page/dietary/dietary.component';
import { VideosComponent } from './page/videos/videos.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { VideoDetailComponent } from './page/video-detail/video-detail.component';
import { NoticeAddComponent } from './page/notice-add/notice-add.component';
import { SeniorDetailComponent } from './page/senior-detail/senior-detail.component';
import { AttendanceComponent } from './page/attendance/attendance.component';
import { AttendantsComponent } from './page/attendants/attendants.component';
import { ScheduleComponent } from './page/schedule/schedule.component';
import { PhotobookComponent } from './page/photobook/photobook.component';
import { TaskAddComponent } from './page/task-add/task-add.component';
import { CctvDetailComponent } from './page/cctv-detail/cctv-detail.component';
import { NoticeDetailComponent } from './page/notice-detail/notice-detail.component';
import { EmergencyComponent } from './page/emergency/emergency.component';
import { LoginComponent } from './layout/login/login.component';
import { EventListComponent } from './page/event-list/event-list.component';
import { RequstComponent } from './page/requst/requst.component';
import { AdministratorComponent } from './page/administrator/administrator.component';
import { MypageComponent } from './page/mypage/mypage.component';
import { DietaryPhotoComponent } from './page/dietary-photo/dietary-photo.component';
import { DietaryPhotoAddComponent } from './modal/dietary-photo-add/dietary-photo-add.component';

const routes: Routes = [
  { path: TAGS.DASHBOARD, component: DashboardComponent },
  { path: TAGS.DEVICELIST, component: DeviceListComponent },
  { path: TAGS.SENIORLIST, component: SeniorListComponent },
  { path: TAGS.ACTIVITYLIST, component: ActivityListComponent },
  { path: TAGS.WORKERLIST, component: WorkerListComponent },
  { path: TAGS.TASKLIST, component: TaskListComponent },
  { path: TAGS.CCTVLIST, component: CctvListComponent },
  { path: TAGS.NOTICELIST, component: NoticeListComponent },
  { path: TAGS.CENTERA, component: CenterAComponent },
  { path: TAGS.CENTERB, component: CenterBComponent },
  { path: TAGS.DIETARYS, component: DietaryComponent },
  { path: TAGS.VIDEOS, component: VideosComponent },
  { path: TAGS.VDETAIL, component: VideoDetailComponent },
  { path: TAGS.NOTICEADD, component: NoticeAddComponent },
  { path: TAGS.SENIORDETAIL, component: SeniorDetailComponent },
  { path: TAGS.ATTENDANCE, component: AttendanceComponent },
  { path: TAGS.ATTENDANTS, component: AttendantsComponent },
  { path: TAGS.SCHEDULE, component: ScheduleComponent },
  { path: TAGS.PHOTOBOOK, component: PhotobookComponent },
  { path: TAGS.TASKADD, component: TaskAddComponent },
  { path: TAGS.CCTVDETAIL, component: CctvDetailComponent },
  { path: TAGS.NOTICEDETAIL, component: NoticeDetailComponent },
  { path: TAGS.EMERGENCY, component: EmergencyComponent },
  { path: TAGS.LOGIN, component: LoginComponent },
  { path: TAGS.EVENT, component: EventListComponent },
  { path: TAGS.REQUEST, component: RequstComponent },
  { path: TAGS.ADMINISTRATOR, component: AdministratorComponent },
  { path: TAGS.MYPAGE, component: MypageComponent },
  { path: TAGS.DIETARYPHOTO, component: DietaryPhotoComponent },
  { path: TAGS.PRAC, component: DietaryPhotoAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
