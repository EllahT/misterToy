<template>
    <div class="sub-picker">
        <div @click="emitChangedValue(1)" class="time-picker-arrows">▲</div>
        <div>{{value}}</div>
        <div @click="emitChangedValue(-1)" class="time-picker-arrows">▼</div>
    </div>
</template>

<script>

    export default {
        props: {
            value: {
                type: [String, Number],
                require: true
            },

            type: {
                type: String,
                require: true
            }
        },

        methods: {
            emitChangedValue(diff) {
                if ((this.value === 0 && diff === -1)
                || (this.value >= 11 && diff === 1 && this.type === 'hours')
                || (this.value >= 59 && diff === 1 && this.type === 'minutes')) return;
                if (this.type !== 'AMPM') this.$emit('input', this.value+diff);
                else this.$emit('input', (this.value === 'pm')? 'am': 'pm');
            },
        }
    }
</script>

