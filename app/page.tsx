"use client"
import { motion } from "framer-motion"

import ShortenedUrls from "@/components/shortened-urls"
import UrlInput from "@/components/url-input"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <section className="w-[90%] mx-auto mt-20 md:max-w-5xl">
        <header>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="text-3xl font-bold text-center md:text-6xl text-white"
          >
            URL Shortener
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="mt-4 text-center md:text-2xl text-gray-400"
          >
            Made by{" "}
            <span className="underline">
              <Link href="https://daniel.rest">Dan</Link>
            </span>
          </motion.p>
        </header>

        <UrlInput />

        <ShortenedUrls />
      </section>
    </>
  )
}
