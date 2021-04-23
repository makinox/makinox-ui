declare namespace _default {
    export const title: string;
    export { Button as component };
    export namespace argTypes {
        namespace backgroundColor {
            const control: string;
        }
    }
}
export default _default;
export function Primary(args: any): JSX.Element;
export namespace Primary {
    namespace args {
        const primary: boolean;
        const label: string;
    }
}
export function Secondary(args: any): JSX.Element;
export namespace Secondary {
    export namespace args_1 {
        const label_1: string;
        export { label_1 as label };
    }
    export { args_1 as args };
}
export function Large(args: any): JSX.Element;
export namespace Large {
    export namespace args_2 {
        export const size: string;
        const label_2: string;
        export { label_2 as label };
    }
    export { args_2 as args };
}
export function Small(args: any): JSX.Element;
export namespace Small {
    export namespace args_3 {
        const size_1: string;
        export { size_1 as size };
        const label_3: string;
        export { label_3 as label };
    }
    export { args_3 as args };
}
import { Button } from "./Button";
