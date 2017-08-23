import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'
import './style.less'

export default class ListItem extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {};
    }

    render() {
        let listItemData = this.props.listItemData;
        return (
            <div>
                <div className="list-item clear-fix">
                    <Link to={'/detail/' + listItemData.id}>
                    <div className="item-img-container float-left">
                        <img src={listItemData.img} alt={listItemData.title}/>
                    </div>
                    <div className="item-content">
                        <div className="item-title-container clear-fix">
                            <h3 className="float-left">{listItemData.title}</h3>
                            <span className="float-right">{listItemData.distance}</span>
                        </div>
                        <p className="item-sub-title">
                            {listItemData.subTitle}
                        </p>
                        <div className="item-price-container clear-fix">
                            <span className="price float-left">￥{listItemData.price}</span>
                            <span className="number float-right">已售{listItemData.mumber}</span>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        )
    }
}
