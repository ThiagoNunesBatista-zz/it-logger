import { ADD_LOG, DELETE_LOG, GET_LOGS, SET_LOADING, LOGS_ERROR } from './types'

// export const getLogs = () => {
//   return async (dispatch) => {
//     setLoading()

//     const res = await window.fetch('/logs')
//     const data = await res.json()

//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     })
//   }
// }

export const getLogs = () => async dispatch => {
  try {
    setLoading()

    const res = await window.fetch('/logs')
    const data = await res.json()

    dispatch({
      type: GET_LOGS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    })
  }
}

export const addLog = log => async dispatch => {
  try {
    setLoading()
    const res = await window.fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()

    dispatch({
      type: ADD_LOG,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    })
  }
}

export const deleteLog = id => async dispatch => {
  try {
    setLoading()

    await window.fetch(`/logs/${id}`, {
      method: 'DELETE'
    })

    dispatch({
      type: DELETE_LOG,
      payload: id
    })
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    })
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
