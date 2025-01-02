<script setup>
  import GavelLogo from "./GavelLogo.vue";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import {
      faFacebook,
      faInstagram,
      faLinkedin,
      faWordpress,
  } from "@fortawesome/free-brands-svg-icons";
  // TODO: Check svg core bundle size
  library.add(faInstagram, faFacebook, faLinkedin);

  const socialMedia = [
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
      {
        profile: "Website",
        icon: faWordpress,
        link: "http://gavel.mrt.ac.lk/",
      },
    ]

  const contactsPersons = {
      title: "Contact",
      links: [
      {
          text: "Chemini Mallikarachchi : +94 70 159 6603",
          href: "tel: +94 70 159 6603",
      },
      {
          text: "Ameera Weerasuriya : +94 71 135 6855",
          href: "tel: +94 71 135 6855"
      },
      {
          text: "Email : speecholympiadxvi@gmail.com",
          href: "mailto: speecholympiadxvi@gmail.com"
      },
      ],
  }
</script>

<template>
  <footer class="bg-inherit text-white backdrop-brightness-50 backdrop-blur-sm relative">
    <!-- <div class="absolute w-full h-full p-7">
        <div class="top-2 left-3 rotate-45 w-10 h-1 bg-white rounded-lg">2</div>
    </div> -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Logo -->
        <div class="flex flex-col items-center md:items-start">
          <GavelLogo />
        </div>

        <!-- Contact Persons -->
        <div class="text-center">
          <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
          <ul class="space-y-2">
              <li v-for="link in contactsPersons.links" :key="link.text" class="border-0 p-0">
                  <a :href="link.href" class="text-white">{{ link.text }}</a>
              </li>
          </ul>
        </div>

        <!-- Social Links --> 
        <div class="flex flex-col items-center">
          <h3 class="text-xl font-semibold mb-4">Follow Us</h3>
          <div class="flex space-x-4 text-4xl">
            <a v-for="s in socialMedia" :href="s.link" class="text-white">
              <font-awesome-icon :icon="s.icon" class="hover:text-gray-500 transition-colors"/>
              <span class="sr-only">{{ s.profile }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <p class="text-sm w-full text-gray-500 text-center">
      © Speach Olympiad 2025.
    </p>
  </footer>
</template>
  
<style scoped>

</style>