import { BiComment, BiLike } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoIosSend } from "react-icons/io";
const FeedCard = ({ imgs, author = "", text, likes, comments = [] }) => {
  const [showComments, setShowComments] = useState(false);
  return (
    <div className="bg-transparent rounded-md p-4 flex flex-col border dark:border-gray-800 sm:w-[500px] w-full">
      {/* the post header */}
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-300 dark:bg-dark-component dark:text-white">
          {author.charAt(0).toUpperCase()}
        </div>
        <div>
          <span className="font-bold">{author}</span>
        </div>
      </div>
      {/* the post's text */}
      <div className="my-5">
        <p className="font-medium text-sm">{text}</p>
      </div>
      {/* Interaction buttons */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="flex items-center gap-2 smooth-transition hover:text-dark-text"
        >
          <span className=" text-xl">
            <BiLike />
          </span>
          <span className="text-xs">273 likes</span>
        </button>
        <button
          type="button"
          className="flex items-center gap-2 smooth-transition hover:text-dark-text"
        >
          <span className=" text-xl">
            <BiComment />
          </span>
          <span
            className="text-xs"
            onClick={() => setShowComments((preShowComment) => !preShowComment)}
          >
            273 comments
          </span>
        </button>
      </div>
      {/* comments section */}
      <AnimatePresence>
        {showComments && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-col"
          >
            <form className="bg-transparent flex-col rounded-md mt-6 flex gap-4 ">
              <div className="flex  gap-4">
                <span className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-300 dark:bg-dark-component dark:text-white">
                  A
                </span>
                <textarea
                  type="text"
                  placeholder="Add comment"
                  className="outline-none resize-none text-sm h-10 max-h-10 bg-gray-100 dark:bg-dark-component p-2 rounded-md flex-1 font-medium"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="flex items-center gap-2 smooth-transition hover:text-dark-text "
                >
                  <span className=" text-xl">
                    <IoIosSend />
                  </span>
                  <span className="text-xs">Comment</span>
                </button>
              </div>
            </form>
            {comments.map((comment) => (
              <div className="flex gap-4 flex-wrap my-6">
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-300 dark:bg-dark-component dark:text-white">
                  {comment.by.charAt(0).toUpperCase()}
                </div>
                <p className="flex-1 resize-y font-medium text-xs mt-1">
                  {comment.comment}
                </p>
                <div className="w-full text-xs text-end">
                  <span>2023-10-20 15:16pm</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeedCard;
