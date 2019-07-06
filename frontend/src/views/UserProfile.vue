<template>
    <div>
        <form @submit.prevent="updateUserData">
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
            <button>Save Preferences</button>
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
                gender: {type: '', display: ''},
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
