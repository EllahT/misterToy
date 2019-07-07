<template>
    <ul class="colors-list">
        <li class="color-item" v-for="color in colors" :key="color" 
        :style="{'background-color': color}"
        @click="emitChangedValue(color)">{{isPicked(color)}}</li>
        <button @click.prevent="changeColors">Change Colors</button>
    </ul>
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
            },

            changeColors() {
                this.$store.dispatch({type: 'changeColors'})
            }
        }
        
    }

</script>

<style lang="scss">
    .colors-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 120px;
            
        .color-item {
            height: 20px;
            width: 20px;
            border-radius: 20px;
            margin: 2px;
            cursor: pointer;
            color: white;
        }

        button {
            margin: 3px;
            border-radius: 40px;
            max-width: 80px;
        }
    }
</style>
