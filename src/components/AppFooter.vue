<script>
import SOLogo from "./SOLogo.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
// TODO: Check svg core bundle size
library.add(faInstagram, faFacebook, faLinkedin);

export default {
  components: {
    SOLogo,
    FontAwesomeIcon,
  },
  data() {
    return {
      footer_menus: [
        {
          title: "Contact",
          links: [
            {
              text: "Umesha Amodama : +94 77 067 6760",
              href: "tel: +94 77 067 6760",
            },
            {
              text: "Inodee Fernando : +94 76 603 3004",
              href: "tel: +94 76 603 3004"
            },
            {
              text: "Email : speecholympiadxv@gmail.com",
              href: "mailto: speecholympiadxv@gmail.com"
            },
          ],
        },
      ],
      social_media_profiles: [
        {
          profile: "instagram",
          icon: faInstagram,
          link: "https://www.instagram.com/gavelmora_",
        },
        {
          profile: "facebook",
          icon: faFacebook,
          link: "https://www.facebook.com/gavelmora/",
        },
        {
          profile: "linkedin",
          icon: faLinkedin,
          link: "https://www.linkedin.com/company/gavel-club-of-university-of-moratuwa/",
        },
      ],
    };
  },
};
</script>


<template>
  <div class="container-fluid app-footer">
    <div class="row">
      <div
          class="
          col-12 col-md-3
          d-flex
          align-items-center
          justify-content-center justify-content-md-start
          my-md-0 my-4
        "
      >
        <SOLogo/>
      </div>
      <div class="col-12 col-md-9">
        <div class="row justify-content-end">
          <div
              v-for="menu in footer_menus"
              class="col-md-4 col-12 text-center text-md-start"
          >
            <div class="footer-menu-title mt-2 mb-1">{{ menu.title }}</div>
            <div class="row">
              <div v-for="link in menu.links" class="col-12">
                <a :href="link.href" class="footer-link">
                  <span class="">{{ link.text }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <hr/>
      </div>
    </div>
    <div class="row">
      <div
          class="
          col-md-4 col-12
          d-flex
          justify-content-center justify-content-md-start
          align-items-center
          order-last order-md-first
          my-2 my-lg-0
        "
      >
        <span>© Speech Olympiad 2022</span>
      </div>
      <div class="col-md-8 col-12 order-first order-md-last">
        <div class="row">
          <div
              class="
              col-12 col-md-6
              my-2 my-md-0
              d-flex
              justify-content-center justify-content-md-end
              align-items-center
            "
          >
            <span>Follow us on</span>
          </div>
          <div
              v-for="social_media in social_media_profiles"
              class="col my-2 my-md-0 d-flex justify-content-center"
          >
            <a :href="social_media.link">
              <FontAwesomeIcon
                  :icon="social_media.icon"
                  size="2x"
                  class="icon-color"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-menu-title {
  font-weight: 600;
  font-size: 1.2em;
}

.svg-inline--fa:hover {
  color: var(--vt-c-indigo);
}

.icon-color {
  color: var(--color-text);
}

.footer-link{
  color:var(--color-text);
  text-decoration: none;
  font-style: italic;
}
.footer-link:hover{
}

.app-footer {
  margin-top: auto;
}
</style>

