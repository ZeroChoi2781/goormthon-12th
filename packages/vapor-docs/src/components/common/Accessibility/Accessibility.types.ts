export type AccessibilityProps = {
    tableData: {
        headingDescription: string;
        devNoteTable: {
            devNoteTitle: string;
            devNoteTable: {
                accessibility: string;
                descriptions: string[];
            }[];
        };
        a11ySupportTable: {
            a11ySupportTitle: string;
            a11ySupportTable: {
                accessibility: string;
                descriptions: string[];
            }[];
        };
        keyboardInteractionsTable: {
            keyboardInteractionsTitle: string;
            keyboardTable: {
                name: string;
                descriptions: string[];
            }[];
        };
    };
};
