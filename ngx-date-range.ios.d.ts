import { Common, Options } from './ngx-date-range.common';
declare class CalendarDateRangePickerViewControllerDelegateImpl extends NSObject implements CalendarDateRangePickerViewControllerDelegate {
    static ObjCProtocols: {
        prototype: CalendarDateRangePickerViewControllerDelegate;
    }[];
    static initDelegate(): CalendarDateRangePickerViewControllerDelegateImpl;
    didPickDateRangeWithStartDateEndDate(startDate: Date, endDate: Date): void;
    didSelectEndDateWithEndDate(endDate: Date): void;
    didSelectStartDateWithStartDate(startDate: Date): void;
    didCancelPickingDateRange(): void;
    didPickSingleDateWithStartDate(startDate: Date): void;
}
export declare class NgxDateRange extends Common {
    delegate: CalendarDateRangePickerViewControllerDelegate;
    constructor();
    showDateRangePicker(): void;
    getSelectedDates(): {
        startDate: any;
        endDate: any;
        originDates: any;
    };
}
export declare function create(_options?: Options): NgxDateRange;
export {};
