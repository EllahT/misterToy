<template>
    <div class="time-picker">
        <sub-picker v-model="value.hours" type="hours"></sub-picker> :
        <sub-picker v-model="value.minutes" type="minutes"></sub-picker>
        <sub-picker v-model="value.AMPM" type="AMPM"></sub-picker>
    </div>
</template>

<script>
    import SubPicker from '@/components/SubPicker.vue';

    export default {
        props: {
            value: {
                type: Object,
                require: true
            }
        },


        methods: {
            emitChangedValue(newValue) {
                this.$emit('input', newValue);
            },
        },

        components: {
            SubPicker
        }
    }

</script>

<style>
 .time-picker-arrows {
     cursor: pointer;
 }

 .time-picker {
     display: flex;
     flex-direction: row;
     align-items: center;
 }

 .sub-picker {
     margin: 5px;
 }

</style>
