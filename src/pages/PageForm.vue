<!-- <template>
    <FormulateForm v-model="formValues">
        <FormulateInput name="name" label="What is your name?" validation="required" />
        <FormulateInput name="age" label="How old are you?" validation="required|number|max:120" />
        <FormulateInput type="submit" label="Sign up" />
    </FormulateForm>
</template>
  
<script>


export default {

    data() {
        return {
            formValues: {}
            // formData: {
            //     name: '',
            //     indexNumber: '',
            //     faculty: '',
            //     department: '',
            //     batch: '',
            //     mobileNumber: '',
            //     email: '',
            // },
        };
    },
    methods: {

        submitForm() {
            // Handle form submission here
            console.log(this.formValues);
        }
        //     async submitData() {
        //         try {
        //             const response = await fetch('https://script.google.com/macros/s/AKfycbzOtrCUWjKCMIiYxDPVAqr6HRr3Y-rngFSqVQQaV29GQffylHjkS7cTbUsL5tDclOxkcQ/exec', {
        //                 method: 'POST',
        //                 headers: {
        //                     'Content-Type': 'application/json'
        //                 },
        //                 body: JSON.stringify(this.formData)
        //             });

        //             if (response.ok) {
        //                 alert('Data submitted successfully!');
        //                 this.formData = {
        //                     name: '',
        //                     email: ''
        //                 };
        //             } else {
        //                 alert('Error submitting data.');
        //             }
        //         } catch (error) {
        //             console.error('Error:', error);
        //             alert('An error occurred.');
        //         }
        //     }
        // }
    }
};
</script>
   -->

<!-- 
<script setup>
const data = {
    text_2: 'Name',
    text_3: 'Index Number',
    airlines: ['american'],
    textarea_4: 'I like that our whole team can use it and it’s easy to customize.'
}
const airlines = {
    american: 'American Airlines',
    delta: 'Delta',
    easyjet: 'easyJet',
    jetblue: 'JetBlue',
    klm: 'KLM',
    lufthansa: 'Lufthansa',
}

async function handleSubmit() {
    await new Promise((r) => setTimeout(r, 400))
    alert('Thank you!')
}
</script>
   
<template>
    <FormKit type="form" :value="data" @submit="handleSubmit"
        form-class="selection:bg-grey-600 my-8 mx-auto w-full max-w-2xl bg-black-400 border-2 border-blue-400 p-6 shadow-lg rounded-lg"
        :submit-attrs="{
            'input-class': 'bg-grey-500 py-2 px-4 mt-4 rounded-md text-white'
        }">
        <div class="flex">
            <FormKit label="Name" :classes="{
                outer: 'mb-4 mr-2 w-1/2',
                inner: 'flex items-center shadow border border-gray-300 appearance-none rounded py-2 px-3 w-full text-gray-700 leading-tight focus-within:ring-4 focus-within:ring-green-500 focus-within:ring-opacity-50',
                prefixIcon: 'h-5 w-5 mr-2 mb-0.5',
                input: 'appearance-none border-none p-0 focus:outline-none focus:border-transparent focus:ring-0',
                label: 'my-tailwind-label'
            }" />
            <FormKit label="Form Framework" :classes="{
                outer: 'mb-4 mr-2 w-1/2',
                inner: 'flex items-center shadow border border-gray-300 appearance-none rounded py-2 px-3 w-full text-gray-700 leading-tight focus-within:ring-4 focus-within:ring-green-500 focus-within:ring-opacity-50',
                prefixIcon: 'h-5 w-5 mr-2 mb-0.5',
                input: 'appearance-none border-none p-0 focus:outline-none focus:border-transparent focus:ring-0',
                label: 'my-tailwind-label'
            }" />
        </div>


        <FormKit label="Airlines" name="airlines" help="Which airline do you prefer to fly on?" type="radio"
            :options="airlines">
            <template #label="context">
                <img :src="`https://cdn.formk.it/example-assets/airlines/${context.option.value}.png`" width="120"
                    :alt="context.option.label" />
            </template>
        </FormKit>

        <FormKit label="What is your favorite Tailwind CSS feature?" type="textarea" :classes="{
            input: 'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full h-32 text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-green-500 focus:ring-opacity-50',
            label: 'my-tailwind-label'
        }" />
    </FormKit>
</template>
   
<style>
html[data-active-tab="render"] {
    background: linear-gradient(140deg, rgb(66, 223, 123), rgb(35, 196, 94));
}

html .source-content {
    background: transparent;
}
</style> -->


