import { vi_VN } from 'ng-zorro-antd/i18n';

const fullMonths = [
  'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
  'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
] as const;

export const viCustom = {
  ...vi_VN,
  DatePicker: {
    ...vi_VN.DatePicker,
    lang: {
      ...vi_VN.DatePicker.lang,
      shortMonths: fullMonths,   // full month name cho header
      months: fullMonths,        // override thêm để an toàn
      monthBeforeYear: true      // ← Đây là key quan trọng: true → tháng trước năm
    }
  }
} as const;