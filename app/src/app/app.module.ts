import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './layout/aside/aside.component';
import { TopComponent } from './layout/top/top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { CenterAComponent } from './page/center-a/center-a.component';
import { CenterBComponent } from './page/center-b/center-b.component';
import { DeviceListComponent } from './page/device-list/device-list.component';
import { SeniorListComponent } from './page/senior-list/senior-list.component';
import { ActivityListComponent } from './page/activity-list/activity-list.component';
import { WorkerListComponent } from './page/worker-list/worker-list.component';
import { NoticeListComponent } from './page/notice-list/notice-list.component';
import { TaskListComponent } from './page/task-list/task-list.component';
import { CctvListComponent } from './page/cctv-list/cctv-list.component';
import { DietaryComponent } from './page/dietary/dietary.component';
import { VideosComponent } from './page/videos/videos.component';
import { ChartsModule } from 'ng2-charts';
import { VideoDetailComponent } from './page/video-detail/video-detail.component';
import { NoticeAddComponent } from './page/notice-add/notice-add.component';
import { SeniorDetailComponent } from './page/senior-detail/senior-detail.component';
import { AttendanceComponent } from './page/attendance/attendance.component';
import { AttendantsComponent } from './page/attendants/attendants.component';
import { ScheduleComponent } from './page/schedule/schedule.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, DatePipe } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { PhotobookComponent } from './page/photobook/photobook.component';
import { TaskAddComponent } from './page/task-add/task-add.component';
import { SeniorAddComponent } from './modal/senior-add/senior-add.component';
import { SeniorUpdateComponent } from './modal/senior-update/senior-update.component';
import { CctvAddComponent } from './modal/cctv-add/cctv-add.component';
import { CctvDetailComponent } from './page/cctv-detail/cctv-detail.component';
import { CctvUpdateComponent } from './modal/cctv-update/cctv-update.component';
import { SeniorContactComponent } from './modal/senior-contact/senior-contact.component';
import { DeviceAddComponent } from './modal/device-add/device-add.component';
import { DeviceUpdateComponent } from './modal/device-update/device-update.component';
import { WorkerAddComponent } from './modal/worker-add/worker-add.component';
import { ActivityAddComponent } from './modal/activity-add/activity-add.component';
import { PhotoAddComponent } from './modal/photo-add/photo-add.component';
import { NoticeDetailComponent } from './page/notice-detail/notice-detail.component';
import { EmergencyComponent } from './page/emergency/emergency.component';
import { ActivityDetailComponent } from './modal/activity-detail/activity-detail.component';
import { VideosAddComponent } from './modal/videos-add/videos-add.component';
import { PhotoUpdateComponent } from './modal/photo-update/photo-update.component';
import { CenterAddComponent } from './modal/center-add/center-add.component';
import { CenterUpdateComponent } from './modal/center-update/center-update.component';
import { LoginComponent } from './layout/login/login.component';
import { RequstComponent } from './page/requst/requst.component';
import { EventListComponent } from './page/event-list/event-list.component';
import { AdministratorComponent } from './page/administrator/administrator.component';
import { AccountAddComponent } from './modal/account-add/account-add.component';
import { AccountUpdateComponent } from './modal/account-update/account-update.component';
import { MypageComponent } from './page/mypage/mypage.component';
import { DietaryAddComponent } from './modal/dietary-add/dietary-add.component';
import { HttpClientModule } from '@angular/common/http';
import { DietaryPhotoComponent } from './page/dietary-photo/dietary-photo.component';
import { DietaryPhotoAddComponent } from './modal/dietary-photo-add/dietary-photo-add.component';
import { PasswordChangeComponent } from './modal/password-change/password-change.component';
import { AttendantsAddComponent } from './modal/attendants-add/attendants-add.component';
import { DietaryPhotoUpdateComponent } from './modal/dietary-photo-update/dietary-photo-update.component';
import { VideosUpdateComponent } from './modal/videos-update/videos-update.component';
import { WorkerUpdateComponent } from './modal/worker-update/worker-update.component';
import { ActivityUpdateComponent } from './modal/activity-update/activity-update.component';
import { ContactFamilyComponent } from './modal/contact-family/contact-family.component';
import { EmergencySMSComponent } from './modal/emergency-sms/emergency-sms.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    TopComponent,
    DashboardComponent,
    CenterAComponent,
    CenterBComponent,
    DeviceListComponent,
    SeniorListComponent,
    ActivityListComponent,
    WorkerListComponent,
    NoticeListComponent,
    TaskListComponent,
    CctvListComponent,
    DietaryComponent,
    VideosComponent,
    VideoDetailComponent,
    NoticeAddComponent,
    SeniorDetailComponent,
    AttendanceComponent,
    AttendantsComponent,
    ScheduleComponent,
    PhotobookComponent,
    TaskAddComponent,
    SeniorAddComponent,
    SeniorUpdateComponent,
    CctvAddComponent,
    CctvDetailComponent,
    CctvUpdateComponent,
    SeniorContactComponent,
    DeviceAddComponent,
    DeviceUpdateComponent,
    WorkerAddComponent,
    ActivityAddComponent,
    ActivityUpdateComponent,
    PhotoAddComponent,
    NoticeDetailComponent,
    EmergencyComponent,
    ActivityDetailComponent,
    VideosAddComponent,
    PhotoUpdateComponent,
    CenterAddComponent,
    CenterUpdateComponent,
    LoginComponent,
    RequstComponent,
    EventListComponent,
    AdministratorComponent,
    AccountAddComponent,
    AccountUpdateComponent,
    MypageComponent,
    DietaryAddComponent,
    DietaryPhotoComponent,
    DietaryPhotoAddComponent,
    PasswordChangeComponent,
    AttendantsAddComponent,
    DietaryPhotoUpdateComponent,
    VideosUpdateComponent,
    WorkerUpdateComponent,
    ContactFamilyComponent,
    EmergencySMSComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatRippleModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ChartsModule,
    NgbModule,
    CommonModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
