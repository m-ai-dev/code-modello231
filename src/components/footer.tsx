import Image from 'next/image';

const Footer = () => {
    return (
        <div className="inline-flex items-center justify-center w-full min-h-[200px]">
            <Image className="w-12 h-6" src="" alt="logo" />
            <span>©2025 Virtually by m-ai for Code | Tutti i diritti riservati</span>
        </div>
    );
};

export default Footer;