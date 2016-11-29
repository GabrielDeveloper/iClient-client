import auth from '../../auth'
import Visits from '../../components/Visit/Visits.vue'

export default {
    'path' : '/visits',
    component: Visits,
    beforeEnter: auth.requireAuth,
}
