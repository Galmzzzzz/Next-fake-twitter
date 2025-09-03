import { TWEETS } from "@/shared/data/tweets.data"
import Tweet from "./Tweet"
import { TweetForm } from "./Tweet-Form"

export default function Home() {
  return (
    <>
      
      {TWEETS.map(tweet => (
        <Tweet 
          
          key={tweet.author} 
          tweet={tweet} 
        />
      ))}

      <TweetForm/>
      
      
    </>
  )
}
