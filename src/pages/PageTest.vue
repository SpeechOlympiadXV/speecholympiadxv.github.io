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

            <div v-if="post" class="content px-4 py-4">
                <button @click="closePost"
                    class="bg-gray-800 text-white p-4 rounded-full hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M9.293 5.293a1 1 0 011.414 1.414L7.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 010 1.414z"
                            clip-rule="evenodd" />
                    </svg>


                </button>

                <img v-if="post.coverImage" :src="imageUrlFor(post.coverImage)" class="w-full h-auto" />

                <!-- <button @click="goBackToMenu"
                    class="bg-orange-500 hover:bg-orange-700 absolute top-2 right-2 text-white text-xl p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform rotate-180" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 11-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>

                </button> -->
                <br />
                <h1 class="text-5xl">{{ post.title }}</h1>
                <br />

                <SanityBlocks :blocks="blocks" />
                <!-- <div class="content">
                    <BlockContent :blocks="child" v-for="child in blocks" v-bind:key="child._id" />
                </div> -->
                <h6 class="flex items-center ">
                    By:

                    {{ post.name }}
                    <img v-if="post.authorImage" :src="imageUrlFor(post.authorImage)"
                        class="w-16 h-16  rounded-full ml-2" />
                </h6>

                <h2 class="text-2xl py-4">Blog Photos</h2>
                <!-- Gallery -->
                <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    <div v-for="(imageC, index) in post.images" :key="index" class="image-container">
                        <img @click="showImageModal(convertImageUrl(imageC.image.asset._ref))"
                            :src="convertImageUrl(imageC.image.asset._ref)" class="w-full h-auto rounded cursor-pointer" />
                    </div>
                </div>

                <!-- Image Modal -->
                <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50">
                    <div class="modal-overlay fixed inset-0 bg-black opacity-50"></div>

                    <div class="modal-container bg-transparent mx-auto rounded-lg p-4 max-w-screen-lg">
                        <!-- Close Button -->
                        <button @click="closeImageModal"
                            class=" bg-amber-800 text-white p-2 m-2 rounded-full hover:bg-orange-700 hover:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <!-- Display the clicked image -->
                        <img :src="modalImageUrl" class="w-full max-h-96 mx-auto" />
                    </div>
                </div>


            </div>
        </div>
        <div v-if="loadBlog" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-4 w-full">
            <div v-for="post in posts" :key="post._id" class="post-item">
                <div
                    class="max-w-sm border mt-4 border-gray-200 rounded-lg shadow bg-gray-800 bg-opacity-25 border-gray-700">
                    <a href="#">
                        <img class="w-full h-auto" :src="imageUrlFor(post.image)" alt="" />
                    </a>
                    <div class="p-2">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{{ post.title
                            }}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-400">{{ post.description }}</p>
                        <a @click="handleReadmore(post.slug.current)"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none  bg-amber-600 hover:bg-amber-700 focus:ring-amber-800">
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
    name: "Blogs",
    props: {
        limit: {
            type: Number,
            default: 50 // Set a default value here if needed
        }
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
            showModal: false, // To control whether the modal is shown or hidden
            modalImageUrl: '',

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
        showImageModal(imageUrl) {
            this.modalImageUrl = imageUrl;
            this.showModal = true;
        },
        closeImageModal() {
            this.modalImageUrl = '';
            this.showModal = false;
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
        closePost() {
            console.log("clicked")
            this.slug = null;
            this.loadBlog = true;
            this.post = null;
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