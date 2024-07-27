import { useState } from "react"
import { Button } from "./ui/button"
import { Copy, CopyCheck, Trash } from "lucide-react"
import { useUrlStore } from "@/store/url"

type UrlCardProps = {
  url: Url
}
const host = process.env.NEXT_PUBLIC_HOST || "http://localhost:3000"

function UrlCard({ url }: UrlCardProps) {
  const [copied, setCopied] = useState(false)

  const { getUrls } = useUrlStore()

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${host}/${url.id}`)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  const deleteUrl = async () => {
    const urls = localStorage.getItem("urls")
    if (!urls) return

    const parsedUrls = JSON.parse(urls) as Url[]
    const filteredUrls = parsedUrls.filter((u) => u.id !== url.id)

    localStorage.setItem("urls", JSON.stringify(filteredUrls))

    getUrls()
  }

  return (
    <li
      key={url.id}
      className="relative grid grid-cols-[1fr,2em] gap-4 px-4 py-3 transition-all bg-neutral-900 border border-neutral-800 rounded-md hover:border-neutral-600 group"
    >
      <div className="w-full">
        <a
          href={`${host}/${url.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-neutral-200 transition-all hover:underline line-clamp-1"
        >
          {host}/{url.id}
        </a>

        <p className="w-full mt-2 text-xs text-neutral-500 break-all line-clamp-1">
          {url.url}
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <Button
          size="sm"
          variant={copied ? "default" : "ghost"}
          className="p-2 transition-all md:opacity-0 h-7 md:group-hover:opacity-100 hover:bg-neutral-800"
          onClick={copyToClipboard}
        >
          {copied ? (
            <CopyCheck size={14} className="text-neutral-300" />
          ) : (
            <Copy size={14} className="text-neutral-200" />
          )}
        </Button>

        <Button
          size="sm"
          variant="ghost"
          className="p-2 transition-all md:opacity-0 h-7 md:group-hover:opacity-100 hover:bg-neutral-800"
          onClick={deleteUrl}
        >
          <Trash size={14} className="text-neutral-200" />
        </Button>
      </div>
    </li>
  )
}

export default UrlCard
