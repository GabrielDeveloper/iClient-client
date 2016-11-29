<template>
    <div class="container">
        <div class="columns is-vcentered">
            <div class="column is-4 is-offset-4">
                <h1 class="title">
                    Register a Client
                </h1>
                <div class="box">
                    <label class="label">Name</label>
                    <p class="control has-icon">
                        <input class="input" type="text" placeholder="John Smith" v-model="form.name">
                        <i class="fa fa-id-card-o" />
                    </p>
                    <label class="label">Phone</label>
                    <p class="control has-icon">
                        <input class="input" type="text" placeholder="21 99999-00000" v-model="form.phone">
                        <i class="fa fa-phone" />
                    </p>
                    <label class="label">Address</label>
                    <p class="control has-icon">
                        <input class="input" type="text" placeholder="Street 32 - Nª 23" v-model="form.address">
                        <i class="fa fa-address-card" />
                    </p>
                    <label class="label">City</label>
                    <p class="control has-icon">
                        <input class="input" type="text" placeholder="London" v-model="form.city">
                        <i class="fa fa-address-book" />
                    </p>
                    <label class="label">Area</label>
                    <p class="control has-icon">
                         <span class="select">
                            <select v-model="form.area">
                              <option v-for="area in areas">{{ area._id}}</option>
                            </select>
                        </span>
                        <i class="fa fa-map-marker" />
                    </p>
                    <label class="label">Frequency</label>
                    <p class="control has-icon">
                        <input class="input" type="number" placeholder="10" v-model="form.frequency">
                        <i class="fa fa-calendar-check-o" />
                    </p>
                    <label class="label">Ability</label>
                    <p class="control has-icon">
                        <input class="input" type="number" placeholder="200" v-model="form.ability">
                        <i class="fa fa-shopping-basket" />
                    </p>
                    <hr>
                    <p class="control">
                        <button class="button is-primary" @click="createClient()">Register</button>
                        <button class="button is-default">Cancel</button>
                    </p>
                </div>
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
        createClient() {
            this.form.area = this.areaSelected(this.form.area);
            this.$http.post(`${HOST}/api/v1/client`,
                this.form,
                {
                 headers: {
                    Authorization : localStorage.token
                }
            }).then(function (res) {
                let to = '/client/' + res.data.client._id;
                this.$router.push(to);
            }, function (err) {
                console.log(err);
            });
        },
        areaSelected(area) {
            let areaSelected = "";
            this.areas.forEach(function(key){
                if(key._id == area) {
                    areaSelected = key;
                }
            });
            return areaSelected;
        }
    }
}
</script>
<style>
h1.title {
    text-align: center;
    color: #FFFFFF;
}
span.select select {
    padding-left: 30px;
}

</style>
