"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = require("@nativescript/core/ui/core/view");
class Common extends view_1.View {
}
exports.Common = Common;
class Options {
    constructor() {
        this.selectionMode = 'RANGE';
        this.simpleDateFormat = 'MMMM, YYYY';
        this.initialDate = null;
        this.supportsRtl = false;
        this.disablePrevDates = false;
        this.selectToday = false;
        this.language = {
            languageCode: null,
            countryCode: null
        };
    }
}
exports.Options = Options;
//# sourceMappingURL=ngx-date-range.common.js.map