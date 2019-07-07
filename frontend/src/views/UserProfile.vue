<template>
    <div class="user-profile">
        <form @submit.prevent="updateUserData">
            <div>
                <label>Email:</label>
                <validation-provider rules="required|email">
                    <template #default="{ errors }">
                        <input type="email" v-model="userData.email"/>
                        <p class="errors">{{ errors[0] }}</p>
                    </template>
                </validation-provider>
            </div>
            <div>
                <label>Name:</label>
                <input type="text" v-model="userData.name"/>
            </div>
            <div>
                <label>Gender:</label>
                <gender-picker v-model="userData.gender"></gender-picker>
            </div>
            <div>
                <label>Time:</label>
                <time-picker v-model="userData.time"></time-picker>
            </div>
            <div>
                <label>Color:</label>
                <color-picker v-model="userData.color"></color-picker>
            </div>
            <button class="submit-btn">Save Preferences</button>
        </form>

    </div>
</template>

<script>
import GenderPicker from '@/components/GenderPicker.vue';
import TimePicker from '@/components/TimePicker.vue';
import ColorPicker from '@/components/ColorPicker.vue';
import { ValidationProvider } from 'vee-validate';
import Vue from 'vue';
Vue.component('ValidationProvider', ValidationProvider);

export default {
    created() {
        this.$store.dispatch({type: 'loadUserData'});
        this.userData = JSON.parse(JSON.stringify(this.$store.getters.userData));
    },

    data() {
        return {
            userData: {
                _id: '',
                name: '',
                gender: {type: '', display: ''},
                time: '',
                color: '',
                email: null
            }
        }
    },

    methods: {
        updateUserData() {
            this.$store.dispatch({type: 'updateUserData', userData: this.userData})
        }
    },

    components: {
        GenderPicker,
        TimePicker,
        ColorPicker,
        ValidationProvider
    }
};
</script>
