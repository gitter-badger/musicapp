import React, { Component } from 'react';
import { Radio, Select, Input } from "antd";
import './index.css';
const { Search } = Input;
const { Option } = Select;
const selectBefore = (
    <Select defaultValue="歌曲" className="select-before">
        <Option value="歌曲">歌曲</Option>
        <Option value="歌手">歌手</Option>
        <Option value="专辑">专辑</Option>
        <Option value="歌单">歌单</Option>
    </Select>
)

class SearchClass extends Component {

    render() {
        return (
            <div className="Search">
                <Search addonBefore={selectBefore} placeholder="搜点自己想要的叭～" onSearch={value => console.log(value)} enterButton />
                <br/>
                <br/>
                <div className="options">
                <Radio.Group defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="a">
                        所有源
                    </Radio.Button>
                    <Radio.Button value="b">
                        QQ音乐
                    </Radio.Button>
                    <Radio.Button value="c">
                        网易云音乐
                    </Radio.Button>
                    <Radio.Button value="d">
                        Spotify
                    </Radio.Button>
                </Radio.Group>
                </div>
            </div>
        )
    }
}

export default SearchClass;