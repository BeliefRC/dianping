import { get } from '../get'

export function getInfoData(id) {
    const result = get('http://localhost:3001/api/detail/info/' + id);
    return result
}

export function getCommentData(page, id) {
    const result = get('http://localhost:3001/api/detail/comment/' + page + '/' + id);
    return result
}