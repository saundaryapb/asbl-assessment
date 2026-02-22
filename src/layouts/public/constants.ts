import { InstagramOutlined, FacebookOutlined, LinkedinOutlined, YoutubeOutlined } from "@ant-design/icons";
import React from "react";

export const menus = [
   { name: "story", path: "/", label: "Our Story" },
   { name: "projects", path: "/", label: "Our Projects" },
   { name: "blogs", path: "/", label: "Blogs" },
   { name: "media", path: "/", label: "Media" },
   { name: "events", path: "/", label: "Events" },
] as const;

export const loginMenu = [
   { name: "find_agent", path: "/", label: "Find Agent" },
   { name: "agent_login", path: "/", label: "Agent Login" },
] as const;

export const footerColumns = [
   {
      title: "Explore",
      links: [
         { name: "story", path: "/", label: "Our Story" },
         { name: "projects", path: "/", label: "Our Projects" },
         { name: "blogs", path: "/", label: "Blogs" },
         { name: "media", path: "/", label: "Media" },
         { name: "events", path: "/", label: "Events" },
      ],
   },
   {
      title: "Projects",
      links: [
         { name: "broadway", path: "/", label: "ASBL Broadway" },
         { name: "landmark", path: "/", label: "ASBL Landmark" },
         { name: "loft", path: "/", label: "ASBL Loft" },
         { name: "spectra", path: "/", label: "ASBL Spectra" },
         { name: "springs", path: "/", label: "ASBL Springs" },
         { name: "spire", path: "/", label: "ASBL Spire" },
         { name: "lakeside", path: "/", label: "ASBL Lakeside" },
      ],
   },
   {
      title: "Connect",
      links: [
         { name: "find_agent", path: "/", label: "Find Agent" },
         { name: "agent_login", path: "/", label: "Agent Login" },
         { name: "contact", path: "/", label: "Contact Us" },
         { name: "careers", path: "/", label: "Careers" },
      ],
   },
] as const;

export const footerSocialLinks = [
   { name: "instagram", href: "#", label: "Instagram" },
   { name: "facebook", href: "#", label: "Facebook" },
   { name: "linkedin", href: "#", label: "LinkedIn" },
   { name: "youtube", href: "#", label: "YouTube" },
] as const;

export const SOCIAL_ICONS: Record<string, React.ReactNode> = {
   instagram: React.createElement(InstagramOutlined),
   facebook: React.createElement(FacebookOutlined),
   linkedin: React.createElement(LinkedinOutlined),
   youtube: React.createElement(YoutubeOutlined),
};

export const footerLegalLinks = [
   { name: "privacy", path: "/", label: "Privacy Policy" },
   { name: "terms", path: "/", label: "Terms of Use" },
   { name: "sitemap", path: "/", label: "Sitemap" },
] as const;
