import React, {Component} from 'react';
import {TabBar} from "antd-mobile";
import {withRouter} from "react-router-dom"
 class TabBarCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            fullScreen: true,
        };
    }

    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', width: '100%', bottom: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#000"
                    barTintColor="white"

                >
                    <TabBar.Item
                        title="学烘焙"
                        key="home"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://image.hongbeibang.com/FhngZoiK_s7Zw4K3DxLogRfqoO06?50X50&imageView2/1/w/50/h/50) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://image.hongbeibang.com/FsxN7RUFRJ9Zdris5Z22haR2xIhj?50X50&imageView2/1/w/50/h/50) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'home'}

                        onPress={() => {
                            this.setState({
                                selectedTab: 'home',
                            });
                            this.props.history.push("/home");
                            document.title = "学烘焙";
                        }}
                        data-seed="logId"
                    >

                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://image.hongbeibang.com/Fkpdn7F9EWxvNeSS8M7V4_xbRPlf?50X50&imageView2/1/w/50/h/50) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://image.hongbeibang.com/Flc4c0tB_BGGFnA-ORFowqfNOpaD?50X50&imageView2/1/w/50/h/50) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="烘焙圈"
                        key="circle"

                        selected={this.state.selectedTab === 'circle'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'circle',
                            });
                            this.props.history.push("/circle");
                            document.title = "烘焙圈";
                        }}
                        data-seed="logId1"
                    >

                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://image.hongbeibang.com/Flm_lYHJQA56h0VyhdRhQ1i5iO06?50X50&imageView2/1/w/50/h/50) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://image.hongbeibang.com/Fj5pW1jZYwlS9rB3h_nsvXNptuPX?50X50&imageView2/1/w/50/h/50) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="问答"
                        key="question"

                        selected={this.state.selectedTab === 'question'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'question',
                            });
                            this.props.history.push("/question");
                        }}
                    >

                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://image.hongbeibang.com/FrYeKj0MohOJQuNzUgCugg90cHCS?50X50&imageView2/1/w/50/h/50' }}
                        selectedIcon={{ uri: 'https://image.hongbeibang.com/FpNSY800vY0I5ytvWaqDbdJqT0HR?50X50&imageView2/1/w/50/h/50' }}
                        title="我的小窝"
                        key="mine"
                        selected={this.state.selectedTab === 'mine'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'mine',
                            });
                            this.props.history.push("/mine");
                        }}
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}
export default withRouter(TabBarCom);