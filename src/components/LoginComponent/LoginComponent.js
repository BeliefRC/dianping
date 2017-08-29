import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

let timing;
export default class LoginComponent extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {
            time: 60,
            username: '',
            sending: false,
        };
    }

    sendCode() {
        let time = 60;
        timing = setInterval(() => {
            time--;
            this.setState({
                time,
                sending: true
            });
            if (time <= 0) {
                clearInterval(timing);
                this.setState({
                    time: 60,
                    sending: false
                });
                time = 60;
            }
        }, 1e3);

    }

    changeHandle(e) {
        this.setState({
            username: e.target.value
        })
    }

    clickHandle() {
        let userName = this.state.username;
        this.props.loginHandle(userName)
    }

    componentWillUnmount() {
        clearInterval(timing);
        this.setState({
            time: 60,
            username: '',
            sending: false,
        })
    }

    render() {
        let time = this.state.time;
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"/>
                    <input
                        type="text"
                        placeholder="输入手机号"
                        onChange={this.changeHandle.bind(this)}
                        value={this.state.username}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"/>
                    <button className={this.state.sending ? 'sending' : ''}
                            disabled={this.state.sending}
                            onClick={this.sendCode.bind(this)}>
                        {
                            this.state.sending ? `${time}S后重试` : '发送验证码'
                        }
                    </button>
                    <input type="text" placeholder="输入验证码"/>
                </div>
                <button className="btn-login" onClick={this.clickHandle.bind(this)}>登录</button>
            </div>
        )
    }
}
