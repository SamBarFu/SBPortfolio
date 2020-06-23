import { createStore } from 'redux'
import Resume from './InfoResume.json'

const reducer = (state = Resume, action) => {
    return state
}

export default createStore(reducer)
