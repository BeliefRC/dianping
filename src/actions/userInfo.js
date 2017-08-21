import * as actionTypes from '../constants/userInfo'

export default function update(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}