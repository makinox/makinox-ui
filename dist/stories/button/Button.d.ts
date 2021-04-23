export function Button({ primary, backgroundColor, size, label, ...props }: {
    [x: string]: any;
    primary: any;
    backgroundColor: any;
    size: any;
    label: any;
}): JSX.Element;
export namespace Button {
    namespace propTypes {
        const primary: PropTypes.Requireable<boolean>;
        const backgroundColor: PropTypes.Requireable<string>;
        const size: PropTypes.Requireable<string>;
        const label: PropTypes.Validator<string>;
        const onClick: PropTypes.Requireable<(...args: any[]) => any>;
    }
    namespace defaultProps {
        const backgroundColor_1: null;
        export { backgroundColor_1 as backgroundColor };
        const primary_1: boolean;
        export { primary_1 as primary };
        const size_1: string;
        export { size_1 as size };
        const onClick_1: undefined;
        export { onClick_1 as onClick };
    }
}
import PropTypes from "prop-types";
