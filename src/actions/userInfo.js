import * as actionTypes from '../constants/userInfo'

export  function update(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}