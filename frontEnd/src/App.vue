<template>
  <nav class="fixed w-full h-14 flex flex-row justify-between">
    <div class="left-col w-1/4">
      <router-link to="/">
        <h1 class="my-4 pl-4 font-semibold">OwOb Blog</h1>
      </router-link>
    </div>

    <div class="right-col w-3/4 flex flex-row flex-nowrap justify-end">
      <h1 class="m-4">Hi, 歡迎回來</h1>
      <router-link to="/new" class="m-4 hover:bg-gray-500">
        <span>新文章</span>
      </router-link>
      <router-link to="/auth" class="m-4 hover:bg-gray-500"
        >登入登出</router-link
      >
    </div>
  </nav>
  <!-- <button @click="getList">getList</button> -->
  <router-view />
  <!-- original contents 
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
</template>

