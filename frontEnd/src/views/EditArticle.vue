<template>
  <form action="http://localhost:5555/articles" method="POST">
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