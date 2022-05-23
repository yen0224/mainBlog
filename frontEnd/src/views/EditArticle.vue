<template>
  <form action="/articles/{{post.id}}?method=PUT" method="POST">
    <form-field />
  </form>
</template>

<script>
// @ is an alias to /src
import formField from "@/components/formField.vue";

export default {
  name: "formField",
  components: {
    formField,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async getData() {
      try {
        let response = await fetch("http://localhost:5555/articles" + post.id);
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