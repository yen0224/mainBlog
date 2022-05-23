<template>
  <div class="flex flex-col">
    <div v-for="post in posts" v-bind:key="post.id">
      <div class="wrap-collabsible">
        <input id="collapsible" class="toggle" type="checkbox" />
        <label for="collapsible" class="lbl-toggle">
          <div class="card">
            <div class="card-body">
              <h2 class="article-title">
                {{ post.title }}
                <!-- <router-link :to="'/articles/' + post.slug">
              {{ post.title }}
            </router-link> -->
              </h2>
              <div class="text-sm text-slate-400 text-muted mb-2">
                {{ post.createdAt }}
              </div>
              <hr />
              <div class="article-desc mb-2">
                {{ post.id }}
                {{ post.description }}
              </div>
            </div>
          </div>
        </label>
        <div class="collapsible-content">
          <div class="content-inner">{{ post.sanitizedHtml }}</div>
          <div class="control">
            <a :href="'articles/edit/' + post._id" class="btn btn-info"
              >Edit {{ post.slug }}</a
            >
            <form
              :action="
                'http://localhost:5555/articles/' + post._id + '?_method=DELETE'
              "
              method="POST"
              class="d-inline"
            >
              <button type="submit" class="btn btn-danger">
                <a href="http://localhost:8080/" style="display: block">
                  Delete
                </a>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
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
        let response = await fetch("http://localhost:5555");
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

