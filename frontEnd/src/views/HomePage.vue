<template>
  <div class="flex flex-col pt-14 ease-in-out duration-1000">
    <div v-for="post in posts" v-bind:key="post._id" class="group">
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
            <button
              class="btn btn-primary"
              type="button"
              v-on:click="toggleModal(post._id)"
            >
              Edit
            </button>
            <form
              :action="
                'http://localhost:5555/articles/' + post._id + '?_method=DELETE'
              "
              method="POST"
              class="d-inline"
            >
              <button type="submit" class="btn btn-danger">Delete</button>
            </form>
          </div>
        </div>
      </div>
      <div
        v-if="showModal[post._id]"
        class="
          overflow-x-hidden overflow-y-auto
          fixed
          inset-0
          z-50
          outline-none
          focus:outline-none
          justify-center
          items-center
          flex
        "
      >
        <div class="relative w-auto my-6 mx-auto max-w-6xl">
          <!--content-->
          <div
            class="
              border-0
              rounded-lg
              shadow-lg
              relative
              flex flex-col
              w-full
              bg-white
              outline-none
              focus:outline-none
            "
          >
            <!--header-->
            <div
              class="
                flex
                items-start
                justify-between
                p-5
                border-b border-solid border-slate-200
                rounded-t
              "
            >
              <form
                :action="
                  'http://localhost:5555/articles/' + post._id + '?_method=PUT'
                "
                method="POST"
              >
                <div class="form-group flex flex-row w-full m-4 z-0">
                  <div class="w-1/5 border-0 border-blue">
                    <label for="title">Title</label>
                  </div>
                  <div class="w-4/5">
                    <input
                      required
                      :value="post.title"
                      type="text"
                      name="title"
                      id="title"
                      class="form-control w-11/12"
                    />
                  </div>
                </div>

                <button
                  class="
                    p-1
                    ml-auto
                    bg-transparent
                    border-0
                    text-black
                    opacity-5
                    float-right
                    text-3xl
                    leading-none
                    font-semibold
                    outline-none
                    focus:outline-none
                  "
                  v-on:click="toggleModal(post._id)"
                >
                  <span
                    class="
                      bg-transparent
                      text-black
                      opacity-5
                      h-6
                      w-6
                      text-2xl
                      block
                      outline-none
                      focus:outline-none
                    "
                  >
                    ×
                  </span>
                </button>

                <!--body-->

                <div class="relative p-6 flex-auto">
                  <p class="my-4 text-slate-500 text-lg leading-relaxed">
                    <textarea
                      class="form-control"
                      v-model="post.description"
                      rows="4"
                      id="description"
                      name="description"
                    ></textarea>
                  </p>
                  <p class="my-4 text-slate-500 text-lg leading-relaxed">
                    <textarea
                      required
                      v-model="post.markdown"
                      name="markdown"
                      id="markdown"
                      class="form-control"
                      rows="4"
                    ></textarea>
                  </p>
                </div>
                <!--footer-->
                <div
                  class="
                    flex
                    items-center
                    justify-end
                    p-6
                    border-t border-solid border-slate-200
                    rounded-b
                  "
                >
                  <button
                    class="btn"
                    type="button"
                    v-on:click="toggleModal(post._id)"
                  >
                    Close
                  </button>
                  <button class="btn" type="submit">Save Changes</button>
                </div>
              </form>
            </div>
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
      showModal: [],
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
    toggleModal: function (id) {
      this.showModal[id] = !this.showModal[id];
    },
  },
  created() {
    this.getData();
  },
};
</script>

