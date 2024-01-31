import React from "react";

import Page from "./layout/Page";
import { FaLink } from "react-icons/fa";
import { ConnectionsRow } from "./core/ConnectionsRow";
const Connections = () => {
  return (
    <Page title={"Connections"}>
      <p>Here is my linkdin connection.</p>
      <div className="flex flex-col">
        <form className="flex items-center flex-wrap w-full gap-2 p-2 ">
          <input
            type="text"
            placeholder="name"
            name="name"
            className="outline-none bg-transparent border p-2 rounded-md smooth-transition focus:border-gray-500 dark:border-gray-600 dark:focus:border-dark-text"
          />
          <input
            type="text"
            placeholder="company"
            name="company"
            className="outline-none bg-transparent border p-2 rounded-md smooth-transition focus:border-gray-500 dark:border-gray-600 dark:focus:border-dark-text"
          />
          <input
            type="text"
            placeholder="profil link"
            name="profil"
            className="w-1/2 bg-transparent outline-none border p-2 rounded-md smooth-transition focus:border-gray-500 dark:border-gray-600 dark:focus:border-dark-text"
          />
          <input
            type="text"
            placeholder="opportunity type"
            name="opt"
            className="outline-none bg-transparent border p-2 rounded-md smooth-transition focus:border-gray-500 dark:border-gray-600 dark:focus:border-dark-text"
          />
          <input
            type="text"
            placeholder="Opportunity link"
            name="opt_link"
            className="outline-none bg-transparent border p-2 rounded-md smooth-transition focus:border-gray-500 dark:border-gray-600 dark:focus:border-dark-text w-1/2"
          />
          <button className="outline-none bg-gray-50 hover:bg-green-400 hover:text-white p-2 rounded-md smooth-transition dark:bg-gray-600">
            Add
          </button>
        </form>
        <table className=" my-5 table-auto">
          <thead>
            <tr className="text-sm text-gray-400">
              <th className="border-2 p-3 dark:border-gray-600">No.</th>
              <th className="border-2 p-3 dark:border-gray-600">Name</th>
              <th className="border-2 p-3 dark:border-gray-600">company</th>
              <th className="border-2 p-3 dark:border-gray-600">
                <div className="flex items-center gap-2 justify-center">
                  <span className="text-black">
                    <FaLink />
                  </span>
                  profil link
                </div>
              </th>
              <th className="border-2 p-3 dark:border-gray-600">
                opportunity type
              </th>
              <th className="border-2 p-3 dark:border-gray-600">
                <div className="flex items-center gap-2 justify-center">
                  <span className="text-black">
                    <FaLink />
                  </span>
                  opportunity link
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <ConnectionsRow
              id={1}
              name={"mr.james"}
              company={"AXios"}
              profil_link={"https://"}
              opportunity_type={"web dev"}
              opportunity_link={"https"}
            />
            <ConnectionsRow
              id={1}
              name={"mr.james"}
              company={"AXios"}
              profil_link={"https://"}
              opportunity_type={"web dev"}
              opportunity_link={"https"}
            />
            <ConnectionsRow
              id={1}
              name={"mr.james"}
              company={"AXios"}
              profil_link={"https://"}
              opportunity_type={"web dev"}
              opportunity_link={"https"}
            />
            <ConnectionsRow
              id={1}
              name={"mr.james"}
              company={"AXios"}
              profil_link={"https://"}
              opportunity_type={"web dev"}
              opportunity_link={"https"}
            />
            <ConnectionsRow
              id={1}
              name={"mr.james"}
              company={"AXios"}
              profil_link={"https://"}
              opportunity_type={"web dev"}
              opportunity_link={"https"}
            />
            <ConnectionsRow
              id={1}
              name={"mr.james"}
              company={"AXios"}
              profil_link={"https://"}
              opportunity_type={"web dev"}
              opportunity_link={"https"}
            />
            <ConnectionsRow
              id={1}
              name={"mr.james"}
              company={"AXios"}
              profil_link={"https://"}
              opportunity_type={"web dev"}
              opportunity_link={"https"}
            />
            <ConnectionsRow
              id={1}
              name={"mr.james"}
              company={"AXios"}
              profil_link={"https://"}
              opportunity_type={"web dev"}
              opportunity_link={"https"}
            />
            <ConnectionsRow
              id={1}
              name={"mr.james"}
              company={"AXios"}
              profil_link={"https://"}
              opportunity_type={"web dev"}
              opportunity_link={"https"}
            />
            <ConnectionsRow
              id={1}
              name={"mr.james"}
              company={"AXios"}
              profil_link={"https://"}
              opportunity_type={"web dev"}
              opportunity_link={"https"}
            />
          </tbody>
        </table>
      </div>
    </Page>
  );
};

export default Connections;
