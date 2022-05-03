<template>
  <div class="flex flex-col">
    <div v-for="post in posts" v-bind:key="post.id">
      <div class="card">
        <div class="card-body">
          <h2 class="article-title">
            <router-link to="/post/{{ post.id }}">{{ post.title }}</router-link>
          </h2>
          <div class="text-sm text-slate-400 text-muted mb-2">
            {{ post.created_at }}
          </div>
          <hr />
          <div class="article-desc mb-2">
            {{ post.description }}
          </div>
        </div>
      </div>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
    <button @click="getData">getData</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [],
    };
  },

  methods: {
    async getData() {
      try {
        let response = await fetch("http://localhost:5555/");
        this.posts = await response.json();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>

