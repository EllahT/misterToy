<template>
    <div class="colors-list">
        <div class="color-item" v-for="color in colors" :key="color" 
        :style="{'background-color': color}"
        @click="emitChangedValue(color)">{{isPicked(color)}}</div>
    </div>
</template>

<script>

    export default {
        props: {
            value: {
                type: String,
                require: true
            }
        },

        created() {
            this.$store.dispatch({type: 'loadColors'});
        },

        computed: {
            colors() {
                return this.$store.getters.colors;
            }
        },

        methods: {
            emitChangedValue(newValue) {
                this.$emit('input', newValue);
            },

            isPicked(color) {
                return (color === this.value)? '✓' : '';
            }
        }
    }

</script>

<style>
    .color-item {
        height: 20px;
        width: 20px;
        border-radius: 20px;
        margin: 2px;
        cursor: pointer;
        color: white;
    }

    .colors-list {
        max-height: 120px;
        max-width: 120px;
        display: flex;
        flex-wrap: wrap;
    }

</style>
