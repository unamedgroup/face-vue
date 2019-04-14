import axios from 'axios'

export function getFreeRoom() {
    return axios.get('http://47.103.6.243:8080/room/free')
}

export function getAllBuilding() {
    return axios.get('http://47.103.6.243:8080/building/getAllBuilding')
}

export function byBuilding(building) {
    return axios.get('http://172.24.203.64:8080/room/byBuilding',{params:{building:building}})
}