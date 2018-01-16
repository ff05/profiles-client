import FETCHED_PROFILES from '../actions/profiles/fetch'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_PROFILES :
      return [...payload]

    default :
      return state
  }
}