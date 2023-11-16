import * as React from "react";
import { SyntheticEvent } from "react";
export interface Props {
    name: string;
    enthusiasmLevel?: number;
}
interface State {
    currentEnthusiasm: number;
}
declare class SHello2 extends React.Component<Props, State> {
    state: {
        currentEnthusiasm: number;
    };
    onIncrement: (event: SyntheticEvent) => void;
    onDecrement: (event: SyntheticEvent) => void;
    render(): React.JSX.Element;
    updateEnthusiasm(change: number): void;
}
export default SHello2;
