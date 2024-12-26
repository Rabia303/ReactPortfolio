import { CONTACT } from "..";
import { FaDiscord, FaEnvelope, FaTwitch } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 py-20 text-white">
      <h1 className="my-10 text-center text-4xl font-semibold text-purple-500">Get in Touch</h1>
      
      <div className="max-w-4xl mx-auto text-center">
        <p className="my-4 text-lg text-neutral-300">
          I&apos;m always open to new opportunities, collaborations, or just a good conversation. Feel free to contact me through any of the methods below:
        </p>
        
        <div className="flex items-center justify-center gap-8 mt-10">
          {/* Discord */}
          <a href="https://discord.gg/rabia_imtiaz" aria-label="Discord" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="text-purple-500 text-4xl hover:text-purple-300" />
          </a>
          
          {/* Email */}
          <a href={`mailto:${CONTACT.email}`} aria-label="Email" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-purple-500 text-4xl hover:text-purple-300" />
          </a>
          
          {/* Twitch */}
          <a href="https://www.twitch.tv/rabiaimtiaz" aria-label="Twitch" target="_blank" rel="noopener noreferrer">
            <FaTwitch className="text-purple-500 text-4xl hover:text-purple-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
