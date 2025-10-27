"use client"

import React from "react"

interface JoinWaitlistModalProps {
    isOpen:     boolean;
    onClose:    () => void;
}

export default function JoinWaitlistModal({ isOpen, onClose } :JoinWaitlistModalProps) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center
                        z-50">
            <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md shadow-lg text-center">
                <h2 className="text-2xl font-semibold text-[#65b4d0] mb-4">JOIN THE WAITLIST</h2>
                <p className="text-gray-600 mb-6">
                    The form to join our waitlist will appear here soon! This is just a
                    placeholder.
                </p>
                <button onClick={onClose} className="bg-[#65b4d0] text-white px-6 py-2 rounded-lg
                                                     hover:bg-[#4a9ebd] transition">
                    Close
                </button>
            </div>
        </div>
    );
}