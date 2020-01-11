import { GET_USER } from '../config/constant'

import axios from 'axios'

export const getUser = () => {
    return{
        type: GET_USER,
        payload: axios({
            method: 'GET',
            url: 'https://randomuser.me/api/'
          })
    }
}