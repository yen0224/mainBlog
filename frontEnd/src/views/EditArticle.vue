<template>
  <form action="/articles/{{post.id}}?method=PUT" method="POST">
    <form-field />
  </form>
</template>

<script>
// @ is an alias to /src
import formField from "@/components/formField.vue";

export default {
  name: "HomeView",
  components: {
    formField,
  },
};
</script>