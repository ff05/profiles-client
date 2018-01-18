import FETCHED_PROFILES from '../actions/profiles/fetch'
import ADD_PROFILE from '../actions/profiles/add'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_PROFILES :
      return [...payload]

    case ADD_PROFILE :
      return [payload, ...state]

    default :
      return state
  }
}