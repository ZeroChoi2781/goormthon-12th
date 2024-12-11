import type { ExampleComponent, PackageName } from './[componentName].types';

// const EXAMPLE_COMPONENT: ExampleComponent = {
//     alert: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/(alerts)/alert/(contents)/Alert.example'
//         ),
//     'uncontrolled-alert': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/(alerts)/uncontrolled-alert/(contents)/UncontrolledAlert.example'
//         ),
//     'add-avatar': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/(avatars)/add-avatar/(contents)/AddAvatar.example'
//         ),
//     'alert-avatar': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/(avatars)/alert-avatar/(contents)/AlertAvatar.example'
//         ),
//     avatar: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/(avatars)/avatar/(contents)/Avatar.example'
//         ),
//     'avatar-skeleton': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/(avatars)/avatar-skeleton/(contents)/AvatarSkeleton.example'
//         ),
//     'count-avatar': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/(avatars)/count-avatar/(contents)/CountAvatar.example'
//         ),
//     'user-avatar-group': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/(avatars)/user-avatar-group/(contents)/UserAvatarGroup.example'
//         ),
//     badge: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/(badges)/badge/(contents)/Badge.example'
//         ),
//     'uncontrolled-badge': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/(badges)/uncontrolled-badge/(contents)/UncontrolledBadge.example'
//         ),
//     'button-toggle-group': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/(button-toggle-groups)/button-toggle-group/(contents)/ButtonToggleGroup.example'
//         ),
//     'uncontrolled-button-toggle-group': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/(button-toggle-groups)/uncontrolled-button-toggle-group/(contents)/UncontrolledButtonToggleGroup.example'
//         ),
//     collapse: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/(collapses)/collapse/(contents)/Collapse.example'
//         ),
//     'uncontrolled-collapse': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/(collapses)/uncontrolled-collapse/(contents)/UncontrolledCollapse.example'
//         ),
//     'form-feedback': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/(form-elements)/form-feedback/(contents)/FormFeedback.example'
//         ),
//     'form-text': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/(form-elements)/form-text/(contents)/FormText.example'
//         ),
//     label: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/(form-elements)/label/(contents)/Label.example'
//         ),
//     popover: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/(popovers)/popover/(contents)/Popover.example'
//         ),
//     'uncontrolled-popover': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/(popovers)/uncontrolled-popover/(contents)/UncontrolledPopover.example'
//         ),
//     tooltip: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/(tooltips)/tooltip/(contents)/Tooltip.example'
//         ),
//     'uncontrolled-tooltip': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/(tooltips)/uncontrolled-tooltip/(contents)/UncontrolledTooltip.example'
//         ),
//     'basic-pagination': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/basic-pagination/(contents)/BasicPagination.example'
//         ),
//     breadcrumb: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/breadcrumb/(contents)/Breadcrumb.example'
//         ),
//     button: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/button/(contents)/Button.example'
//         ),
//     'button-group': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/button-group/(contents)/ButtonGroup.example'
//         ),
//     calendar: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/calendar/(contents)/Calendar.example'
//         ),
//     carousel: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/carousel/(contents)/Carousel.example'
//         ),
//     checkbox: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/checkbox/(contents)/Checkbox.example'
//         ),
//     dropdown: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/dropdown/(contents)/Dropdown.example'
//         ),
//     'dropdown-toggle': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/dropdown-toggle/(contents)/DropdownToggle.example'
//         ),
//     'file-input': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/file-input/(contents)/FileInput.example'
//         ),
//     footer: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/footer/(contents)/Footer.example'
//         ),
//     'form-group': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/form-group/(contents)/FormGroup.example'
//         ),
//     input: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/input/(contents)/Input.example'
//         ),
//     modal: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/modal/(contents)/Modal.example'
//         ),
//     nav: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/nav/(contents)/Nav.example'
//         ),
//     radio: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/radio/(contents)/Radio.example'
//         ),
//     'search-input': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/search-input/(contents)/SearchInput.example'
//         ),
//     'service-nav': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/service-nav/(contents)/ServiceNav.example'
//         ),
//     'side-nav': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/side-nav/(contents)/SideNav.example'
//         ),
//     'side-panel': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/side-panel/(contents)/SidePanel.example'
//         ),
//     skeleton: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/skeleton/(contents)/Skeleton.example'
//         ),
//     spinner: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/spinner/(contents)/Spinner.example'
//         ),
//     status: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/status/(contents)/Status.example'
//         ),
//     switch: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/switch/(contents)/Switch.example'
//         ),
//     text: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/text/(contents)/Text.example'
//         ),
//     'text-button': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/text-button/(contents)/TextButton.example'
//         ),
//     toast: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/toast/(contents)/Toast.example'
//         ),
//     'top-banner': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/top-banner/(contents)/TopBanner.example'
//         ),
//     tourtip: () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/components/tourtip/(contents)/Tourtip.example'
//         ),
//     'dashboard-frame': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/deprecated-components/dashboard-frame/(contents)/DashboardFrame.example'
//         ),
//     'date-picker': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/deprecated-components/date-picker/(contents)/DatePicker.example'
//         ),
//     'goorm-navbar': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-components/deprecated-components/goorm-navbar/(contents)/GoormNavbar.example'
//         ),
// };
const EXAMPLE_CORE_COMPONENT: ExampleComponent = {
    dialog: () =>
        import(
            '@vapor-docs/src/app/(dashboard-frame)/vapor-core/components/dialog/(contents)/Dialog.example'
        ),
    avatar: () =>
        import(
            '@vapor-docs/src/app/(dashboard-frame)/vapor-core/components/avatar/(contents)/Avatar.example'
        ),
    checkbox: () =>
        import(
            '@vapor-docs/src/app/(dashboard-frame)/vapor-core/components/checkbox/(contents)/Checkbox.example'
        ),
    breadcrumbs: () =>
        import(
            '@vapor-docs/src/app/(dashboard-frame)/vapor-core/components/breadcrumbs/(contents)/Breadcrumbs.example'
        ),
    alert: () =>
        import(
            '@vapor-docs/src/app/(dashboard-frame)/vapor-core/components/alert/(contents)/Alert.example'
        ),
    'text-input': () =>
        import(
            '@vapor-docs/src/app/(dashboard-frame)/vapor-core/components/text-input/(contents)/TextInput.example'
        ),
    dropdown: () =>
        import(
            '@vapor-docs/src/app/(dashboard-frame)/vapor-core/components/dropdown/(contents)/Dropdown.example'
        ),
    card: () =>
        import(
            '@vapor-docs/src/app/(dashboard-frame)/vapor-core/components/card/(contents)/Card.example'
        ),
    badge: () =>
        import(
            '@vapor-docs/src/app/(dashboard-frame)/vapor-core/components/badge/(contents)/Badge.example'
        ),
    label: () =>
        import(
            '@vapor-docs/src/app/(dashboard-frame)/vapor-core/components/label/(contents)/Label.example'
        ),
    nav: () =>
        import(
            '@vapor-docs/src/app/(dashboard-frame)/vapor-core/components/nav/(contents)/Nav.example'
        ),
    tabs: () =>
        import(
            '@vapor-docs/src/app/(dashboard-frame)/vapor-core/components/tabs/(contents)/Tabs.example'
        ),
    button: () =>
        import(
            '@vapor-docs/src/app/(dashboard-frame)/vapor-core/components/button/(contents)/Button.example'
        ),
    'icon-button': () =>
        import(
            '@vapor-docs/src/app/(dashboard-frame)/vapor-core/components/icon-button/(contents)/IconButton.example'
        ),
    'search-input': () =>
        import(
            '@vapor-docs/src/app/(dashboard-frame)/vapor-core/components/search-input/(contents)/SearchInput.example'
        ),
    text: () =>
        import(
            '@vapor-docs/src/app/(dashboard-frame)/vapor-core/components/text/(contents)/Text.example'
        ),
    switch: () =>
        import(
            '@vapor-docs/src/app/(dashboard-frame)/vapor-core/components/switch/(contents)/Switch.example'
        ),
    'radio-group': () =>
        import(
            '@vapor-docs/src/app/(dashboard-frame)/vapor-core/components/radio-group/(contents)/RadioGroup.example'
        ),
};

// const EXAMPLE_TOOLS_COMPONENT: ExampleComponent = {
//     'activity-bar': () =>
//         import(
//             '@vapor-docs/src/app/(dashboard-frame)/vapor-tools/components/activity-bar/(contents)/ActivityBar.example'
//         ),
// };
export const EXAMPELS: Record<PackageName, ExampleComponent> = {
    // 'vapor-components': EXAMPLE_COMPONENT,
    'vapor-core': EXAMPLE_CORE_COMPONENT,
    // 'vapor-tools': EXAMPLE_TOOLS_COMPONENT,
};
