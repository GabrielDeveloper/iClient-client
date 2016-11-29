import auth from '../../auth'
import AreaCreate from '../../components/Area/AreaCreate.vue'


export default {
    'path': '/area/create',
    component: AreaCreate,
    beforeEnter: auth.requireAuth
}

