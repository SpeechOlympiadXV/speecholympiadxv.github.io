<!-- <template>
    <div>
        <h1>
            {{ title[1].mainImage.asset._ref }}
        </h1>
        <img src={{urlFor(title[1].mainImage.asset._ref).width(200).url()}} />


    </div>
</template>
  
<script>
import { useSanityFetcher } from 'vue-sanity'
import imageUrlBuilder from '@sanity/image-url'
import client from './sanityClient'
export default {
    setup() {
        const builder = imageUrlBuilder(client)
        function urlFor(source) {
            return builder.image(source)
        }
        // OR use a factory function
        // const { data: title } = useSanityFetcher('*[_type == "post"].{title,body}')
        const { data: title } = useSanityFetcher(
            () => `*[_type == 'post']`
        )
        console.log(title)
        return { title, urlFor }
    },
}
</script> -->

<template>
    <div class="home ">
        <!-- <h1 class="text-center text-3xl">Blog Posts</h1> -->
        <br />
        <div v-if="slug">
            <div class="loading" v-if="loading2">Loading...</div>

            <div v-if="error" class="error">
                {{ error }}
            </div>

            <div v-if="post" class="content px-2 py-4">

                <img v-if="post.coverImage" :src="imageUrlFor(post.coverImage)" class="w-full h-auto" />
                <br />
                <h1 class="text-5xl">{{ post.title }}</h1>
                <br />

                <SanityBlocks :blocks="blocks" />
                <h6 class="flex items-center ">
                    <img v-if="post.authorImage" :src="imageUrlFor(post.authorImage)" class="w-16 h-16 rounded-full mr-2" />
                    By: {{ post.name }}
                </h6>


                <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    <div v-for="(imageC, index) in post.images" :key="index" class="image-container">
                        <img :src="convertImageUrl(imageC.image.asset._ref)" class="w-full h-auto rounded" />
                    </div>
                </div>


            </div>
        </div>
        <div v-if="loadBlog" class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div v-for="post in posts" :key="post._id" class="post-item">
                <div class="max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="w-full h-auto" :src="imageUrlFor(post.image)" alt="" />
                    </a>
                    <div class="p-2">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ post.title
                            }}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ post.description }}</p>
                        <a @click="handleReadmore(post.slug.current)"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  
<script>
import sanity from "../assets/client";
import AppTestimonialCard from "../components/AppTestimonialCard.vue";
import { SanityBlocks } from "sanity-blocks-vue-component";

import imageUrlBuilder from "@sanity/image-url";
import AppFeaturette from "../components/AppFeaturette.vue";
const imageBuilder = imageUrlBuilder(sanity);


export default {
    name: "Home",
    props: {
        limit: Number
    },
    data() {
        return {
            loading: true,
            loading2: true,
            loadBlog: true,
            slug: '',
            posts: [],
            post: [],
            blocks: [],
            limit: 50
        };
    },

    created() {
        this.fetchData();
    },
    components: {
        AppTestimonialCard, AppFeaturette, SanityBlocks
    },
    methods: {
        imageUrlFor(source) {
            return imageBuilder.image(source);
        },
        convertImageUrl(imageUrl) {
            // Replace "image-" with an empty string
            let modifiedUrl = imageUrl.replace("image-", "");

            // Replace the last "-" with a "."
            modifiedUrl = modifiedUrl.replace("-jpg", ".jpg");
            modifiedUrl = modifiedUrl.replace("-png", ".png");
            console.log('https://cdn.sanity.io/images/i32b0q2c/production/' + modifiedUrl)
            return 'https://cdn.sanity.io/images/i32b0q2c/production/' + modifiedUrl;
        },
        handleReadmore(slug) {
            console.log("button clicked" + slug)
            console.log(slug)
            const query = `*[slug.current == $slug] {
    _id,
    title,
    slug,
    body, 
   "image": mainImage{
    asset->{
    _id,
    url
  }
  },
  "coverImage": coverImage{
    asset->{
    _id,
    url
  }
  },
  "name":author->name,
  images,
  "authorImage":author->image
  }[0]
  `;
            this.slug = slug
            this.loadBlog = false;
            sanity.fetch(query, { slug: this.slug }).then(
                (post) => {
                    this.loading2 = false;
                    this.post = post;
                    this.blocks = post.body;
                    console.log(post.images[1].image.asset._ref)

                },
                (error) => {
                    this.error = error;
                }
            );
        },
        fetchData() {

            let query = `*[_type == "post"]{
    _id,
    title,
    slug,
    description,
    "image": mainImage{
    asset->{
    _id,
    url
  }
},

"name":author->name,

    excerpt
  }[0..${this.limit}]`;
            console.log(this.limit)

            this.error = this.post = null;
            this.loading = true;
            sanity.fetch(query).then(
                (posts) => {
                    this.loading = false;
                    this.posts = posts;
                    console.log(posts)

                },
                (error) => {
                    this.error = error;
                }
            );
        },
    },
};
</script>
  
<style >
.content {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 72em;
}

h1 {
    text-align: center;
}

h6 {
    color: #aaa;
    padding: 1em;
}

.image-container {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
}

.image-container:hover {
    transform: scale(1.05);
}

.image-expanded {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.image-expanded img {
    max-width: 90%;
    max-height: 90%;
}
</style>