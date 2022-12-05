<script>
import axios from "axios";

const baseUrl = "https://yn0qym.deta.dev/polls/vote/";

export default {
  data() {
    return {
      voteKey: "",
      contestant_id: 0,
      contestants: [
        { contestantName: "Amirthavarshini", contestant_id: 1 },
        { contestantName: "Malintha", contestant_id: 2 },
        { contestantName: "Selani", contestant_id: 3 },
        { contestantName: "Thulasithan", contestant_id: 4 },
        { contestantName: "Dulmi", contestant_id: 5 },
      ],
      keyFound: false,
    };
  },
  methods: {
    handleVote() {
      const voteURL = baseUrl + this.voteKey;
      const body = {
        key: this.voteKey,
        contestant_id: this.contestant_id,
      };
      const config = {
        headers: {
          "X-API-KEY": "zzYUCJa9.dGgfaCYm6kv1FXHdBkmwbt-19vNYxA6zE",
          "Content-Type": "application/json",
        },
      };
      axios
        .post(voteURL, body, config)
        .then((response) => {
          if (response.status === 200) {
            alert("Success! " + response.data.Message);
            this.voteKey = "";
            window.location.href = window.location.href.split("#")[0];
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            alert(err.response.data.Error);
            this.voteKey = "";
          } else if (err.response.status === 400) {
            alert("Invalid Vote");
          }
        });
    },
    getVoteDisabled(voteKey, contestant_id) {
      return voteKey.length < 4 || contestant_id === 0;
    },
    getSelectDisabled(voteKey) {
      return !(voteKey.length >= 4);
    },
  },
};
</script>


<template>
  <main>
    <form>
      <div class="mb-3">
        <label for="voteKey" class="form-label">Vote Key</label>
        <input
          type="text"
          class="form-control"
          id="voteKey"
          v-model="voteKey"
          aria-describedby="voteKey"
        />
        <div id="voteKeyHelp" class="form-text">
          Contact the organizing committee to obtain a key
        </div>
      </div>
      <div
        class="mb-3 form-check"
        v-for="(item, index) in contestants"
        :key="index"
      >
        <input
          class="form-check-input"
          type="radio"
          name="contestantsRadio"
          :id="`contestantsRadio${index}`"
          :value="item.contestant_id"
          :disabled="getSelectDisabled(voteKey)"
          v-model="contestant_id"
        />
        <label class="form-check-label" :for="`contestantsRadio${index}`">
          {{ item.contestantName }}
        </label>
      </div>
      <button
        type="button"
        class="btn btn-primary"
        :disabled="getVoteDisabled(voteKey, contestant_id)"
        @click="handleVote"
      >
        Vote
      </button>
    </form>
  </main>
</template>

<style scoped>
</style>