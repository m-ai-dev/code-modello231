export default function Document() {
    return (
        <div className="flex flex-col w-full h-full space-y-4 items-center bg-gray-100 p-5 text-gray-900 rounded-lg">
            <div className="w-full relative">
                <h1 className="text-2xl text-center font-bold">Documento</h1>
                <button className="absolute top-1 right-6 text-brand">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/>
                    </svg>
                </button>
            </div>
            <div className="bg-gray-200 w-full h-[93%] rounded-lg"></div>
            <p className="text-xs text-center italic">
                La risposta data dall&apos;assistente virtuale si basa sul testo evidenziato.
            </p>
        </div>
    );
}