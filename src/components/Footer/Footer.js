import React from "react";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandGoogle,
  IconBrandYoutube,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Footer({ quote, author }) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="flex flex-col max-h-4 items-center justify-center text-center py-10">
        {/* {quote && author && (
          <blockquote className="relative text-2xl font-light max-w-2xl leading-relaxed px-2 py-2">
            <span className="absolute text-gray-200 text-8xl w-16 h-16 -left-20 -top-8">“</span>
            <span className="absolute text-gray-200 text-8xl w-16 h-16 -right-20 bottom-4">”</span>
            {quote}
            <cite className="block text-lg mt-8">- {author}</cite>
          </blockquote>
        )} */}

        {/* <ul className="flex mt-4 mb-12">
          <li className="mx-2">
            <a href="#" className="text-white p-2 rounded-full hover:text-aqua">
              <IconBrandTwitter size={20} />
            </a>
          </li>
          <li className="mx-2">
            <a href="#" className="text-white p-2 rounded-full hover:text-aqua">
              <IconBrandGoogle size={20} />
            </a>
          </li>
          <li className="mx-2">
            <a href="#" className="text-white p-2 rounded-full hover:text-aqua">
              <IconBrandYoutube size={20} />
            </a>
          </li>
          <li className="mx-2">
            <a href="#" className="text-white p-2 rounded-full hover:text-aqua">
              <IconBrandLinkedin size={20} />
            </a>
          </li>
        </ul> */}
      </div>
    </footer>
  );
}

