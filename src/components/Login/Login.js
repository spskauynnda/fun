import React, {Component} from 'react'
import {Modal, Icon, Button, message} from 'antd'
import LoginForm from './LoginForm'
import Register from './Register'


export default class Login extends Component {
  state = {
    action: 'login',
    visible: false,
    confirmLoading: false,
    isLogin: false,
    test: true
  }
  componentDidMount() {
    // if (localStorage.string) {
    //   this.setState({
    //     isLogin: true
    //   })
    // }
    console.log('didMount: ', this.state.isLogin)
  }

  changeTest = () => {
    this.setState({
      test: false,
      isLogin: true,
      visible: false
    })
    console.log(this.state.isLogin)
    window.setTimeout(() =>{
      console.log(this.state.isLogin)
    },1000)
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false
    });
  }

  handleRegiste = () => {
    this.setState({
      action: 'register'
    });
  }

  handleRegisterDone = () => {
    this.setState({
      visible: false,
      isLogin: true
    })
  }

  handleBack = () => {
    this.setState({
      action: 'login'
    });
  }

  logout = () => {
    this.setState({
      isLogin: false,
      action: 'login'
    })
    message.info('您已退出登录')
    sessionStorage.clear()
  }

  loginDone = async () => {
    this.setState({
      isLogin: true,
      visible: false
    })
    message.success("登录成功！")
  }



  render() {
    return (
      <div className="login">
        <div>
          {this.state.isLogin ?
            <Button onClick={this.logout}>
              <Icon type="user"
                    className='login_icon'
              />
              {sessionStorage.username || 'NULL'} 离 开
            </Button>
            :
            <Button onClick={this.showModal}>
              <Icon type="user"
                    className='login_icon'
              />
              登录
            </Button>
          }
        </div>
        <Modal title={ this.state.action === 'register' ?
          <div style={{position: 'relative'}}>
            <span
              className='modal_back'
              onClick={this.handleBack}
            >
              <Icon type="arrow-left"/>
            </span>
            注册
          </div> : '登录'
        }
               visible={this.state.visible}
               footer={null}
               onCancel={this.handleCancel}
        >
          { this.state.action === 'register' ?
            <Register handleRegisterDone={this.handleRegisterDone} action={this.state.action}/>
            :
            <LoginForm changeTest={this.changeTest} isRegiste={this.handleRegiste} loginDone={this.loginDone} action={this.state.action}/> }
        </Modal>
      </div>
    );
  }
}