<script>
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import SOLogo from "../components/SOLogo.vue";
import { collection, addDoc, doc, setDoc } from "firebase/firestore"
export default {
    components: {
        SOLogo
    },
    data() {
        return {
            fullName: '',
            universityId: '',
            phoneNumber: '',
            email: '',
            faculty: '',
            department: '',
            batch: '',
            showMessage: false,
        };
    },
    methods: {
        closeMessage() {
            this.showMessage = false;
        },

        async submitForm() {
            console.log("formRan")

            const firebaseConfig = {
                apiKey: "AIzaSyBMOiTpc_PPERG4ZhPbTQIZ8uAHnNzsKos",
                authDomain: "speech-olympiad.firebaseapp.com",
                projectId: "speech-olympiad",
                storageBucket: "speech-olympiad.appspot.com",
                messagingSenderId: "718732602589",
                appId: "1:718732602589:web:d2b3a682106d06fc773f34",
                measurementId: "G-T1D958J5EE"
            }

            // init firebase
            initializeApp(firebaseConfig)

            // init firestore service
            const db = getFirestore()
            const docRef = doc(collection(db, "registrations"));
            // data to send
            const dataObj = {
                fullName: this.fullName,
                universityId: this.universityId,
                phoneNumber: this.phoneNumber,
                email: this.email,
                faculty: this.faculty,
                department: this.department,
                batch: this.batch,
                time: new Date()
            };
            console.log('efewf')
            await setDoc(docRef, dataObj);

            // console.log('Document written with ID: ', docRef.id);

            console.log('efewf')
            try {


                // Reset form fields after successful submission
                this.fullName = '';
                this.universityId = '';
                this.phoneNumber = '';
                this.email = '';
                this.faculty = '';
                this.department = '';
                this.batch = '';
                this.showMessage = true;
            } catch (error) {
                console.error('Error adding document: ', error);
            }
            console.log('efewf')
        },

    },
};
</script>
<template>
    <div class="flex items-center justify-center ">

        <div class="rounded-lg mt-12 bg-gray-600 p-2 shadow-md">

            <SOLogo class="w-24 items-center justify-cente" />
            <form class="w-full max-w-lg" @submit.prevent="submitForm">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                            for="grid-first-name">
                            Full Name
                        </label>
                        <input v-model="fullName"
                            class="appearance-none block w-full bg-gray-800 text-gray-300 border border-red-300 rounded py-3 px-4 mb-3 leading-tight  focus:outline-none focus:bg-gray-900"
                            id="grid-first-name" type="text" placeholder="Pavan Pitiwaduge">
                        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                            for="grid-last-name">
                            University Id
                        </label>
                        <input v-model="universityId"
                            class="appearance-none block w-full bg-gray-800 text-gray-300 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500"
                            id="grid-last-name" type="text" placeholder="210454I">
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                            for="grid-first-name">
                            Phone Number
                        </label>
                        <input v-model="phoneNumber"
                            class="appearance-none block w-full bg-gray-800 text-gray-300 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-900"
                            id="grid-first-name" type="mobile" placeholder="718456734">

                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                            for="grid-last-name">
                            Email
                        </label>
                        <input v-model="email"
                            class="appearance-none block w-full bg-gray-800 text-gray-300 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500"
                            id="grid-last-name" type="email" placeholder="example@gmail.com">
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" for="grid-state">
                            faculty

                        </label>
                        <div class="relative">
                            c
                            <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" for="grid-city">
                            Department
                        </label>
                        <input v-model="department"
                            class="appearance-none block w-full bg-gray-800 text-gray-300 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500"
                            id="grid-city" type="text" placeholder="CSE">
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" for="grid-state">
                            Batch
                        </label>
                        <div class="relative">
                            <select v-model="batch"
                                class="block appearance-none w-full bg-gray-800 border border-gray-200 text-gray-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500"
                                id="grid-state">
                                <option>2019</option>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                            </select>
                            <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full justify-center  px-3">
                        <button type="submit"
                            class="bg-gray-800 w-full hover:bg-gray-900 text-gray-300 border-gray-200 font-bold py-2 px-4 outline-1 rounded focus:outline-none focus:shadow-outline">
                            Register
                        </button>
                    </div>
                </div>
            </form>
            <div class="flex justify-center items-center ">
                <div v-if="showMessage" class="bg-pink-900 w-full rounded-lg p-6 shadow-md">

                    <p class="text-white text-lg font-semibold mb-2">Success!</p>
                    <p class="text-white text-sm">Congragulations for taking this step 🥳.</p>
                    <button @click="closeMessage"
                        class="mt-4 text-sm text-white underline cursor-pointer focus:outline-none">Close</button>
                </div>
            </div>
        </div>

    </div>
</template>