import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Page from "./layout/Page";

const Test = () => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <Page title={"Testing"}>
      <AnimatePresence>
        {isHidden && (
          <motion.div
            key={"model"}
            className="p-2 border rounded-md"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5}}
            exit={{ scale: 0, opacity: 0 }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              voluptas, rem nam illo quas deserunt tenetur veritatis molestias
              corrupti ad at amet nostrum tempora temporibus voluptate. Nam
              expedita mollitia ab.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setIsHidden((prevIsHidden) => !prevIsHidden)}
      >
        Toggle
      </button>
    </Page>
  );
};

export default Test;
