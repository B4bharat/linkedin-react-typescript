import * as React from "react";

interface Props {
  type: string;
}

export default ({ type }: Props) => <div>I'm a {type} component</div>;
