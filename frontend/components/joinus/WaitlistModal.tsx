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
    const [ age, setAge ] = useState(18);
    const [ skillLevel, setSkillLevel ] = useState<SkillLevel>("Complete Beginner");

    const { addToWaitlist, isLoading } = useWaitlist()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addToWaitlist({ name, email, phoneNumber, age, skillLevel });

        setName("");
        setEmail("");
        setPhoneNumber("");
        setAge(18);
        setSkillLevel("Complete Beginner");
    }

    return (
        <>
            <div onClick={() => setOpen(true)}>
                {trigger}
            </div>

             {/*  Modal Pop-Up  */}
            { open && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex
                                justify-center items-center z-50"
                     onClick={() => setOpen(false)}>
                    {/* Modal */}
                    <div className="bg-white text-black p-6 rounded-lg w-full max-w-md relative shadow-xl"
                         onClick={(e) => e.stopPropagation()}>
                        {/* Close Button */}
                        <button onClick={() => setOpen(false)}
                                className="absolute top-3 right-3 text-gray-500 hover:text-black
                                           text-lg">
                            ✕
                        </button>

                        <h2 className="text-2xl font-bold mb-2">Join The Waitlist</h2>
                        <p className="text-gray-700 mb-4">
                            Be the first to hear about updates and exclusives.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input type="text"
                                   placeholder="Full Name"
                                   className="w-full p-3 border rounded-md"
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}
                                   required
                            />

                            <input type="email"
                                   placeholder="Email"
                                   className="w-full p-3 border rounded-md"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   required
                            />

                            <input type="tel"
                                   placeholder="Phone Number (Optional)"
                                   className="w-full p-3 border rounded-md"
                                   value={phoneNumber}
                                   onChange={(e) => setPhoneNumber(e.target.value)}
                            />

                            <input type="number"
                                   placeholder="Age"
                                   className="w-full p-3 border rounded-md"
                                   value={age}
                                   onChange={(e) => setAge(parseInt(e.target.value))}
                                   required
                            />

                            <select className="w-full p-3 border rounded-md"
                                    value={skillLevel}
                                    onChange={(e) => setSkillLevel(e.target.value as SkillLevel)}>
                                <option value="Complete Beginner">Complete Beginner</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>

                            <button type="submit"
                                    className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                    disabled={isLoading}>
                                { isLoading ? "Joining..." : "Join Waitlist" }
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}