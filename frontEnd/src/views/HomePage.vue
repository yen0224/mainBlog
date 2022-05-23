<template>
  <div class="flex flex-col pt-14 ease-in-out duration-1000">
    <div v-for="post in posts" v-bind:key="post.id" class="group">
      <div class="wrap-collabsible">
        <input id="collapsible" class="toggle" type="checkbox" />
        <label for="collapsible" class="lbl-toggle text-center">
          <div class="card mb-0">
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
        <div
          class="
            collapsible-content
            transition
            transform
            hidden
            group-hover:block
          "
        >
          <div class="content-inner">
            <p v-html="post.sanitizedHtml"></p>
          </div>
          <div class="control">
            <a :href="'articles/edit/' + post._id" class="btn btn-info">
              Edit
            </a>
            <form
              :action="'/api/articles/' + post._id + '?_method=DELETE'"
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

