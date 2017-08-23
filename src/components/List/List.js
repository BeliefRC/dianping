import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ListItem from './ListItem/ListItem'
import './style.less'

export default class List extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {};
    }

    render() {
        let listData = this.props.listData;
        return (
            <div className="list-container">
                {listData.map((item, index) => (
                    <ListItem key={`ListItem${index}`} listItemData={item}/>
                ))}
            </div>
        )
    }
}
