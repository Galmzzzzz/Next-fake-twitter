import { postTweet } from "@/app/server-action/post-tweet";

export function TweetForm() {
  return (
    <form 
      action={postTweet} 
      className="bg-black text-white p-4 mt-4 rounded-2xl border border-neutral-800 w-full max-w-md mx-auto"
    >
      <input
        placeholder="Что происходит?"
        type="text"
        name="data"
        className="w-full bg-black text-white placeholder-neutral-500 outline-none text-lg p-2 resize-none"
      />
      <div className="flex justify-end mt-3">
        <button
          type="submit"
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2 rounded-full transition-colors"
        >
          Твитнуть
        </button>
      </div>
    </form>
  );
}
