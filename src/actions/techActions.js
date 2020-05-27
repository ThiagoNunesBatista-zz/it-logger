import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR } from './types'

export const getTechs = () => async dispatch => {
  try {
    setLoading()

    const res = await window.fetch('/techs')
    const data = await res.json()

    dispatch({
      type: GET_TECHS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data
    })
  }
}

export const addTech = tech => async dispatch => {
  try {
    setLoading()

    const res = await window.fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res.json()

    dispatch({
      type: ADD_TECH,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data
    })
  }
}

export const deleteTech = id => async dispatch => {
  try {
    setLoading()

    await window.fetch(`/techs/${id}`, {
      method: 'DELETE'
    })

    dispatch({
      type: DELETE_TECH,
      payload: id
    })
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data
    })
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
