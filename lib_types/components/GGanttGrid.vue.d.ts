declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    highlightedUnits?: number[] | undefined;
    highlightDates: string[];
    chartStart: string | Date;
    chartEnd: string | Date;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    highlightedUnits?: number[] | undefined;
    highlightDates: string[];
    chartStart: string | Date;
    chartEnd: string | Date;
}>>>, {}, {}>;
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
