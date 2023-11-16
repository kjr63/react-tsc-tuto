import * as React from "react";
export interface Props {
    name: string;
    enthusiasmLevel?: number;
}
declare class CHello extends React.Component<Props> {
    render(): React.JSX.Element;
}
export default CHello;
