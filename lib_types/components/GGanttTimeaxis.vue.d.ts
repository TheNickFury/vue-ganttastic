declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, {
    "upper-timeunit"?(_: {
        label: string;
        value: string | undefined;
        date: Date;
    }): any;
    timeunit?(_: {
        label: string;
        value: string | undefined;
        date: Date;
    }): any;
}>;
export default _default;
declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
