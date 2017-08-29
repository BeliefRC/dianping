import {get} from '../get'
import {post} from '../post'

export function getOrderListData(username) {
    return get('http://localhost:3001/api/orderlist/' + username)
}

export function postComment(id, comment, star) {
    return post('/api/submitComment', {
        id: id,
        comment: comment,
        star: star
    })

}