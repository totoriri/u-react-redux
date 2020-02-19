import _ from 'lodash'
import { READ_EVENTS,DELETE_EVENT } from "../actions"


export default (events = {}, action ) => {
    switch (action.type) {
        case READ_EVENTS:
            console.log(action.response.data)
        return _.mapKeys(action.response.data,'id')
  
        case DELETE_EVENT:
            console.log(`reducer内${action.id}`)
            delete events[action.id]
            return { ...events}
        default:
            return events;
    }
}