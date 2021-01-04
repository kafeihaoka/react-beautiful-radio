import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './main.less'

class BeautyRadio extends Component {
    constructor(props){
        super(props);
    }

    static displayName = 'BeautyRadio';

    static propTypes = {
        /**
         * 设置选中状态
         */
        checked: PropTypes.bool,
        /**
         * 设置选择内容文本
         */
        value: PropTypes.string,
        /**
         * 禁用选项
         */
        disabled: PropTypes.bool,
        /**
         * function 更新数据
         */
        onClick: PropTypes.func,
    };

    static defaultProps = {
        checked:false,
        value:'',
        disabled:false
    };

    //点击事件
     handleClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if(this.props.onClick && !this.props.disabled) this.props.onClick();
    };

    render() {
        const { value, checked, disabled } =this.props;
        return (
            <label className="an-radio-wrapper" onClick={this.handleClick}>
                <span className={`an-radio ${checked ? "an-radio-checked": ""} ${disabled ? "an-radio-disabled" : ""}`}>
                    <input type="radio" className="an-radio-input" value="on" />
                    <span className="an-radio-inner"></span>
                </span>
                {
                    value && <span>{value}</span>
                }
            </label>
        );
    }
}

export default BeautyRadio;
