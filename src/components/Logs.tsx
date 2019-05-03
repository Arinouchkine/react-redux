import React, { Component } from 'react';

export interface LogsProps {
    lines: string[]
}

export default class Logs extends Component<LogsProps> {
    render() {
        return (
            <div>
                {this.props.lines.map((lines,index)=>{
                    return <div key={index}>{lines}</div>
                })}
            </div>
        );
    }
}