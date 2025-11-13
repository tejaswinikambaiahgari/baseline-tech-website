"use client"

import { useState } from "react";
import { useForm } from 'react-hook-form'
import {useWaitlist, WaitlistForm} from "../../hooks/useWaitlist";
import waitlistBG from "../../public/images/joinus/waitlist_bg.png"

interface WaitlistModalProps {
    trigger?: React.ReactNode;
}

export default function WaitlistSection({ trigger }: WaitlistModalProps) {
    const [ open, setOpen ] = useState(false);
    const { addToWaitlist } = useWaitlist()

    const form = useForm<WaitlistForm>({
        defaultValues: {
            name: '',
            email: '',
            phoneNumber: '',
            age: 18,
            skillLevel: undefined,
        }
    })

    const handleSubmit = (e :React.FormEvent) => {
        e.preventDefault()
        addToWaitlist({ name: name,
                        email: email,
                        phone_number: phone,
                        age: age,
                        skillLevel: skillLevel,
        })
    };

    return (
        <section className="relative h-[80vh] flex flex-col justify-center items-center text-white
                            bg-cover bg-center"
                 style={{ backgroundImage: `url(${waitlistBG.src})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50" />

            <div className="relative z-10 text-center px-4 max-w-md">
                <h1 className="text-4xl font-bold mb-4">Join The Waitlist</h1>
                <p className="text-lg mb-6">
                    Be the first to learn about SnowIn's products and gain access to exclusive
                    deals and info.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-3 text-left">
                    <input type="email" placeholder="Email" className="p-3 bg-transparent border
                                                                    border-white rounded-md
                                                                    text-white
                                                                    placeholder-gray-300
                                                                    focus:outline-none"
                           value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="tel" placeholder="Phone Number" className="p-3 bg-transparent border
                                                                            border-white rounded-md
                                                                            text-white
                                                                            placeholder-gray-300
                                                                            focus:outline-none"
                           value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <button type="submit" disabled={isLoading} className="met-2 bg-white text-black
                                                                         font-semibold py-3
                                                                         rounded-md
                                                                         hover:bg-gray-200
                                                                         transition">
                        { isLoading ? "Joining..." : "Join Our Community" }
                    </button>
                </form>

                { isSuccess && (
                    <p className="mt-4 text-green-400">
                        You're on the waitlist! We'll reach out soon.
                    </p>
                )}
                { isError && (
                    <p className="mt-4 text-red-400">
                        Something went wrong, please try again.
                    </p>
                )}
            </div>
        </section>
    );
}