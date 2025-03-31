import SmartTextarea from "../components/smart-textarea";
import Footer from "../components/footer";

export default function Chat() {
  return (
    <div className="flex flex-col h-screen lg:p-12 md:p-6">
      <div className="flex justify-between h-screen">
        <h1 className="text-4xl font-bold">Ask virtually.</h1>
        <button
          className="inline-flex w-fit items-center space-x-2 bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <span>Luigi Esposito</span>
        </button>
      </div>
      <hr className="border-t border-gray-400 opacity-30 mt-4 mb-12"></hr>
      <div className="flex h-screen">
        {/* Left Column - Chat */}
        <div className="flex flex-col relative w-1/2 space-y-4">
          <div className="max-w-[80%] w-fit mr-auto px-5 py-3 bg-blue-100 dark:text-gray-900 rounded-tl-[.2rem] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl">
            <p className="text-sm">Ciao, sono virtually, il tuo assistente virtuale!<br/>Puoi chiedermi qualsiasi informazione riguardante il tuo Modello 231.</p>
          </div>
          <div className="max-w-[80%] w-fit ml-auto px-5 py-3 bg-gray-100 dark:text-gray-900 rounded-tl-2xl rounded-tr-[.2rem] rounded-br-2xl rounded-bl-2xl">
            <p className="text-sm">Come viene definito il ruolo dell’Organismo di Vigilanza (OcIV) nel Modello 231 e quali sono i suoi principali compiti?</p>
          </div>
          <div className="max-w-[80%] w-fit mr-auto px-5 py-3 bg-blue-100 dark:text-gray-900 rounded-tl-[.2rem] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl">
            <p className="text-sm">...</p>
          </div>

          <div className="flex absolute w-full bottom-0">
            <SmartTextarea />
          </div>
        </div>
        <hr className="h-[80vh] mx-12"></hr>
        {/* Right Column - Document Preview */}
        <div className="flex flex-col w-1/2 space-y-4 items-center bg-gray-100 p-5 text-gray-900 rounded-lg">
          <div className="w-full relative">
            <h1 className="text-2xl text-center font-bold">Documento</h1>
            <button className="absolute top-1 right-6 text-brand">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </button>
          </div>
          <div className="bg-gray-200 w-full h-[93%] rounded-lg"></div>
          <p className="text-xs text-center italic">La risposta data dall&apos;assistente virtuale si basa sul testo evidenziato.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}