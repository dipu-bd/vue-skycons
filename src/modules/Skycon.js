import Skycons from "./skycons.js";
import { h as _h, defineComponent, ref, toRefs, getCurrentInstance, onMounted, computed, watch, isVue3 } from "vue-demi";

export default defineComponent({
    name: "Skycon",
    props: {
        // Weather condition
        condition: {
            type: String,
            required: true
        },

        // Icon size
        size: {
            type: [Number, String],
            default: 64
        },

        // Icon color
        color: {
            type: String,
            default: "black"
        },

        // Start with paused animation
        paused: {
            type: Boolean,
            default: false
        },

        // The animation speed
        speed: {
            type: [Number, String],
            default: 1
        }
    },
    setup(props, context) {
        const { emit } = context
        const vm = getCurrentInstance();
        const h = _h.bind(vm);

        const { condition, size, color, speed } = toRefs(props)
        const { paused } = props

        const width = computed(() => "" + size.value)
        const height = computed(() => "" + size.value)
        const icon = computed(() => condition.value.toUpperCase().replace(/[\s.-]/g, "_"))

        const canvas = ref(null)

        const init = () => {
            const skycons = new Skycons({
                color: color.value,
                speed: speed.value
            });
            const dom = canvas.value || vm?.refs?.['canvas'] || vm.proxy.$refs['canvas']
            skycons.set(dom, Skycons[icon.value]);
            if (!paused) skycons.play();
            emit("load", buildWrapper(skycons));
        }

        const buildWrapper = (skycons) => {
            const wrapped = {};
            wrapped.paused = !skycons.interval;
            wrapped.play = () => {
                skycons.play();
                wrapped.paused = false;
            };
            wrapped.pause = () => {
                skycons.pause();
                wrapped.paused = true;
            };
            return wrapped;
        }


        onMounted(() => {
            init()
        })

        watch([size, color, condition, speed], init)

        return () => h('canvas', {
            ref: isVue3 ? canvas : 'canvas',
            width: width.value,
            height: height.value,
            dataCondition: condition.value,
            attrs: {
                width: width.value,
                height: height.value,
            }
        })
    }
})