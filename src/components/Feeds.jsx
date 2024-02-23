import { IoIosSend } from "react-icons/io";
import FeedCard from "./core/FeedCard";
import Page from "./layout/Page";
const Feeds = () => {
  return (
    <Page title={"Posts"}>
      <div className="flex flex-col items-center gap-4">
        {/* Add new feeds */}
        <form className="bg-transparent flex-col rounded-md p-4 flex gap-4  border dark:border-gray-800 sm:w-[500px] w-full">
          <div className="flex  gap-4">
            <span className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-300 dark:bg-dark-component dark:text-white">
              A
            </span>
            <textarea
              type="text"
              placeholder="what's new?"
              className="outline-none resize-none h-24 max-h-24 bg-gray-100 dark:bg-dark-component p-2 rounded-md flex-1 font-medium"
            />
          </div>
          <div className="flex">
            <button
              type="button"
              className="flex items-center gap-2 smooth-transition hover:text-dark-text "
            >
              <span className=" text-xl">
                <IoIosSend />
              </span>
              <span className="text-xs">Publish</span>
            </button>
          </div>
        </form>

        {/* feeds */}
        <FeedCard
          author="Admin"
          text={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores distinctio quidem tempora perferendis debitis ipsam, ullam excepturi quisquam blanditiis fugit quos corporis consequuntur culpa? Accusamus nesciunt placeat tempore eveniet veritatis."
          }
          comments={[
            { by: "medorox", comment: "LOL" },
            {
              by: "admin",
              comment:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores distinctio quidem tempora perferendis debitis ipsam, ullam excepturi quisquam blanditiis fugit quos corporis consequuntur culpa? Accusamus nesciunt placeat tempore eveniet veritatis.",
            },
          ]}
        />
        <FeedCard
          author="Admin"
          text={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores distinctio quidem tempora perferendis debitis ipsam, ullam excepturi quisquam blanditiis fugit quos corporis consequuntur culpa? Accusamus nesciunt placeat tempore eveniet veritatis."
          }
        />
        <FeedCard
          author="Admin"
          text={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores distinctio quidem tempora perferendis debitis ipsam, ullam excepturi quisquam blanditiis fugit quos corporis consequuntur culpa? Accusamus nesciunt placeat tempore eveniet veritatis."
          }
        />
        <FeedCard
          author="Admin"
          text={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores distinctio quidem tempora perferendis debitis ipsam, ullam excepturi quisquam blanditiis fugit quos corporis consequuntur culpa? Accusamus nesciunt placeat tempore eveniet veritatis."
          }
        />
        <FeedCard author="Medorox" text={"Hello I'm new"} />
      </div>
    </Page>
  );
};

export default Feeds;
