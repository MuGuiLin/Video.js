<template>
  <section>
    <!-- <video-player
    class="video-player-box vjs-custom-skin"
    ref="videoPlayer"
    :options="playerOptions"
    :playsinline="true"
    customEventName="customstatechangedeventname"
    @play="onPlayerPlay($event)"
    @pause="onPlayerPause($event)"
    @ended="onPlayerEnded($event)"
    @waiting="onPlayerWaiting($event)"
    @playing="onPlayerPlaying($event)"
    @loadeddata="onPlayerLoadeddata($event)"
    @timeupdate="onPlayerTimeupdate($event)"
    @canplay="onPlayerCanplay($event)"
    @canplaythrough="onPlayerCanplaythrough($event)"
    @statechanged="playerStateChanged($event)"
    @ready="playerReadied"
    ></video-player>-->

    <video-player
      class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
    ></video-player>
    <br />

    <video-player
      class="video-player vjs-custom-skin"
      ref="videoPlayer2"
      :playsinline="true"
      :options="playerOptions2"
    ></video-player>
  </section>
</template>

<script>
import { videoPlayer } from "vue-video-player";
// import swf from "../../static/video-js.swf";
import "videojs-flash";
import "video.js/dist/video-js.css";

export default {
  name: "Video",
  components: {
    videoPlayer
  },
  data() {
    return {
      player: null,
      playerOptions: {
        live: true,
        autoplay: true,
        controls: true,
        language: "zh-CN",
        preload: "auto",
        techOrder: ["flash"],
        flash: {
          hls: { withCredentials: false },
          swf: "https://iniditortest.smgtech.net/mupiao/static/video-js.swf"
        },
        sources: [
          {
            // type: "rtmp/flv",
            src: "rtmp://elbofang.smgtech.net/live/elearning"
          },
          {
            // type: "flv/flv",
            src: "http://elbofang.smgtech.net/live/elearning.flv"
          }
        ],
        poster: "../assets/logo.png",
        fluid: true,
        notSupportedMessage: "网络异常，请稍后再试！"
      },
      playerOptions2: {
        live: true,
        autoplay: true,
        controls: true,
        language: "zh-CN",
        preload: "auto",
        sources: [
          {
            src: "http://elbofang.smgtech.net/live/elearning.m3u8"
          },
          {
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }
        ],
        poster: "../assets/logo.png",
        fluid: true,
        notSupportedMessage: "网络异常，请稍后再试！"
      }
    };
  },
  mounted() {
    console.log("this is current player instance object", this.player);
  },

  computed: {
    // player() {
    //   return this.$refs.videoPlayer.player;
    // }
  },

  methods: {
    // listen event
    onPlayerPlay(player) {
      console.log("player play!", player);
    },
    onPlayerPause(player) {
      console.log("player pause!", player);
    },

    playerStateChanged(playerCurrentState) {
      console.log("player current update state", playerCurrentState);
    },

    // player is ready
    playerReadied(player) {
      console.log("the player is readied", player);
    }
  }
};
</script>

<style scoped>
.video-js .vjs-big-play-button {
  width: 2em;
  height: 2em;
  line-height: 2em;
  border-radius: 1em;
}
</style>