{/* <template>
    <div class="star-rating">
        <div class="flex absolute">
            <div
                class="star"
                @click="() => { setRating(star) }"
                v-for="star in 5"
                :key="star"
            >
                <svg
                    viewBox="0 0 19.8 19.8"
                    class="star-background"
                >
                    <path
                        d="M9.9,1 L12.5,7.7 L19.8,7.7 L14.15,12.3 L16.6,19 L9.9,14.6 L3.2,19 L5.65,12.3 L0,7.7 L7.3,7.7 Z"
                        fill="#eee"
                        :stroke="(star === selectedRating ? 'gray' : 'transparent')"
                        stroke-opacity="0.25"
                        stroke-width="1"
                    ></path>
                </svg>
            </div>
        </div>
        <div class="flex">
            <div
                class="star relative"
                @click="() => { setRating(star) }"
                v-for="star in 5"
                :key="star"
            >
                <svg
                    viewBox="0 0 19.8 19.8"
                    class="star-fill"
                    :style="{
                        clipPath: `inset(0 ${fillWidth(star)} 0 0)`,
                    }"
                >
                    <path
                        d="M9.9,1 L12.5,7.7 L19.8,7.7 L14.15,12.3 L16.6,19 L9.9,14.6 L3.2,19 L5.65,12.3 L0,7.7 L7.3,7.7 Z"
                        fill="gold"
                        :stroke="(star === selectedRating ? '#c6a700' : 'transparent')"
                        stroke-opacity="0.25"
                        stroke-width="1"
                    ></path>
                </svg>
            </div>
        </div>
        <p v-if="formattedPostRating === null" class="animated-background min-w-[35px] text-center">0.00</p>
        <p v-else class="min-w-[35px] text-center">{{ formattedPostRating }}</p>
    </div>
</template>

<script setup>
import { useBlogStore } from '../../stores/blogStore'
const {
    getRatingForPost,
    updatePostRating,
} = useBlogStore()

const props = defineProps({
    postId: {
        type: String,
        required: false,
        default: () => '',
    }
})

const rating = ref(null)

const formattedPostRating = computed(() => {
    const rt = getRatingForPost(props.postId)

    rating.value = rt

    if (rt !== null && rt != undefined) {
        return (rt * 1).toFixed(2)
    }

    return null
})

const selectedRating = ref(0)

const setRating = async (newRating) => {
    selectedRating.value = newRating

    updatePostRating(props.postId, newRating);
}

const fillWidth = (star) => {
    if (star <= Math.floor(rating.value)) {
        return '0%'
    }

    if (star === Math.ceil(rating.value)) {
        return `${100 - (rating.value % 1) * 100}%`
    }

    return '100%'
}
</script>

<style scoped>
.star {
    margin-right: 5px;
}

.star svg {
    width: 20px !important;
    height: 20px !important;
    min-width: 20px !important;
    min-height: 20px !important;
    max-width: 20px !important;
    max-height: 20px !important;
}

.star:last-child {
    margin-right: 10px;
}

.star-rating {
    display: flex;
    align-items: center;
}

.star-rating .star {
    cursor: pointer;
}

.star-rating .star .star-background {
    fill: #eee;
}

.star-rating .star .star-fill {
    fill: gold;
    clip-path: inset(0 0 0 0);
    transition: clip-path 0.25s ease-in-out;
}

@keyframes placeHolderShimmer {
    0% {
        background-position: -800px 0
    }
    100% {
        background-position: 800px 0
    }
}

.animated-background {
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: linear-gradient(to right, #eee 8%, #fff 18%, #eee 33%);
    background-size: 800px 104px;
    position: relative;
    background-color: #eee;
    border-radius: 4px;
    color: transparent;
    display: block !important;
}
</style> */}

export const Stars = ({ postId }: any) => {
    return <>{ postId }</>
}
