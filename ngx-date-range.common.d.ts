import { View } from "@nativescript/core/ui/core/view";
export declare class Common extends View {
}
export declare class Options {
    selectionMode?: 'SINGLE' | 'MULTIPLE' | 'RANGE';
    initialDate?: string;
    simpleDateFormat?: string;
    supportsRtl?: boolean;
    disablePrevDates?: boolean;
    selectToday?: boolean;
    language: {
        languageCode: string;
        countryCode: string;
    };
    constructor();
}
