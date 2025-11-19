"use client"

import { useState } from "react";
import { SkillLevel, useWaitlist } from "../../hooks/useWaitlist";

interface WaitlistModalProps {
    trigger?: React.ReactNode;
}

export default function WaitlistModal({ trigger }: WaitlistModalProps) {
    const [ open, setOpen ] = useState(false);

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ age, setAge ] = useState("18");
    const [ skillLevel, setSkillLevel ] = useState<SkillLevel>("Complete Beginner");

    const { addToWaitlist, isLoading } = useWaitlist()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addToWaitlist({ name, email, phoneNumber, age: Number(age), skillLevel });

        setName("");
        setEmail("");
        setPhoneNumber("");
        setAge("");
        setSkillLevel("Complete Beginner");

        setOpen(false);
    }

    return (
        <>
            <div onClick={() => setOpen(true)}>
                {trigger}
            </div>

             {/*  Modal Pop-Up  */}
            { open && (
                <div className="fixed inset-0 bg-black/20 backdrop-blur-md flex
                                justify-center items-center z-50"
                     onClick={() => setOpen(false)}>
                    {/* Modal */}
                    <div className="relative w-[85%] h-[85%] mx-auto px-10 py-12 rounded-3xl
                                    border border-white/40 bg-white/5 backdrop-blur-xl
                                    shadow-[0_4px_40px_rgba(0,0,0,0.35)]"
                         onClick={(e) => e.stopPropagation()}>
                        {/* Close Button */}
                        <button onClick={() => setOpen(false)}
                                className="absolute top-4 right-4 text-white/70 hover:text-white
                                           text-3xl">
                            ✕
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-[10%]">
                            <div className="mt-0 md:mt-[20%]">
                                <h1 className="text-3xl md:text-7xl font-bold mb-3 md:mb-6">Join The Waitlist</h1>
                                <p className="md:mb-8 text-md md:text-2xl font-bold max-w-lg">
                                    Be the first to learn more about Flowmersion’s products and
                                    gain access to exclusive deals and info.
                                </p>
                            </div>

                            <div>
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <input type="text"
                                           placeholder="Full Name"
                                           className="w-full px-5 py-3 rounded-full
                                                      bg-white/10 border border-white/30 text-white
                                                      placeholder-white/60 outline-none
                                                      focus:border-white/60 backdrop-blur-lg
                                                      transition"
                                           value={name}
                                           onChange={(e) => {
                                               const value = e.target.value;
                                               if (/^[A-Za-z\s]*$/.test(value)) {
                                                   setName(value)
                                               }
                                           }}
                                           required
                                    />

                                    <input type="email"
                                           placeholder="Email"
                                           className="w-full px-5 py-3 rounded-full
                                                      bg-white/10 border border-white/30 text-white
                                                      placeholder-white/60 outline-none
                                                      focus:border-white/60 backdrop-blur-lg
                                                      transition"
                                           value={email}
                                           onChange={(e) => setEmail(e.target.value)}
                                           required
                                    />

                                    <input type="tel"
                                           placeholder="Phone Number (Optional)"
                                           className="w-full px-5 py-3 rounded-full
                                                      bg-white/10 border border-white/30 text-white
                                                      placeholder-white/60 outline-none
                                                      focus:border-white/60 backdrop-blur-lg
                                                      transition"
                                           value={phoneNumber}
                                           onChange={(e) => {
                                               const value = e.target.value;
                                               if (/^[0-9+\-\s()]*$/.test(value)) {
                                                   setPhoneNumber(value)
                                               }
                                           }}
                                    />

                                    <input type="text"
                                           inputMode="numeric"
                                           placeholder="Age"
                                           pattern="[0-9]*"
                                           className="w-full px-5 py-3 rounded-full
                                                      bg-white/10 border border-white/30 text-white
                                                      placeholder-white/60 outline-none
                                                      focus:border-white/60 backdrop-blur-lg
                                                      transition"
                                           value={age}
                                           onChange={(e) => {
                                               const value = e.target.value
                                               if (value === "") {
                                                   setAge("");
                                                   return;
                                               }

                                               // Restricted to Digits.
                                               if (/^\d+$/.test(value)) {
                                                   setAge(value);
                                               }
                                           }}
                                           required
                                    />

                                    <div className="space-y-3">
                                        <p className="text-white font-medium">
                                            What is your skiing/snowboarding skill level?
                                        </p>

                                        <label className="flex items-start gap-3 text-white/90
                                                          cursor-pointer">
                                            <input type="radio"
                                                   name="skill"
                                                   value="Complete Beginner"
                                                   checked={skillLevel === "Complete Beginner"}
                                                   onChange={() => setSkillLevel("Complete Beginner")}
                                                   className="mt-1 h-4 w-4 accent-white"
                                            />
                                            <span className="leading-snug">
                                                Complete Beginner (never been on a slope but would
                                                like to learn)
                                            </span>
                                        </label>

                                        <label className="flex items-start gap-3 text-white/90
                                                          cursor-pointer">
                                            <input type="radio"
                                                   name="skill"
                                                   value="Beginner"
                                                   checked={skillLevel === "Beginner"}
                                                   onChange={() => setSkillLevel("Beginner")}
                                                   className="mt-1 h-4 w-4 accent-white"
                                            />
                                            <span className="leading-snug">
                                                Beginner (I mostly hangout on Green Slopes)
                                            </span>
                                        </label>

                                        <label className="flex items-start gap-3 text-white/90
                                                          cursor-pointer">
                                            <input type="radio"
                                                   name="skill"
                                                   value="Intermediate"
                                                   checked={skillLevel === "Intermediate"}
                                                   onChange={() => setSkillLevel("Intermediate")}
                                                   className="mt-1 h-4 w-4 accent-white"
                                            />
                                            <span className="leading-snug">
                                                Intermediate (Blue and Chill Black Diamonds are my
                                                jam)
                                            </span>
                                        </label>

                                        <label className="flex items-start gap-3 text-white/90
                                                          cursor-pointer">
                                            <input type="radio"
                                                   name="skill"
                                                   value="Advanced"
                                                   checked={skillLevel === "Advanced"}
                                                   onChange={() => setSkillLevel("Advanced")}
                                                   className="mt-1 h-4 w-4 accent-white"
                                            />
                                            <span className="leading-snug">
                                                Advanced (I can take on any type of terrain, speed
                                                is my friend)
                                            </span>
                                        </label>
                                    </div>

                                    <button type="submit"
                                            className="px-6 py-3 text-lg rounded-xl
                                                       backdrop-blur-sm border-2 border-white
                                                       hover:bg-gray-300 hover:text-gray-800
                                                       font-black transition"
                                            disabled={isLoading}>
                                        { isLoading ? "Submitting..." : "SUBMIT" }
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}