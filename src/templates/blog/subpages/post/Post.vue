<template>
  <div class="post">
    <main>
      <transition
        name="fade"
        mode="out-in"
        @enter="highlightCode">
        <section
          v-if="post"
          key="loaded"
          class="section">
          <div class="body">
            <div class="heading">
              <h1 class="blue-colored">{{ post.title }}</h1>
              <Metadata
                :timestamp="post.created"
                :tags="post.tags"/>
            </div>

            <div class="content" v-html="post.body"></div>

            <p class="footer secondary-colored">
              [W] Read this blog post on
              <a
                v-shortkey="['w']"
                :href="`${domain}/${post.slug}`"
                @shortkey="$navigateOutTo(`${domain}/${post.slug}`)">
                Write.as</a>.
            </p>
          </div>
        </section>

        <section
          v-else
          key="loading"
          class="centered section">
          <Spinner/>
        </section>
      </transition>
    </main>
  </div>
</template>

<script>
  import axios from 'axios'
  import prism from 'prismjs'

  import { Blog } from '@/templates/blog/Blog'

  import '@/styles/utils/prism.scss'

  /**
   * This is one blog post. It contains the complete content from the post,
   */
  export default {
    name: 'Post',
    components: {
      Spinner: Blog.Spinner,
      Metadata: Blog.Metadata
    },
    props: {
      /**
       * _the slug of the post to display_
       */
      slug: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        url: 'https://api.dhruvkb.now.sh/api/post',
        domain: 'https://dhruvkb.writeas.com',
        post: null
      }
    },
    watch: {
      /**
       * Reload the page and the post content when the slug changes.
       * @param {string} to - the new value of slug
       * @param {string} from - the old value of the slug
       */
      '$route.params.slug': function (to, from) {
        if (to !== from) { // No need to reload if nothing changes
          // Bring back the loading indicator
          this.post = null
          // Fetch new content from the API
          this.loadContent()
        }
      }
    },
    methods: {
      /**
       * Highlight code snippets using Prism.
       */
      highlightCode () {
        prism.highlightAll()
      },
      /**
       * Hit the serverless API for the portfolio and get the HTML content of
       * the blog. This HTML is automatically generated by Write.as from the
       * Markdown content of the post.
       */
      loadContent () {
        axios
          .get(this.url, {
            params: {
              slug: this.slug
            }
          })
          .then(response => {
            const { post } = response.data

            setTimeout(() => {
              this.post = post
            }, 1000)
          })
          .catch(() => {
            console.log('FAIL')
          })
      }
    },
    mounted () {
      this.loadContent()
    }
  }
</script>

<style scoped lang="scss" src="./Post.scss">
</style>
