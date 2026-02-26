import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { DatePickerModule } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { RadioButtonModule } from "primeng/radiobutton";
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

interface Country {
  name: string;
  code: string;
  icon?: string; // SVG string or icon name
}

interface ColumnOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-form-demo',
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
    SelectModule,
    MultiSelectModule,
    DatePickerModule,
    ButtonModule,
    FileUploadModule,
    RadioButtonModule,
    NzDatePickerModule
],
  templateUrl: './form-demo.html',
  styleUrl: './form-demo.css',
  standalone: true,
})
export class FormDemo implements AfterViewInit{
  // Input Text
  textValue: string = '';
  emailValue: string = '';
  passwordValue: string = '';

  // Input Number
  numberValue: number | null = null;
  priceValue: number | null = null;

  // Select/Dropdown
  selectedCountry: Country | null = null;
  countries: Country[] = [
    { name: 'United States', code: 'US', icon: 'us' },
    { name: 'United Kingdom', code: 'GB', icon: 'gb' },
    { name: 'Germany', code: 'DE', icon: 'de' },
    { name: 'France', code: 'FR', icon: 'fr' },
    { name: 'Japan', code: 'JP', icon: 'jp' },
    { name: 'Vietnam', code: 'VN', icon: 'vn' },
  ];
cities2: any[] = [
  { name: 'Hà Nội' },
  { name: 'TP. Hồ Chí Minh' },
  { name: 'Đà Nẵng' },
  { name: 'Hải Phòng' },
  { name: 'Cần Thơ' },
  { name: 'Biên Hòa' },
  { name: 'Thủ Dầu Một' },
  { name: 'Huế' },
  { name: 'Nha Trang' },
  { name: 'Vũng Tàu' },
  { name: 'Đà Lạt' },
  { name: 'Buôn Ma Thuột' },
  { name: 'Quy Nhơn' },
  { name: 'Việt Trì' },
  { name: 'Nam Định' },
  // ... bạn có thể thêm đầy đủ 63 tỉnh/thành nếu cần
];
  // Multi Select
  selectedCities: string[] = [];
  cities: string[] = [
    'New York',
    'London',
    'Paris',
    'Tokyo',
    'Ho Chi Minh City',
    'Hanoi',
    'Berlin',
    'Sydney',
  ];
constructor(private renderer: Renderer2){
  // Mặc định chọn một số cột giống UI của bạn
  this.selectedColumns = [
    'accountNumber',
    'accountName',
    'contactAddress',
    'idNumber',
    'issueDate',
    'openDate',
    'closeDate',
    'nationality'
  ];
}
  // Date Range
  dateRange: Date[] | null = null;

  // Export Columns
  selectedColumns: string[] = [];
  columnOptions: ColumnOption[] = [
    { label: 'Số tài khoản', value: 'accountNumber' },
    { label: 'Tên tài khoản', value: 'accountName' },
    { label: 'Địa chỉ liên hệ', value: 'contactAddress' },
    { label: 'Số đăng ký sở hữu/ID', value: 'idNumber' },
    { label: 'Ngày cấp', value: 'issueDate' },
    { label: 'Nơi cấp', value: 'issuePlace' },
    { label: 'Ngày mở', value: 'openDate' },
    { label: 'Ngày đóng', value: 'closeDate' },
    { label: 'Ngày thay đổi', value: 'changeDate' },
    { label: 'Quốc tịch', value: 'nationality' },
    { label: 'Loại hình NDT', value: 'ndtType' },
    { label: 'Ngày tháng năm sinh', value: 'dob' },
    { label: 'Người đại diện theo pháp luật', value: 'legalRepresentative' }
  ];

  // Form submission
  onSubmit() {
    console.log('Form submitted:', {
      textValue: this.textValue,
      emailValue: this.emailValue,
      passwordValue: this.passwordValue,
      numberValue: this.numberValue,
      priceValue: this.priceValue,
      selectedCountry: this.selectedCountry,
      selectedCities: this.selectedCities,
      dateRange: this.dateRange,
    });
  }

  onReset() {
    this.textValue = '';
    this.emailValue = '';
    this.passwordValue = '';
    this.numberValue = null;
    this.priceValue = null;
    this.selectedCountry = null;
    this.selectedCities = [];
    this.dateRange = null;
  }

  onColumnChange(event: any) {
    console.log('Cột đã chọn:', this.selectedColumns);
  }

  exportFile() {
    // logic xuất excel/pdf/csv dựa trên selectedColumns
    console.log('Xuất file với các cột:', this.selectedColumns);
  }

  onUpload(event: { files: File[] }) {
    // custom upload: xử lý file tại đây (gửi API, lưu local, v.v.)
    console.log('Files to upload:', event.files);
    // Ví dụ: gửi lên server
    // event.files.forEach(file => { ... });
  }

  ngAfterViewInit() {
    // Sử dụng MutationObserver để theo dõi khi popup lịch (ant-picker-dropdown) xuất hiện
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          // Tìm header year-month trong popup vừa mở
          const headers = document.querySelectorAll('.ant-picker-header-view button');
          headers.forEach((btn: any) => {
            let text = btn.innerText.trim();

            // Nếu text chứa "thg" (ví dụ: "2026 thg 1" hoặc "thg 1")
            if (text.includes('thg')) {
              // Thay "thg" bằng "tháng" (thêm "á" vào giữa như yêu cầu)
              text = text.replace(/thg/g, 'tháng');

              // Đảo vị trí nếu cần: từ "2026 tháng 1" thành "tháng 1 2026"
              // Cách đơn giản: split và reverse
              const parts = text.split(' ');
              if (parts.length === 3 && parts[0] === '2026') { // "2026 tháng 1"
                text = `${parts[1]} ${parts[2]} ${parts[0]}`; // "tháng 1 2026"
              } else if (parts.length === 2 && !isNaN(+parts[1])) { // "thg 1" (nếu không có năm)
                text = `${parts[0]} ${parts[1]}`;
              }

              // Cập nhật text
              this.renderer.setProperty(btn, 'innerText', text);
            }
          });
        }
      });
    });

    // Bắt đầu quan sát thay đổi trong body
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
}