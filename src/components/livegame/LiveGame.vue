<template>
  <div
    class="w-full flex flex-col items-start justify-start gap-4"
    v-if="!loading"
  >
    <div class="w-full h-[25vh] md:h-[50vh] lg:h-[72vh]">
      <img
        :src="currentLiveGame.image"
        alt="main-event"
        class="w-full h-full object-cover"
        v-if="!currentLiveGame.video"
      />
      <video controls autoplay muted="false" class="w-full h-full object-cover">
        <source :src="currentLiveGame.video" type="video/mp4" />
      </video>
    </div>
    <div class="flex flex-row items-center justify-start gap-2">
      <div class="w-2 h-2 rounded-full bg-red-600"></div>
      <span class="text-red-600 text-sm font-semibold uppercase">Live</span>
    </div>
    <h3 class="text-xl font-semibold">{{ currentLiveGame.title }}</h3>

    <div
      class="flex flex-col items-start justify-start lg:flex-row lg:justify-between w-full gap-4"
    >
      <div
        class="flex flex-col items-start justify-start gap-6 w-full md:flex-row md:items-center lg:w-1/2"
      >
        <div class="text-gray-800">7,000 Watching Now</div>
        <div class="text-gray-800">Started on {{ startDate }}</div>
      </div>
      <div
        class="flex flex-row items-start justify-end gap-6 w-full text-lg lg:w-1/2 lg:items-center"
      >
        <button
          @click="likeClicked"
          class="flex flex-row items-center justify-start gap-2"
          :class="{ 'text-primary-hover': like }"
        >
          <Icon><ThumbsUp /></Icon> <span>{{ likeNumber }}</span>
        </button>
        <button
          @click="dislikeClicked"
          class="flex flex-row items-center justify-start gap-2"
          :class="{ 'text-primary-red': dislike }"
        >
          <Icon><ThumbsDown /></Icon><span>{{ dislikeNumber }}</span>
        </button>
        <button @click="shareClicked">
          <Icon><Share /></Icon>
        </button>
      </div>
    </div>
    <div class="flex flex-col items-start justify-start gap-4">
      <p class="show-less" :class="{ 'show-more': showMore }">
        {{ currentLiveGame.description }}
      </p>
      <button
        class="uppercase font-semibold text-gray-800 text-sm"
        @click="showMore = !showMore"
      >
        <span v-if="!showMore"> Show More</span>
        <span v-else> Show Less</span>
      </button>
    </div>
    <div class="h-[0.5px] w-full bg-black"></div>
  </div>
  <div v-else></div>
</template>
<script setup>
import { Icon } from "@vicons/utils";
import { ThumbsUp, ThumbsDown, Share } from "@vicons/fa";
import { onMounted, ref } from "vue";
import moment from "moment";
import { liveGameData } from "@/utils/liveGameData";
import { useRoute } from "vue-router";
const like = ref(false);

const dislike = ref(false);

const likeNumber = ref(200);
const dislikeNumber = ref(5);

const showMore = ref(false);

const startDate = ref(null);

const route = useRoute();

const currentLiveGame = ref(null);

const emits = defineEmits(["shareClicked"]);

const loading = ref(true);
onMounted(() => {
  startDate.value = moment().format("DD/MM/YYYY [at] HH:mm");

  currentLiveGame.value = liveGameData.filter(
    (liveGame) => liveGame.id === Number(route.params.id)
  )[0];

  loading.value = false;
});

const likeClicked = () => {
  if (dislike.value) {
    dislikeNumber.value -= 1;
  }
  if (like.value) {
    likeNumber.value -= 1;
  } else {
    likeNumber.value += 1;
  }
  like.value = !like.value;
  dislike.value = false;
};

const dislikeClicked = () => {
  if (like.value) {
    likeNumber.value -= 1;
  }
  if (dislike.value) {
    dislikeNumber.value -= 1;
  } else {
    dislikeNumber.value += 1;
  }
  dislike.value = !dislike.value;
  like.value = false;
};

const shareClicked = () => {
  emits("shareClicked");
};
</script>

<style scoped>
.show-less {
  width: 100%;
  height: 46px;
  overflow-y: hidden;
  text-overflow: ellipsis;
}
.show-more {
  height: 100%;
}
</style>
