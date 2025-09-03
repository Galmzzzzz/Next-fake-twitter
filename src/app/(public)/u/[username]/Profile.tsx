// 'use client'

// import { useParams } from "next/navigation"
// import { TWEETS } from "@/shared/data/tweets.data"

// export function Profile() {
//   const params = useParams<{ username: string }>()
//   const username = params.username

//   // Фильтруем твиты по имени
//   const userTweets = TWEETS.filter(
//     (tweet) => tweet.author.toLowerCase() === username.toLowerCase()
//   )

//   return (
//     <div className="bg-black min-h-screen text-white">
//       {/* Header */}
//       <div className="border-b border-neutral-800 p-4">
//         <h1 className="text-xl font-bold">{username}</h1>
//         <p className="text-neutral-500">@{username}</p>
//       </div>

//       {/* User Info */}
//       <div className="p-4 border-b border-neutral-800 flex items-center gap-4">
//         <div className="w-16 h-16 rounded-full bg-neutral-700 flex items-center justify-center text-2xl font-bold">
//           {username[0].toUpperCase()}
//         </div>
//         <div>
//           <h2 className="text-lg font-semibold">{username}</h2>
//           <p className="text-neutral-500">@{username}</p>
//         </div>
//       </div>

//       {/* Tweets */}
//       <div>
//         {userTweets.length > 0 ? (
//           userTweets.map((tweet, idx) => (
//             <div
//               key={idx}
//               className="p-4 border-b border-neutral-800 hover:bg-neutral-900 transition-colors"
//             >
//               <p className="font-semibold text-sky-400">{tweet.author}</p>
//               <p>{tweet.text}</p>
//             </div>
//           ))
//         ) : (
//           <p className="p-4 text-neutral-500">У этого пользователя пока нет твитов.</p>
//         )}
//       </div>
//     </div>
//   )
// }

'use client'

import { TWEETS } from "@/shared/data/tweets.data"
import { useParams } from "next/navigation"

export function Profile() {
    const params = useParams<{ username: string }>()
    const username = params.username

     const userTweets = TWEETS.filter((tweet)=> tweet.author.toLowerCase() === username.toLowerCase())
     
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Header
      <div className="border-b border-neutral-800 p-4">
        <h1 className="text-xl font-bold">{username}</h1>
        <p className="text-neutral-500">@{username}</p>
      </div> */}

      {/* User Info */}
      <div className="p-4 border-b border-neutral-800 flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-neutral-700 flex items-center justify-center text-2xl font-bold">
          {username[0]}
        </div>
        <div>
          <h2 className="text-lg font-semibold">{username}</h2>
          <p className="text-neutral-500">@{username}</p>
        </div>
      </div>

      {/* Tweets */}
      {userTweets.length > 0 ? (
        userTweets.map((tweet, idx) =>(
        <div key={idx}>
            <div className="p-4 border-b border-neutral-800 hover:bg-neutral-900 transition-colors">
            <p className="font-semibold text-sky-400">{tweet.author}</p>
            <p>{tweet.text}</p>
            </div>
        </div>)) 
      ): (
        <div>user dont have tweets</div>
      )}
    </div>
  )
}
