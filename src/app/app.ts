import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuModule, TableModule, CheckboxModule, ButtonModule, InputTextModule, PanelMenuModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  protected readonly title = signal('angular-20-app');

  tabItems = [
    { label: 'Tổng Quan' },
    { label: 'Tài khoản' },
    { label: 'Nhóm tài khoản nghi vấn' },
    { label: 'Tài khoản bị xử phạt vi phạm hành chính' },
  ];

  sidebarItems = [
    {
      label: 'Tổng quan',
      icon: 'pi pi-chart-pie',
    },
    {
      label: 'Quản lý thông tin',
      icon: 'pi pi-folder',
      items: [
        { label: 'Tài khoản và Nhóm tài khoản', icon: 'pi pi-users', styleClass: 'active' },
        { label: 'Doanh nghiệp' },
        { label: 'Người hành nghề chứng khoán' },
        { label: 'Chứng khoán' },
        { label: 'Thông tin thị trường' },
      ],
    },
    {
      label: 'Quản lý báo cáo',
      icon: 'pi pi-file',
      items: [
        { label: 'Quản lý thông tin báo cáo' },
        { label: 'Tổng hợp báo cáo' },
      ],
    },
    { label: 'Tổng hợp dữ liệu thị trường', icon: 'pi pi-database' },
    { label: 'Phân tích chuyên sâu vụ việc', icon: 'pi pi-calendar' },
    { label: 'Quản trị hệ thống', icon: 'pi pi-cog' },
    { label: 'Tiện ích', icon: 'pi pi-exclamation-circle' },
  ];
}
