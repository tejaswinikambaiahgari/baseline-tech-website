import { useState } from "react";
import { useWaitlist, WaitlistForm } from "../../hooks/useWaitlist";
import { set, useForm } from "react-hook-form";
import {Dialog} from "next/dist/next-devtools/dev-overlay/components/dialog/dialog";

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

    const onSubmit = async (data: WaitlistForm) => {
        try {
            const backendData = {
                name: data.name,
                email: data.email,
                phoneNumber: data.phoneNumber || undefined,
                age: data.age,
                skillLevel: data.skillLevel,
            }

            addToWaitlist(backendData)

            form.reset()
            setOpen(false)
        } catch (error) {
            console.error('Error submitting waitlist:', error)
        }
    }

    return (
        <div onClick={() => setOpen(true)} className="cursor-pointer">
            { trigger ? trigger : (
                <button className="px-6 py-2 rounded-lg bg-[#65b4d0] text-white font-semibold hover:bg-[#4ca2bf] transition">
                    Get Early Access
                </button>
            )}

            {/* Modal */}
            { open  && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60
                                backdrop-blur-sm"
                     onClick={() => setOpen(false)}>
                    <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md relative"
                         onClick={(e) => e.stopPropagation()}>
                        {/* Close Button */}
                        <button onClick={() => setOpen(false)}
                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700
                                           text-2xl">
                            &times
                        </button>

                        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
                            Join The Waitlist
                        </h2>

                        <form onSubmit={form.handleSubmit(onSubmit)}
                              className="flex flex-col space-y-4">
                            <input type="text"
                                   placeholder="Name"
                                   {...form.register("name", { required: true })}
                                   className="border border-gray-300 rounded-lg px-4 py-2
                                              focus:outline-none focus:ring-2
                                              focus:ring-[#65b4d0]" />
                            <input />
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}