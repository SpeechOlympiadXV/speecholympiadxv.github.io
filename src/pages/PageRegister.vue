<template>
  <div class="w-full flex justify-center items-center mt-10 mb-9">
    <div
      class="w-[90%] md:w-[80%] bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm rounded-2xl p-8 shadow-2xl"
    >
      <h2 class="text-3xl lg:text-4xl font-semibold text-white tracking-[-2px] leading-2 w-[80%]">
        Register Now
      </h2>
      <p class="mt-4 text-gray-300 leading-6 text-left text-lg font-thin">
        Registrations for
        <span class="font-bold text-[#EDC001]">Speech Olympiad</span> are open now.Discover the light within you
      </p>

      <form @submit.prevent="handleSubmit" class="mt-6 space-y-4">
        <div>
          <p class="text-white mb-1">First Name</p>
          <input
            v-model="firstName"
            type="text"
            placeholder="First Name"
            class="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        <div>
          <p class="text-white mb-1">Last Name</p>
          <input
            v-model="lastName"
            type="text"
            placeholder="Last Name"
            class="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        <div>
          <p class="text-white mb-1">Name on Certificate</p>
          <input
            v-model="nameOnCertificate"
            type="text"
            placeholder="Name as it should appear on certificate"
            class="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        <div class="relative">
          <p class="text-white mb-1">Batch</p>
          <select
            v-model="batch"
            class="appearance-none w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 pr-10"
            required
          >
            <option disabled value="">Select Batch (21-24)</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
          </select>
          <div class="pointer-events-none absolute right-3 top-11 text-white">
            ▼
          </div>
        </div>

        <div class="relative">
          <p class="text-white mb-1">Faculty</p>
          <select
            v-model="faculty"
            class="appearance-none w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 pr-10"
            required
          >
            <option disabled value="">Select Faculty</option>
            <option>Faculty of Engineering</option>
            <option>Faculty of Management</option>
            <option>Faculty of Arts</option>
            <option>Faculty of Science</option>
            <option>Other</option>
          </select>
          <div class="pointer-events-none absolute right-3 top-11 text-white">
            ▼
          </div>
        </div>

        <div>
          <p class="text-white mb-1">Email</p>
          <input
            v-model="email"
            type="email"
            placeholder="Your Email"
            class="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        <div>
          <p class="text-white mb-1">Phone Number</p>
          <input
            v-model="phone"
            type="tel"
            placeholder="Your Phone Number"
            class="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full h-12 bg-[#a78e1d] text-gray-100 rounded-lg hover:bg-[#7d6c22] transition-colors hover:text-white font-bold text-xl disabled:opacity-50"
        >
          {{ loading ? 'Submitting...' : 'Submit Registration' }}
        </button>
      </form>

      <!-- Success/Error Messages -->
      <div v-if="successMessage" class="mt-4 p-3 bg-green-600 text-white rounded-lg">
        {{ successMessage }}
      </div>
      <div v-if="errorMessage" class="mt-4 p-3 bg-red-600 text-white rounded-lg">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv-FLRed5upxr_5t5lsfvxqY5qbm4IYBg",
  authDomain: "speach-olimpiad.firebaseapp.com",
  projectId: "speach-olimpiad",
  storageBucket: "speach-olimpiad.firebasestorage.app",
  messagingSenderId: "724170715421",
  appId: "1:724170715421:web:5472365d0b12cb0fee71f4",
  measurementId: "G-725FHF4G8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const firstName = ref('');
const lastName = ref('');
const nameOnCertificate = ref('');
const batch = ref('');
const faculty = ref('');
const email = ref('');
const phone = ref('');
const loading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const clearMessages = () => {
  setTimeout(() => {
    successMessage.value = '';
    errorMessage.value = '';
  }, 5000);
};

const handleSubmit = async () => {
  loading.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    // Add registration data to Firestore
    const docRef = await addDoc(collection(db, 'registrations'), {
      firstName: firstName.value,
      lastName: lastName.value,
      nameOnCertificate: nameOnCertificate.value,
      batch: batch.value,
      faculty: faculty.value,
      email: email.value,
      phone: phone.value,
      createdAt: serverTimestamp()
    });

    console.log('Registration submitted with ID: ', docRef.id);
    
    // Reset form
    firstName.value = '';
    lastName.value = '';
    nameOnCertificate.value = '';
    batch.value = '';
    faculty.value = '';
    email.value = '';
    phone.value = '';

    successMessage.value = 'Registration submitted successfully!';
    
  } catch (error) {
    console.error('Error submitting registration: ', error);
    errorMessage.value = 'Error submitting registration: ' + error.message;
  } finally {
    loading.value = false;
    clearMessages();
  }
};
</script>