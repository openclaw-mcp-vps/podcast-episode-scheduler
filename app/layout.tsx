import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PodScheduler — Schedule Podcast Episodes Across All Platforms",
  description: "Bulk schedule podcast episodes to Spotify, Apple, and Google Podcasts with custom release times and timezone optimization."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="787de7cf-4472-4f6a-a023-d2c3b7a381a5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
