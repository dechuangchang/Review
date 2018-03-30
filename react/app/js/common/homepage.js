import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num:0
        }
    }
    componentWillMount() {

    }
    componentDidMount() {
        axios({
            method: 'get',
            url: '/api/v3/search/song',
            params: {
                keyword : '仙剑',  // 搜索关键字
                page: 1,          // 第几页
                pagesize: 10,    // 一页几个
                format:'jsonp'   // 必传参数，写死
            }
        })
        axios({
            method: 'get',
            headers:{
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'POST',
                'Access-Control-Allow-Headers':'x-requested-with,content-type'
            },
            url: 'http://m.kugou.com/app/i/getSongInfo.php',
            params: {
                hash : "97394a77e8461db7911b552f43ea4770",  // 歌曲 hash值
                cmd : 'playInfo',       // 写死
                format:'jsonp'          // 写死
            }
        })
    }
    componentWillReceiveProps(props) {

    }
    
    render() {
        return (
            <div className='homebox'>
                
            </div>
        )
    }
}
export default Home;