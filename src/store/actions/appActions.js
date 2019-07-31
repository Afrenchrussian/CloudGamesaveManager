import {
    TOGGLE_FULLSCREEN,
    TOGGLE_USER_STATUS,
    SEND_USER_INFO,
    SEND_LOCATION,
    SAVEOS,
    GETDRIVES,
    SETLAUNCHERS,
} from '../types';

export const toggleFullscreen = payload => ({
    type: TOGGLE_FULLSCREEN,
    payload
})

export const toggleUserStatus = payload => ({
    type: TOGGLE_USER_STATUS,
    payload
})

export const sendUserInfo = payload => ({
        type: SEND_USER_INFO,
        payload
})

export const sendLocation = payload => ({
        type: SEND_LOCATION,
        payload
})

export const saveOS = payload => ({
    type: SAVEOS,
    payload
})

export const getDrives = payload => ({
    type: GETDRIVES,
    payload
})

export const setLaunchers = payload => ({
    type: SETLAUNCHERS,
    payload
})