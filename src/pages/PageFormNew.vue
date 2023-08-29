<template>
    <div class="relative min-h-screen bg-black">
        <img :src="Background.filename" :alt="Background.alt" class="w-full sm:w-1/2 mx-auto">
        <div class="absolute md:top-1/3 top-1/3 bg-black md:left-1/2 w-full sm:w-[50%] left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-center"
            v-if="firstV">
            <p class="text-4xl font-bold text-orange-200 bg-black" v-html="first.typedText"></p>
            <div class="relative flex items-center mt-4">
                <input
                    class="w-full placeholder-orange-200::placeholder text-xl bg-black text-orange-200 p-4 rounded-md pr-14 focus:outline-none"
                    type="text" placeholder="Enter your full name here" v-model="fullName" />
                <button class="absolute right-0 top-0 h-full px-4 bg-orange-200 text-black  hover:bg-orange-300"
                    @click="firstB(2)">
                    &rarr;
                </button>
            </div>

        </div>
        <div class="absolute md:top-1/3 top-1/3 bg-black md:left-1/2 w-full sm:w-[50%] left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-center"
            v-if="secondV">
            <p class="text-4xl font-bold text-orange-200 bg-black" v-html="second.typedText"></p>
            <div class="relative flex items-center mt-4">
                <input
                    class="w-full placeholder-orange-200::placeholder text-xl bg-black text-orange-200 p-4 rounded-md pr-14 focus:outline-none"
                    type="text" placeholder="Enter your Uni id here" v-model="universityId" />
                <button class="absolute right-0 top-0 h-full px-4 bg-orange-200 text-black  hover:bg-orange-300"
                    @click="firstB(3)">
                    &rarr;
                </button>
            </div>

        </div>
        <div class="absolute md:top-1/3 top-1/3 bg-black md:left-1/2 w-full sm:w-[50%] left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-center"
            v-if="thirdV">
            <p class="text-4xl font-bold text-orange-200 bg-black" v-html="third.typedText"></p>
            <div class="relative flex items-center mt-4">
                <input
                    class="w-full placeholder-orange-200::placeholder text-xl bg-black text-orange-200 p-4 rounded-md pr-14 focus:outline-none"
                    type="mobile" placeholder="Enter your mobile number" v-model="phoneNumber" />
                <button class="absolute right-0 top-0 h-full px-4 bg-orange-200 text-black  hover:bg-orange-300"
                    @click="firstB(4)">
                    &rarr;
                </button>
            </div>

        </div>
        <div class="absolute md:top-1/3 top-1/3 bg-black md:left-1/2 w-full sm:w-[50%] left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-center"
            v-if="fourthV">
            <p class="text-4xl font-bold text-orange-200 bg-black" v-html="fourth.typedText"></p>
            <div class="relative flex items-center mt-4">
                <input
                    class="w-full placeholder-orange-200::placeholder text-xl bg-black text-orange-200 p-4 rounded-md pr-14 focus:outline-none"
                    type="email" placeholder="Enter your email" v-model="email" />
                <button class="absolute right-0 top-0 h-full px-4 bg-orange-200 text-black  hover:bg-orange-300"
                    @click="firstB(5)">
                    &rarr;
                </button>
            </div>

        </div>
        <div class="absolute md:top-1/3 top-1/3 bg-black md:left-1/2 w-full sm:w-[50%] left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-center"
            v-if="fifthV">
            <p class="text-4xl font-bold text-orange-200 bg-black" v-html="fifth.typedText"></p>
            <div class="relative flex items-center mt-4">

                <select v-model="faculty"
                    class="block appearance-none w-full border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500 placeholder-orange-200::placeholder text-xl bg-black text-orange-200 p-4 rounded-md pr-14"
                    id="grid-state">
                    <option>Faculty of Engineering</option>
                    <option>Faculty of Information Technology</option>
                    <option>Faculty of Architecture</option>
                    <option>Faculty of Business</option>
                    <option>Faculty of Medicine</option>
                </select>
                <button class="absolute right-0 top-0 h-full px-4 bg-orange-200 text-black  hover:bg-orange-300"
                    @click="firstB(6)">
                    &rarr;
                </button>
            </div>

        </div>
        <div class="absolute md:top-1/3 top-1/3 bg-black md:left-1/2 w-full sm:w-[50%] left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-center"
            v-if="sixthV">
            <p class="text-4xl font-bold text-orange-200 bg-black" v-html="sixth.typedText"></p>
            <div class="relative flex items-center mt-4">
                <input
                    class="w-full placeholder-orange-200::placeholder text-xl bg-black text-orange-200 p-4 rounded-md pr-14 focus:outline-none"
                    type="email" placeholder="Ex : CSE" v-model="department" />
                <button class="absolute right-0 top-0 h-full px-4 bg-orange-200 text-black hover:bg-orange-300"
                    @click="firstB(7)">
                    &rarr;
                </button>
            </div>

        </div>
        <div class="absolute md:top-1/3 top-1/3 bg-black md:left-1/2 w-full sm:w-[50%] left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-center"
            v-if="seventhV">
            <p class="text-4xl font-bold text-orange-200 bg-black" v-html="seventh.typedText"></p>
            <div class="relative flex items-center mt-4">

                <select v-model="batch"
                    class="block appearance-none w-full border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500 placeholder-orange-200::placeholder text-xl bg-black text-orange-200 p-4 rounded-md pr-14"
                    id="grid-state">

                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                </select>
                <button class="absolute right-0 top-0 h-full px-4 bg-orange-200 text-black  hover:bg-orange-300"
                    @click="finish">
                    &rarr;
                </button>
            </div>

        </div>

        <div v-if="showMessage" class=" absolute md:top-0 top-0  md:left-1/2  bg-pink-900 w-full rounded-lg p-6 shadow-md">

            <p class="text-white text-lg font-semibold mb-2">Success!</p>
            <p class="text-white text-sm">Congragulations for taking this step 🥳.</p>
            <button @click="closeMessage"
                class="mt-4 text-sm text-white underline cursor-pointer focus:outline-none">Close</button>
        </div>
    </div>
