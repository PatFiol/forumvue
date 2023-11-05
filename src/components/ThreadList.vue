<template>
  <div class="col-full">

    <div class="thread-list">

        <h2 class="list-title">Threads</h2>

        <div v-for="thread in threads"
          :key="thread.id"
          class="thread">
            <div>
                <p>
                    <a href="#">{{ thread.title }}</a>
                </p>
                <p class="text-faded text-xsmall">
                    By <a href="#">{{
                      userById(thread.userId).name
                    }}</a>, {{ thread.publishedAt }}.
                </p>
            </div>

            <div class="activity">
                <p class="replies-count">
                    1 reply{{ thread.posts.length }} replies
                </p>

                <img class="avatar-medium" src="userById(thread.userId).avatar" alt="">

                <div>
                    <p class="text-xsmall">
                        <a href="#">{{ userById(thread.userId).avatar }}</a>
                    </p>
                    <p class="text-xsmall text-faded">{{ thread.publishedAt }}</p>
                </div>
            </div>
        </div>

    </div>

</div>
</template>

<script>
import dataSource from '@/data.json'
export default {
  name: 'PageHome',
  props: {
    msg: String
  },
  data () {
    return {
      categories: dataSource.categories,
      forums: dataSource.forums,
      posts: dataSource.posts,
      threads: dataSource.threads,
      users: dataSource.users
    }
  },
  methods: {
    postById (postId) {
      return this.posts.find((p) => p.id === postId)
    },
    userById (userId) {
      return this.users.find((p) => p.id === userId)
    }
  }
}

</script>

<style scoped>
.thread-list {
  padding: 0;
  background-color: white;
}

.thread-list .thread {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0 5px 20px;
  min-height: 45px;
}

.thread-list .thread:nth-child(odd) {
  background: rgba(73, 89, 96, 0.06);
  border-bottom-left-radius: 20px;
}

.thread-list .thread:last-child {
  border-bottom-left-radius: 0;
}

.thread-list .thread .replies-count {
  flex-basis: 35%;
}

.thread-list .thread .activity {
  flex-basis: 35%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.thread-list .thread .activity .avatar-medium {
  margin-right: 10px;
}

.thread-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-title {
  background-color: #263959;
  border-bottom-left-radius: 20px;
  color: #f5f8fe;
  font-weight: 100;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  position: relative;
  padding: 10px 20px;
  margin: 5px;
}

.list-title a {
  color: white;
}

.list-title a:hover {
  color: #89c6af;
}
</style>