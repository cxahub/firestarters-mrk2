<template>
  <div v-if="pending && pending2">
    <UiLoader />
  </div>
  <div v-else>
    <div class="block float-left w-full mx-auto">
      <div class="grid grid-cols-3">
        <div class="col-span-3 pt-4">
          <h1 class="text-3xl text-fs-yellow font-bold uppercase py-2">
            Insight Stats
          </h1>
        </div>
        <div
          class="text-xl text-center text-white bg-fs-light-gray bg-opacity-20 border-r-2 py-2"
        >
          <span class="block text-5xl font-medium py-2">{{
            analyticsPageView.length
          }}</span>
          Views
        </div>
        <div
          class="text-xl text-center text-white bg-fs-light-gray bg-opacity-20 border-r-2 py-2"
        >
          <span class="block text-5xl font-medium py-2">{{
            UserStats()[1]
          }}</span>
          Shares
        </div>
        <div
          class="text-xl text-center text-white bg-fs-light-gray bg-opacity-20 py-2"
        >
          <span class="block text-5xl font-medium py-2">{{
            UserStats()[0]
          }}</span>
          Likes
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ref_id: {
      type: Number,
      default: 0,
    },
  },

  setup(props) {
    //Get runtime config.
    const config = useRuntimeConfig();

    //Fetch data.
    const { pending, data: analyticsPageView } = useLazyFetch(
      config.public.VUE_APP_API_URL +
        "/" +
        config.public.VUE_APP_API_ANALYTICS_PAGE_VIEW_ROUTE,
      {
        query: {
          ref_id: props.ref_id,
        },
      }
    );

    //Fetch data.
    const { pending: pending2, data: userCommentStats } = useLazyFetch(
      config.public.VUE_APP_API_URL +
        "/" +
        config.public.VUE_APP_API_USER_COMMENT_ROUTE,
      {
        query: {
          ref_id: props.ref_id,
          uct_id: 1,
          status_id: 1,
        },
      }
    );

    function UserStats() {
      this.likeCount = 0;
      this.shareCount = 0;
      for (let i = 0; i < this.userCommentStats.length; i++) {
        this.likeCount += parseInt(this.userCommentStats[i].uc_like_count);
        this.shareCount += parseInt(this.userCommentStats[i].uc_share_count);
      }
      return [this.likeCount, this.shareCount];
    }

    return {
      config,
      analyticsPageView,
      userCommentStats,
      UserStats,
      pending,
      pending2,
    };
  },
};
</script>
