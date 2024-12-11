export type UseEventListenerProps = {
    eventName: string;
    handler: EventListener;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dependencies: any[];
    element?: HTMLElement | Window;
};
