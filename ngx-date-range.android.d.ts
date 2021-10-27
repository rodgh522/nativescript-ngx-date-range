import { Common, Options } from './ngx-date-range.common';
export declare class NgxDateRange extends Common {
    private _androidViewId;
    nativeViewProtected: any;
    calendarView: any;
    constructor();
    private getCalendarRangeValues;
    initCalendar(): any;
    createNativeView(): any;
    initNativeView(): void;
    getSelectedDates(): {
        startDate: any;
        endDate: any;
        originDates: any;
    };
}
export declare function create(_options?: Options): NgxDateRange;
