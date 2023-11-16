import * as React from "react";
export interface Props {
    name: string;
    enthusiasmLevel?: number;
}
declare function Hello({ name, enthusiasmLevel }: Props): React.JSX.Element;
export default Hello;
