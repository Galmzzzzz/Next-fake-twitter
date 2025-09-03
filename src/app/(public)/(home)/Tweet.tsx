// components/Tweet.tsx
import type { ITweet } from "@/shared/types/tweet.interface"
import Link from "next/link"
import {PAGES} from "@/config/pages.config"

interface Props { tweet: ITweet }

export default function Tweet({ tweet }: Props) {
  return (
    <div className="border-b border-gray-200  dark:border-gray-800 p-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
      <Link href={PAGES.PROFILE(tweet.author)}>
        <div className="font-bold text-gray-900 dark:text-gray-100">
          @{tweet.author}
        </div>
      </Link>
      <div className="text-gray-800 dark:text-gray-200 mt-1">
        {tweet.text}
      </div>
    </div>
  )
}
