<template>
    <section class="hero is-fullheight is-primary">
        <div class="columns">
        <div class="column is-10 is-offset-1">
            <div class="level header">
                <div class="level-left">
                    <h2 class="title is-2">Areas</h2>
                </div>
                <div class="level-right">
                    <router-link :to="{ path: '/area/create/'}"  class="button is-info is-medium" exac>
                        <span class="icon">
                            <i class="fa fa-plus"></i>
                        </span>
                        <span>New Area</span>
                    </router-link>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="area in areas">
                        <td>{{ area._id }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </section>
</template>

<script>

import { HOST } from '../../config.js'
import ViewHelper from '../../helpers/ViewHelper'

export default {
  data () {
    return {
        areas: []
    }
  },
    created: function (){
            this.$http.get(`${HOST}/api/v1/area`, {
                 headers: {
                    Authorization : localStorage.token
                }
            }).then(function (res) {
                this.areas = res.data.areas;
            }, function (err) {
                console.log(err);
            });
    },
    methods: {
        getDate(date) {
            let dateObj = new Date(date);
            return dateObj.toLocaleDateString()
        }
    }
}
</script>
