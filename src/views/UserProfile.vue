<template>
    <div>
        <form @submit.prevent="updateUserData">
            <label>
                Name:
                <input type="text" v-model="userData.name"/>
            </label>
            <label>
                Gender:
                <gender-picker v-model="userData.gender"></gender-picker>
            </label>
            <label>
                Time:
                <time-picker v-model="userData.time"></time-picker>
            </label>
            <label>
                Color:
                <color-picker v-model="userData.color"></color-picker>
            </label>

        </form>

    </div>
</template>

<script>

import GenderPicker from '@/components/GenderPicker.vue';
import TimePicker from '@/components/TimePicker.vue';
import ColorPicker from '@/components/ColorPicker.vue';

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
                gender: '',
                time: '',
                color: ''
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
        ColorPicker
    }
};
</script>
