import {get} from '../get'

export function getOrderListData(username) {
    return get('http://localhost:3001/api/orderlist/' + username)
}