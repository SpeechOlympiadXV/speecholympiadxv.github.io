<script>
import SOLogo from './SOLogo.vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
// TODO: Check svg core bundle size
library.add(faInstagram, faFacebook, faLinkedin)

export default {
  components: {
    SOLogo, FontAwesomeIcon
  },
  data() {
    return {
      footer_menus: [
        {
          title: 'Contact',
          items: ['Link 1', 'Link 2', 'Link 3']
        },
        {
          title: 'Contact',
          items: ['Link 1', 'Link 2', 'Link 3']
        }
      ],
      social_media_profiles: [
        {
          profile: 'instagram',
          icon: faInstagram,
          link: 'https://www.instagram.com/gavelmora'
        },
        {
          profile: 'facebook',
          icon: faFacebook,
          link: 'https://www.facebook.com/gavelmora/'
        },
        {
          profile: 'linkedin',
          icon: faLinkedin,
          link: 'https://www.linkedin.com/company/gavel-club-of-university-of-moratuwa/'
        }
      ]
    }
  }
}
</script>


<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-8 d-flex align-items-center
      justify-content-center justify-content-md-start my-md-0 my-4">
        <SOLogo/>
      </div>
      <div class="col-12 col-md-4">
        <div class="row justify-content-end">
          <div v-for="menu in footer_menus" class="col-md-4 col-12 text-center text-md-start">
            <div class="footer-menu-title mt-2 mb-1">{{ menu.title }}</div>
            <div v-for="item in menu.items">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-12 d-flex justify-content-center justify-content-md-start
      align-items-center order-last order-md-first my-2 my-lg-0">
        <span>© Speech Olympiad 2022</span>
      </div>
      <div class="col-md-8 col-12 order-first order-md-last">
        <div class="row">
          <div class="col-12 col-md-6 my-2 my-md-0
          d-flex justify-content-center justify-content-md-end align-items-center"><span>Follow us on</span></div>
          <div v-for="social_media in social_media_profiles" class="col my-2 my-md-0">
            <a :href="social_media.link">
              <FontAwesomeIcon :icon="social_media.icon" size="2x"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-menu-title {
  font-weight: 700;
}
</style>