</template>
  
  
  
<script>
import Background from "../assets/images/gavelium.jpg"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import SOLogo from "../components/SOLogo.vue";
import { collection, addDoc, doc, setDoc } from "firebase/firestore"
export default {
    name: "AnimatedText",
    data() {
        return {
            Background: {
                filename: Background,
                alt: "Alt Text for Image",
            },
            firstV: true,
            secondV: false,
            thirdV: false,
            fourthV: false,
            fifthV: false,
            sixthV: false,
            seventhV: false,
            fullName: '',
            universityId: '',
            phoneNumber: '',
            email: '',
            faculty: '',
            department: '',
            batch: '',
            showMessage: false,
            first: {
                typedText: "",
                fullText: "Hi Contestant 👋, What is your name?",
                currentIndex: 0,
            },
            second: {
                typedText: "",
                fullText: "Hi, what is your university id? ",
                currentIndex: 0,
            },
            third: {
                typedText: "",
                fullText: "Hi, what is your university id?",
                currentIndex: 0,
            },
            fourth: {
                typedText: "",
                fullText: "Hi, what is your university id?",
                currentIndex: 0,
            },
            fifth: {
                typedText: "",
                fullText: "Hi, what is your university id?",
                currentIndex: 0,
            },
            sixth: {
                typedText: "",
                fullText: "Hi, what is your university id?",
                currentIndex: 0,
            },
            seventh: {
                typedText: "",
                fullText: "Hi, what is your university id?",
                currentIndex: 0,
            }

        };
    },
    methods: {
        typeText(obj) {
            if (obj.currentIndex <= obj.fullText.length) {
                obj.typedText = obj.fullText.slice(0, obj.currentIndex);
                obj.currentIndex++;

                setTimeout(() => this.typeText(obj), 50);
            }


        },
        closeMessage() {
            this.showMessage = false;
        },
        firstB(th) {
            switch (th) {
                case 2:
                    this.firstV = false
                    this.secondV = true
                    this.second.fullText = this.fullName.split(" ")[1] + ", What is your University ID ? 🎓"
                    this.typeText(this.second);
                    break;
                case 3:
                    this.secondV = false
                    this.thirdV = true
                    this.third.fullText = this.fullName.split(" ")[1] + ", We need your phone number ☎️ (whatsapp prefered)"
                    this.typeText(this.third);
                    break;
                case 4:
                    this.thirdV = false
                    this.fourthV = true
                    this.fourth.fullText = " What is your Email 📧 ?"
                    this.typeText(this.fourth);
                    break;
                case 5:
                    this.fourthV = false
                    this.fifthV = true
                    this.fifth.fullText = this.fullName.split(" ")[1] + ", In which faculty do you study ?"
                    this.typeText(this.fifth);
                    break;
                case 6:
                    this.fifthV = false
                    this.sixthV = true
                    this.sixth.fullText = "What is your department ?"
                    this.typeText(this.sixth);
                    break;
                case 7:
                    this.sixthV = false
                    this.seventhV = true
                    this.seventh.fullText = "Final question 😮‍💨 \n" + this.fullName.split(" ")[1] + ", Select your batch ?"
                    this.typeText(this.seventh);
                    break;
                default:
                    break;
            }

            // this.firstV = false
            // this.secondV = true
            // this.thirdV = false
            // this.fourthV = false
            // this.fifthV = false
            // this.sixthV = false
            // this.seventhV = false

            // this.second.fullText = this.fullName + ", What is your University ID ?"
            // this.typeText(this.second);
        },
        finish() {

            this.seventhV = false;
            this.submitForm();
            this.showMessage = true;
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
    mounted() {
        this.typeText(this.first);
    },
};
</script>
  
  
<style scoped>
@keyframes typing {
    from {
        width: 0;
    }
}

.typed {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite alternate;
}

@keyframes blink-caret {
    to {
        border-right-color: transparent;
    }
}
</style>
