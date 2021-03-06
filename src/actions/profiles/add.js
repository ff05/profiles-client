import ApiClient from '../../api/client'

export const ADD_PROFILE = 'ADD_PROFILE'

const api = new ApiClient()

export default (profile) => {
  profile.birthDate = new Date(profile.birthDate)
  return (dispatch) => {

    api.post('/', profile)
      .then(result => {
        dispatch({
          type: ADD_PROFILE,
          payload: result.body
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}