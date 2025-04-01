import Chat from "../components/chat";
import Document from "../components/document";
import Footer from "../components/footer";

export default function Main() {
  return (
    <div className="flex flex-col h-screen lg:p-12 md:p-6">
      <div className="flex justify-between h-fit">
        <h1 className="text-4xl font-bold">Ask virtually.</h1>
        <button
          className="inline-flex w-fit items-center space-x-2 bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6">
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
          </svg>
          <span>Luigi Esposito</span>
        </button>
      </div>
      <hr className="border-t border-gray-400 opacity-30 mt-4 mb-12"></hr>
      <div className="flex space-x-12">
        <div className="w-1/2">
          <Chat />
        </div>
        <div className="w-1/2">
          <Document />
        </div>
      </div>
      <Footer/>
    </div>
  );
}