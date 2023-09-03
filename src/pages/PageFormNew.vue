<template>
    <div class="border-bottom registration-form">
        <div class="gavelium-image-wrapper">
            <img :src="Background.filename" :alt="Background.alt" class="gavelium-image">
        </div>
        <div class="cool-form">
            <div class="form-field"
            v-if="eightV">
            <!-- <imageAnimation /> -->
            
            <div class="d-flex flex-col h-100 items-center justify-center">
                <div class="d-flex">
                    <transition name="bon" mode="out-in">
                    <img :src="currentImage" :key="currentImage" class="image" />
                </transition>
                </div>
                <div class="d-flex my-3">
                    <transition name="bounce" mode="out-in">
                        <p class="text-5xl font-bold mb-4 text-center" style="line-height: 1.1em;" 
                        v-html="eight.fullText" :key="fadeAnimation" v-if="fadeAnimation">
                        </p>
                    </transition>
                </div>

                <!-- Additional text elements can be added here -->

                <div class="d-flex w-100 justify-content-center align-items-center">
                    <div class="">
                        <transition name="slide-fade" mode="out-in">
                    <img :src="sologo" class="soLogo" style="
                    aspect-ratio: 1/1;" :key="fadeAnimation" v-if="fadeAnimation" />
                </transition>
                    </div>
                </div>
            </div>
            </div>
            <div class="form-field"
                v-if="firstV">

                <div class="question">
                    <p class="" v-html="first.typedText"></p>
                </div>
                <div class="answer">
                    <input
                        class="w-full placeholder-gray-200::placeholder text-xl bg-black text-gray-200 p-4 rounded-md pr-14 focus:outline-none"
                        type="text" placeholder="Enter your full name here" v-model="fullName" @keyup.enter="firstB(2)" />
                    <button class="absolute right-0 top-0 h-full px-4 bg-gray-200 text-black  hover:bg-gray-300"
                        @click="firstB(2)">
                        &rarr;
                    </button>
                </div>

            </div>
            <div class="form-field"
                v-if="secondV">
                <div class="question">
                    <p class="" v-html="second.typedText"></p>
                </div>
                <div class="answer">
                    <input
                        class="w-full placeholder-gray-200::placeholder text-xl bg-black text-gray-200 p-4 rounded-md pr-14 focus:outline-none"
                        type="text" placeholder="Enter your Uni id here" v-model="universityId" @keyup.enter="firstB(3)" />
                    <button class="absolute right-0 top-0 h-full px-4 bg-gray-200 text-black  hover:bg-gray-300"
                        @click="firstB(3)">
                        &rarr;
                    </button>
                </div>

            </div>
            <div class="form-field"
                v-if="thirdV">
                <div class="question">
                    <p class="" v-html="third.typedText"></p>
                </div>
                <div class="answer">
                    <input
                        class="w-full placeholder-gray-200::placeholder text-xl bg-black text-gray-200 p-4 rounded-md pr-14 focus:outline-none"
                        type="mobile" placeholder="Enter your mobile number" v-model="phoneNumber" @keyup.enter="firstB(4)" />
                    <button class="absolute right-0 top-0 h-full px-4 bg-gray-200 text-black  hover:bg-gray-300"
                        @click="firstB(4)">
                        &rarr;
                    </button>
                </div>

            </div>
            <div class="form-field"
                v-if="fourthV">
                <div class="question">
                    <p class="" v-html="fourth.typedText"></p>
                </div>
                <div class="answer">
                    <input
                        class="w-full placeholder-gray-200::placeholder text-xl bg-black text-gray-200 p-4 rounded-md pr-14 focus:outline-none"
                        type="email" placeholder="Enter your email" v-model="email" @keyup.enter="firstB(5)" />
                    <button class="absolute right-0 top-0 h-full px-4 bg-gray-200 text-black  hover:bg-gray-300"
                        @click="firstB(5)">
                        &rarr;
                    </button>
                </div>

            </div>
            <div class="form-field"
                v-if="fifthV">
                <div class="question">
                    <p class="" v-html="fifth.typedText"></p>
                </div>
                <div class="answer">

                    <select v-model="faculty"
                        class="block appearance-none w-full border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500 placeholder-gray-200::placeholder text-xl bg-black text-gray-200 p-4 rounded-md pr-14"
                        id="grid-state">
                        <option>Faculty of Engineering</option>
                        <option>Faculty of Information Technology</option>
                        <option>Faculty of Architecture</option>
                        <option>Faculty of Business</option>
                        <option>Faculty of Medicine</option>
                    </select>
                    <button class="absolute right-0 top-0 h-full px-4 bg-gray-200 text-black  hover:bg-gray-300"
                        @click="firstB(6)">
                        &rarr;
                    </button>
                </div>

            </div>
            <div class="form-field"
                v-if="sixthV">
                <div class="question">
                    <p class="" v-html="sixth.typedText"></p>
                </div>
                <div class="answer">
                    <input
                        class="w-full placeholder-gray-200::placeholder text-xl bg-black text-gray-200 p-4 rounded-md pr-14 focus:outline-none"
                        type="email" placeholder="Ex : CSE" v-model="department" @keyup.enter="firstB(7)" />
                    <button class="absolute right-0 top-0 h-full px-4 bg-gray-200 text-black hover:bg-gray-300"
                        @click="firstB(7)">
                        &rarr;
                    </button>
                </div>

            </div>
            <div class="form-field"
                v-if="seventhV">
                <div class="question">
                    <p class="" v-html="seventh.typedText"></p>
                </div>
                <div class="answer">

                    <select v-model="batch"
                        class="block appearance-none w-full border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500 placeholder-gray-200::placeholder text-xl bg-black text-gray-200 p-4 rounded-md pr-14"
                        id="grid-state">

                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                    </select>
                    <button class="absolute right-0 top-0 h-full px-4 bg-gray-200 text-black  hover:bg-gray-300"
                        @click="finish">
                        &rarr;
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>
  
  
  
