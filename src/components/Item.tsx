import React, { Component } from 'react';

import { addLine } from '../actions/logs';
import {Dispatch} from "redux";
import {LogsActionTypes} from "../types/logs";
import {connect} from "react-redux";
import {Logs, LogsProps} from "./Logs";


export interface ItemProps {
    label: string,
    id: number
}

interface DispatchProps {
    ownAddLine: (message:string) => void
}

export class Item extends Component<ItemProps & DispatchProps> {
  static defaultProps = {
    label: 'ITEM'
  };
  render() {
      this.props.ownAddLine(`render Item Component with id ${this.props.id}`);
    return <div>{this.props.label} { this.props.id }</div>
  }
}

const mapDispatchToProps = (dispatch: Dispatch<LogsActionTypes>, ownProps: ItemProps): DispatchProps => {
    return {
        ownAddLine: (message) => {
            dispatch(addLine(message))
        }
    }
}

export default connect<{}, DispatchProps, ItemProps>(
    null,
    mapDispatchToProps
)(Item);