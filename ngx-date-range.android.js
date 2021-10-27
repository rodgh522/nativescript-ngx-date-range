"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ngx_date_range_common_1 = require("./ngx-date-range.common");
var SimpleDateFormat = java.text.SimpleDateFormat;
var Locale = java.util.Locale;
const nativescript_angular_1 = require("nativescript-angular");
let calendarView;
const CalendarPickerView = com.nativescript.daterange.CalendarPickerView;
let options = new ngx_date_range_common_1.Options();
class NgxDateRange extends ngx_date_range_common_1.Common {
    constructor() {
        super();
    }
    getCalendarRangeValues() {
        let next = 2;
        let back = -1;
        if (options.disablePrevDates) {
            back = 0;
            next = 1;
        }
        const calender = {
            lastYear: back,
            lastMonth: back,
            lastDayOfMoth: back,
            nextYear: next,
            nextMonth: next,
            nextDayOfMoth: next,
        };
        return calender;
    }
    initCalendar() {
        const dateRange = this.getCalendarRangeValues();
        calendarView = new CalendarPickerView(this._context, null);
        let nextYear = java.util.Calendar.getInstance();
        let lastYear = java.util.Calendar.getInstance();
        lastYear.add(java.util.Calendar.YEAR, dateRange.lastYear);
        lastYear.add(java.util.Calendar.MONTH, dateRange.lastYear);
        lastYear.add(java.util.Calendar.DAY_OF_MONTH, dateRange.lastYear);
        nextYear.add(java.util.Calendar.YEAR, dateRange.nextYear);
        nextYear.add(java.util.Calendar.MONTH, dateRange.nextYear);
        nextYear.add(java.util.Calendar.DAY_OF_MONTH, dateRange.nextYear);
        const list = new java.util.ArrayList();
        let today = new java.util.Date();
        if (options.initialDate) {
            today = new java.util.Date(options.initialDate);
        }
        const arrayList = new java.util.ArrayList();
        calendarView.deactivateDates(list);
        let local = Locale.getDefault();
        if (options.language.languageCode && options.language.countryCode) {
            const location = new Locale(options.language.languageCode);
            Locale.setDefault(location);
            local = new Locale(options.language.languageCode, options.language.countryCode);
        }
        calendarView.init(lastYear.getTime(), nextYear.getTime(), new SimpleDateFormat(options.simpleDateFormat, local), local, options.supportsRtl)
            .inMode(CalendarPickerView.SelectionMode[options.selectionMode])
            .withHighlightedDates(arrayList)
            .withSelectedDate(today);
        if (!options.selectToday) {
            calendarView.clearSelectedDates();
        }
        calendarView.supportsRtl = options.supportsRtl;
        return calendarView;
    }
    createNativeView() {
        this.calendarView = this.initCalendar();
        return this.calendarView;
    }
    initNativeView() {
        super.initNativeView();
        this._androidViewId = android.view.View.generateViewId();
        const nativeView = this.nativeViewProtected;
        this.nativeView.setId(nativeView);
    }
    getSelectedDates() {
        const selectedDates = {
            startDate: null,
            endDate: null,
            originDates: null
        };
        const dates = calendarView.getSelectedDates().toString();
        selectedDates.originDates = dates;
        if (dates.toString()) {
            const toArr = dates.toString().split(',');
            if (toArr.length >= 2) {
                const startDate = toArr[0].replace('[', '').replace(']', '');
                const endDate = toArr[toArr.length - 1].replace(']', '');
                selectedDates.startDate = startDate.toString();
                selectedDates.endDate = endDate.toString().substring(1);
                return selectedDates;
            }
            else {
                const startDate = dates.toString().replace('[', '').replace(']', '');
                selectedDates.startDate = startDate.toString();
                selectedDates.endDate = null;
                return selectedDates;
            }
            ;
        }
        return selectedDates;
    }
}
exports.NgxDateRange = NgxDateRange;
function create(_options) {
    options = _options;
    return new NgxDateRange();
}
exports.create = create;
nativescript_angular_1.registerElement("NgxDateRange", () => require("./").NgxDateRange);
//# sourceMappingURL=ngx-date-range.android.js.map