<script>
import dragon1 from '../assets/images/dragon1.png'
import dragon2 from '../assets/images/dragon2.png'
import Background from "../assets/images/gavelium2.jpg"
import SOlogo from "../assets/images/SOXVI.jpg"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import SOLogo from "../components/SOLogo.vue";
import { collection, addDoc, doc, setDoc } from "firebase/firestore"
import imageAnimation from "../components/imageAnimation.vue";
export default {
    name: "AnimatedText",
    components: {
        imageAnimation,

    },
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
            eightV: false,
            fullName: '',
            universityId: '',
            phoneNumber: '',
            email: '',
            faculty: '',
            department: '',
            batch: '',
            showMessage: false,
            fadeAnimation: false,
            currentImage: dragon1,
            sologo: SOlogo,
            first: {
                typedText: "",
                fullText: 'Hi Contestant 👋 <br />  What is your name?',
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
            },
            eight: {
                typedText: "",
                fullText: "Your journey is about to begin 🥳",

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
                    this.third.fullText = this.fullName.split(" ")[1] + ', We need your phone number ☎️ <br/> (whatsapp preferred)'
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
                    this.seventh.fullText = 'Final question 😮‍💨  <br/>' + this.fullName.split(" ")[1] + ", Select your batch"
                    this.typeText(this.seventh);
                    break;
                case 8:
                    this.seventhV = false;
                    this.eightV = true;
                    this.typeText(this.eight);
                    this.switchImage();
                    setTimeout(() => {
                        this.fadeAnimation = true;

                        this.eight.fullText = "Your journey is about to begin 🥳";
                        this.sologo = SOlogo;
                    }, 1500);
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
            this.firstB(8);
            // this.showMessage = true;
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
        switchImage() {
            // Simulate loading a new image
            setTimeout(() => {
                this.currentImage = dragon2;
            }, 1500); // 1 second
        },
    },
    mounted() {

        this.typeText(this.first);


    },
};
</script>
  
  
<style scoped>
.registration-form{
    display: flex;
}
.gavelium-image{
    display: flex;
    flex:1;
    justify-content: center;
    align-items: center;
    height: 95vh;
    width: auto;
    object-fit: contain;
    object-position: top;
}
.gavelium-image-wrapper{
    /* opacity reduce from halfway through from left to right */
    background-color: linear-gradient();
}

.cool-form{
    flex: 1;
    padding: 3rem;
    display: flex;
}
.cool-form .form-field{
    width: 100%;
    display: flex;
    flex-direction: column;
}

.cool-form .form-field > .question{
    display: flex;
    align-items: end;
    margin-bottom: 1.25rem;
    height: 50%;
}

.question p{
    font-weight: bold;
    font-size: 3.5em;
    line-height: 1.2em;
    letter-spacing: -0.5%;
    overflow-wrap: break-word;
    @media (max-width: 1024px) {
        font-size: 2em;
    }
    @media (max-width: 768px) {
        font-size: 2em;
    }
}

.cool-form .form-field > .answer {
    align-items: start;
    height: auto;
}

.soLogo{
    width: 200px;
}

@media (max-width: 768px) {
    .soLogo{
        width: 100px;
    }
    .gavelium-image{
        height: 95vh;
        object-fit: fill;
    }
    .cool-form{
        position: absolute;
        top: 0;
        left:0;
        height: 100%;
        padding: 1.5rem;
        background-color: rgba(0, 0, 0, 0.8);
        width: 100%;
    }
}

@keyframes typing {
    from {
        width: 0;
    }
}

.image {
    height: 350px;
    object-fit: cover;
    /* filter: blur(1px); */
    /* Initial blur effect */
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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 2s ease;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}

.slide-fade-enter-active {
    transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
    transition: all 2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}

.bon-enter-active {
    animation: bounce-in 0.1s;
}

.bon-leave-active {
    animation: bounce-in 0.1s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}
</style>
