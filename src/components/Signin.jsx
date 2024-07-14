import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/slice';
import heroImg from "../assets/hero-gmail-1.webp";
import connect from "../assets/connect.png";
import { MdOutlineWifiOff, MdOutlineDevices } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const SignIn = () => {
    const dispatch = useDispatch();
     
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            dispatch(setAuthUser({
                displayName: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL
            }));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen bg-white">
            <nav className="flex justify-between items-center shadow-lg p-3 fixed w-full bg-white z-10">
                <div className="flex items-center space-x-4 ml-4 md:ml-16">
                    <img className="w-6 h-6" src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="Gmail Logo" />
                    <h1 className="text-xl md:text-2xl text-gray-500 font-medium">Gmail</h1>
                </div>
                <div className="flex items-center space-x-4 mr-4 md:mr-16">
                    <button className="text-blue-400 p-2 text-sm md:text-xl font-semibold">For work</button>
                    <button onClick={signInWithGoogle} className="bg-blue-600 px-4 md:px-12 py-2 text-sm md:text-base text-white font-semibold rounded-sm">Login</button>
                </div>
            </nav>

            <main className="pt-20">
                <section className="flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-8">
                    <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-4">
                            Secure, smart, and easy to use email
                        </h1>
                        <p className="font-semibold text-gray-500 mb-6">
                            Get more done with Gmail. Now integrated with Google Chat, Google Meet, and more, all in one place.
                        </p>
                        <div className="space-y-4 md:space-y-0 md:space-x-4">
                            <button onClick={signInWithGoogle} className="bg-blue-600 px-8 py-2 text-white font-semibold rounded-sm">Login</button>
                            <button className="text-blue-600 p-2 text-base font-semibold">For work</button>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img className="w-full" src={heroImg} alt="Hero" />
                    </div>
                </section>

                <section className="bg-gray-100 px-4 md:px-16 py-12">
                    <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-8 text-center">
                        Email that's secure, private, and puts you in control.
                    </h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 space-y-8 mb-8 md:mb-0">
                            {[
                                { title: "We never use your Gmail content for any ads purposes", content: "Gmail uses industry-leading encryption for all messages you receive and send. We never use your Gmail content to personalize ads." },
                                { title: "Gmail keeps over a billion people safe every day", content: "Gmail blocks 99.9% of spam, malware, and dangerous links from ever reaching your inbox." },
                                { title: "The most advanced phishing protections available", content: "Gmail uses industry-leading encryption for all messages you receive and send." },
                                { title: "We never use your Gmail content for any ads purposes", content: "Gmail uses industry-leading encryption for all messages you receive and send." }
                            ].map((item, index) => (
                                <div key={index} className={`border-l-4 ${index === 0 ? 'border-blue-600' : 'border-gray-400'} p-4`}>
                                    <h3 className={`text-xl ${index === 0 ? 'text-blue-600' : 'text-gray-700'} mb-2`}>{item.title}</h3>
                                    <p className="text-gray-600 font-semibold">{item.content}</p>
                                </div>
                            ))}
                        </div>
                        <div className="md:w-1/2">
                            <img className="w-full" src="https://lh3.googleusercontent.com/Cle-1GLl4P8zbJafbrnN8-7CgfVSduAR1j2DACNepAm5JL37GANl8tIM1h72Cyga71wO2lGcNPONnQl5MKFi_1TGSBQM8mV9qaKdQw=rw-e365-w2880" alt="Security" />
                        </div>
                    </div>
                </section>

                <section className="px-4 md:px-16 py-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img src={connect} alt="Connect" className="w-full" />
                        </div>
                        <div className="md:w-1/2 space-y-8">
                            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                                Get more done with Gmail
                            </h2>
                            {[
                                { title: "We never use your Gmail content for any ads purposes", content: "Gmail uses industry-leading encryption for all messages you receive and send." },
                                { title: "Gmail keeps over a billion people safe every day", content: "Gmail blocks 99.9% of spam, malware, and dangerous links from ever reaching your inbox." },
                                { title: "The most advanced phishing protections available", content: "Gmail uses industry-leading encryption for all messages you receive and send." }
                            ].map((item, index) => (
                                <div key={index} className={`border-l-4 ${index === 0 ? 'border-blue-600' : 'border-gray-400'} p-4`}>
                                    <h3 className={`text-xl ${index === 0 ? 'text-blue-600' : 'text-gray-700'} mb-2`}>{item.title}</h3>
                                    <p className="text-gray-600 font-semibold">{item.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100 px-4 md:px-16 py-12 text-center">
                    <h2 className="text-xl font-semibold mb-8">Bring the best of Gmail to your device</h2>
                    <div className="flex justify-center space-x-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/135px-Download_on_the_App_Store_Badge.svg.png?20170219160111" alt="App Store" className="h-10" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/180px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" className="h-10" />
                    </div>
                </section>

                <section className="px-4 md:px-16 py-12 bg-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <TiTick />, title: "Works with other tools", content: "Gmail works great with desktop clients like Microsoft Outlook, Apple Mail and Mozilla Thunderbird, including contact and event sync." },
                            { icon: <MdOutlineWifiOff />, title: "Stay productive, even offline", content: "Gmail offline lets you read, reply, delete, and search your Gmail messages when you're not connected to the internet." },
                            { icon: <MdOutlineDevices />, title: "Experience Gmail on any device", content: "Enjoy the ease and simplicity of Gmail, wherever you are." }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-blue-600 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl">{item.icon}</span>
                                </div>
                                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                                <p className="text-gray-700">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="px-4 md:px-16 py-12 text-center">
                    <img className="w-8 h-6 mx-auto mb-4" src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="Gmail Logo" />
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                        Show the world how it's done.
                    </h2>
                    <p className="text-gray-700 font-medium text-xl md:text-3xl mb-6">
                        Get started with a more powerful Gmail.
                    </p>
                    <div className="space-y-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md">
                            Create an account
                        </button>
                        <button className="bg-gray-100 text-blue-600 font-semibold py-3 px-6 rounded">
                            For work
                        </button>
                    </div>
                </section>

                <img src="https://lh3.googleusercontent.com/2oSWh6r_utxN6yagJ8CDNGktMjCSZAw7EsrwNeYq6wmnm9qneA2ZrkIeZzylCiawALG7CqmsBQD-JRBvayjGKYCC6eiLVMlLaRKZ-iA=rw-e365-w2880" alt="Footer" className="w-full" />
            </main>

            <footer className="bg-gray-200 p-6">
                <ul className="flex flex-wrap justify-center md:justify-start space-x-6 md:space-x-12">
                    <li className="font-semibold text-xl md:text-2xl text-gray-600">Google</li>
                    <li className="text-gray-700">Privacy</li>
                    <li className="text-gray-700">Terms</li>
                    <li className="text-gray-700">About Google</li>
                    <li className="text-gray-700">Products</li>
                    <li className="text-gray-700">Policy</li>
                    <li className="text-gray-700">Privacy & Security</li>
                </ul>
            </footer>
        </div>
    );
}

export default SignIn;