import React from 'react';
import {
    View,
    Text
} from 'react-native';

export default class detailsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    componentDidMount() {
        // console.log("什么什么模式=",this.props.goodsCodeKey)

    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>这里是商品详情</Text>
                <Text>商品编码：{this.props.goodsCodeKey}</Text>
            </View>
        );
    }
}