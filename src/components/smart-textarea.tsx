"use client";
import React, { useRef, useEffect, useState } from 'react';

interface SmartTextareaProps {
    onSubmit: (message: string) => Promise<void>;
    isSubmitting: boolean;
}


const SmartTextarea = ({ onSubmit, isSubmitting }: SmartTextareaProps) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [value, setValue] = useState('');

    useEffect(() => {
        const textarea = textareaRef.current;

        const handleHeight = () => {
            if (textarea) {
                textarea.style.height = 'auto';
                textarea.style.height = `${textarea.scrollHeight}px`;

                if (textarea.scrollHeight > textarea.clientHeight) textarea.style.transform = `translateY(-${textarea.scrollHeight - textarea.clientHeight}px)`;
                else textarea.style.transform = 'translateY(0)';
            }
        };

        if (textarea) textarea.addEventListener('input', handleHeight);

        // Cleanup event listeners on unmount
        return () => {
            if (textarea) textarea.removeEventListener('input', handleHeight);
        };
    }, []);

    const handleValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        if (!value.trim() || isSubmitting) return;

        await onSubmit(value);
        setValue('');
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
        }
    };

    return (
        <div className="flex items-center w-full">
            <textarea
                ref={textareaRef}
                className="w-full pl-6 pr-12 py-3 border border-gray-300 dark:text-gray-900 rounded-2xl h-fit resize-none overflow-hidden focus:outline-none"
                rows={1}
                placeholder="Scrivi un messaggio..."
                value={value}
                onChange={handleValue}
                onKeyDown={handleKeyDown}
                disabled={isSubmitting}
            />
            <button
                type="button"
                onClick={handleSubmit}
                className="absolute right-3 text-brand disabled:opacity-50"
                disabled={isSubmitting}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
            </button>
        </div>
    );
};

export default SmartTextarea;