import * as React from "react";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

class CHello extends React.Component<Props> {
  render() {
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}

export default CHello;

// helpers

function getExclamationMarks(numChars: number): Array {
  return Array(numChars + 1).join("!");
}