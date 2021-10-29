Object.defineProperty(exports, "__esModule", { value: true });
const ngx_date_range_common_1 = require("./ngx-date-range.common");
const frame_1 = require("@nativescript/core/ui/frame").Frame;
const nativescript_angular_1 = require("@nativescript/angular");
let options = new ngx_date_range_common_1.Options();
let selectedDates = {
    startDate: null,
    endDate: null,
    originDates: null
};

var CalendarDateRangePickerViewControllerDelegateImpl = /** @class */ (function (_super) {
  __extends(CalendarDateRangePickerViewControllerDelegateImpl, _super);
  function CalendarDateRangePickerViewControllerDelegateImpl() {
      return _super !== null && _super.apply(this, arguments) || this;
  }
  CalendarDateRangePickerViewControllerDelegateImpl.initDelegate = (owner, callback)=> {
      this.delegate = CalendarDateRangePickerViewControllerDelegateImpl.new();
      this.delegate.owner = new WeakRef(owner);
      this.delegate.callback = callback;
      return this.delegate;
  };

  CalendarDateRangePickerViewControllerDelegateImpl.prototype.didPickDateRangeWithStartDateEndDate = (startDate, endDate)=> {
    console.log('=-=-=-=-Done=-=-=-=-=-=-=-');
    const currentViewController = frame_1.topmost().viewController;
    currentViewController.dismissViewControllerAnimatedCompletion(true, () => {
        selectedDates.startDate = startDate;
        selectedDates.endDate = endDate;
        this.delegate.callback(selectedDates);
    });
  };

  CalendarDateRangePickerViewControllerDelegateImpl.prototype.didSelectEndDateWithEndDate = function(endDate) {
  };

  CalendarDateRangePickerViewControllerDelegateImpl.prototype.didSelectStartDateWithStartDate = function(startDate) {
  };

  CalendarDateRangePickerViewControllerDelegateImpl.prototype.didCancelPickingDateRange = function() {
    console.log('didCancelPickingDateRange');
    const currentViewController = frame_1.topmost().viewController;
    currentViewController.dismissViewControllerAnimatedCompletion(true, () => {
        console.log('Date picker dismissed');
    });
  };

  CalendarDateRangePickerViewControllerDelegateImpl.prototype.didPickSingleDateWithStartDate = function(startDate) {
    console.log('Single Date Selection');
    const currentViewController = frame_1.topmost().viewController;
    currentViewController.dismissViewControllerAnimatedCompletion(true, () => {
        selectedDates.startDate = startDate;
        selectedDates.endDate = startDate;
    });
  };

  CalendarDateRangePickerViewControllerDelegateImpl.ObjCProtocols = [CalendarDateRangePickerViewControllerDelegate];
  return CalendarDateRangePickerViewControllerDelegateImpl;
}(NSObject));

class NgxDateRange extends ngx_date_range_common_1.Common {
    constructor() {
        super();
    }
    showDateRangePicker(callback) {
        resetSelectedDates();
        
        const nativeView = CalendarDateRangePickerViewController.new().initWithCollectionViewLayout(UICollectionViewFlowLayout.new().init());
        this.delegate = CalendarDateRangePickerViewControllerDelegateImpl.initDelegate(this, callback);
        nativeView.delegate = this.delegate;
        var myCurrentDate = new Date();
        var maximumDateYear = new Date(myCurrentDate.setFullYear(myCurrentDate.getFullYear() + 2));
        nativeView.minimumDate = new Date();
        nativeView.maximumDate = maximumDateYear;
        nativeView.calenderSelectionStyle = options.selectionMode;
        nativeView.titleText = "예약 일정";
        const navigationController = UINavigationController.new().initWithRootViewController(nativeView);
        const currentViewController = frame_1.topmost().viewController;
        currentViewController.delegate = this.delegate;
        currentViewController.presentViewControllerAnimatedCompletion(navigationController, true, () => {
            console.log('Date Picker presented');
        });
        currentViewController['allowsMultipleSelection'] = false;
    }
    getSelectedDates() {
        return selectedDates;
    }
}
exports.NgxDateRange = NgxDateRange;
function create(_options) {
    options = _options;
    return new NgxDateRange();
}
exports.create = create;
function resetSelectedDates() {
    selectedDates = {
        startDate: null,
        endDate: null,
        originDates: null
    };
}
nativescript_angular_1.registerElement('NgxDateRange', () => require('./').NgxDateRange);
//# sourceMappingURL=ngx-date-range.ios.js.map