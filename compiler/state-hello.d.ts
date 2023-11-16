import * as React from "react";
export interface Props {
    name: string;
    enthusiasmLevel?: number;
}
interface State {
    currentEnthusiasm: number;
}
declare class SHello extends React.Component<Props, State> {
    state: {
        currentEnthusiasm: number;
    };
    onIncrement: () => void;
    onDecrement: () => void;
    render(): React.JSX.Element;
    updateEnthusiasm(change: number): void;
}
export default SHello;
