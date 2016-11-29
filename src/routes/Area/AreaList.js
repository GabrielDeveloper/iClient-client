import auth from '../../auth'
import Areas from '../../components/Area/Areas.vue'


export default {
    'path': '/area',
    component: Areas,
    beforeEnter: auth.requireAuth
}

