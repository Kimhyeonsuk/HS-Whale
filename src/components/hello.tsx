import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps'는 props의 형태를 나타냅니다.
// state는 설정되지 않으므로, `{}` 타입을 사용합니다.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}