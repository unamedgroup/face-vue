import request from '../util/request'
import {stringify} from 'qs'

// export function getInfo(token) {
//     return request({
//         url: '/user/role',
//         method: 'get',
//         params: { token }
//     })
// }

export function submitConference(conference) {
    return request({
        url: '/conference/order',
        method: 'post',
        data: conference
    })
}

export function getPage() {
    return request({
        url: '/conference/total',
        method: 'get'
    })
}

export function cancelConference(conferenceID) {
    return request({
        url: '/conference/cancel',
        method: 'get',
        params: {conferenceID: conferenceID}
    })
}

export function rejectConference(conferenceID) {
    return request({
        url: '/conference/reject',
        method: 'get',
        params: {conferenceID: conferenceID}
    })
}

export function addConfPeople(userIdList,conferenceID) {
    return request({
        url:'/conference/participants',
        method:'post',
        data: {
            userIdList,
            conferenceID
        }
    })
}

export function showConfPeople(conferenceID) {
    return request({
        url:'conference/participants',
        method:'get',
        params:{conferenceID:conferenceID}
    })
}