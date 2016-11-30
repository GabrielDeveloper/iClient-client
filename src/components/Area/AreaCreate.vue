<template>
    <div class="container">
        <div class="columns is-vcentered">
            <div class="column is-4 is-offset-4">
                <h1 class="title">
                    Register an Area
                </h1>
                <form class="box" v-on:submit.prevent="createArea()">
                    <label class="label">Area</label>
                    <p class="control has-icon">
                        <input class="input" type="text" placeholder="Center" v-model="form._id" required>
                        <i class="fa fa-map-marker" />
                    </p>
                    <label class="label">Parent</label>
                    <p class="control has-icon">
                         <span class="select">
                            <select v-model="form.parent" required>
                              <option v-for="area in areas">{{ area._id}}</option>
                            </select>
                        </span>
                        <i class="fa fa-map-o" />
                    </p>
                    <hr>
                    <p class="control">
                        <button class="button is-primary" type="submit">Register</button>
                        <button class="button is-default" @click="back()">Cancel</button>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import { HOST } from '../../config.js'

export default {
    data() {
        return {
            form: {},
            areas: []
        }
    },
    created() {
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
        createArea() {
            console.log(this.form);
            this.$http.post(`${HOST}/api/v1/area`,
                this.form,
                {
                 headers: {
                    Authorization : localStorage.token
                }
            }).then(function (res) {
                let to = '/area';
                this.$router.push(to);
            }, function (err) {
                console.log(err);
            });
        },
        back() {
            this.$router.push('/area');
        }
    }
}
</script>
