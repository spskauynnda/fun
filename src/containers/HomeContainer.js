import React, {Component} from 'react'
import {Layout, Button} from 'antd'
import {comments} from '../common/mock'
import {Link} from 'react-router'
import {fetch_movieDetail} from '../common/fetch'

const {Content, Sider} = Layout

export default class HomeContainer extends Component {
  state = {}

  handleClick = ()=> {
    // console.log(comments);
    fetch_movieDetail({
      id: 26260853
    })
      .then(data=>console.log(data))
  }
  render() {
    return (
      <div>
        < Button
          onClick={this.handleClick}>
          点击
        </ Button >
        <Button><Link to='movie/26260853'>电影详情</Link></Button>
      </div>
    )
  }
}
