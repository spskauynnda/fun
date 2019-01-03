import React, {Component} from 'react'
import {Form, Icon, Input, Button, message} from 'antd';
import {fetchLogin} from '../../common/fetch'

const FormItem = Form.Item;

class LoginForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    // 获取表单的值
    this.props.form.validateFields(async (err, values) => {
      if (!err && !!values) {
        try {
          await fetchLogin(values)
          await this.props.loginDone();
        } catch (e) {
          message.error(e.message)
          console.dir(e.message)
        }
      } else {
        message.error("登陆错误")
      }
    })
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{required: true, message: '请输入用户名!'}],
          })(
            <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="用户名"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{required: true, message: '请输入密码!'}],
          })(
            <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="密码"/>
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登 录
          </Button>
          或 <a onClick={this.props.isRegiste}>现在注册！</a>
        </FormItem>
      </Form>
    );
  }
}

export default LoginForm = Form.create({})(LoginForm)
