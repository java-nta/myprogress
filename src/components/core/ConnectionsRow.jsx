import React, { useState } from "react";
import Toastcore from "./Toastcore";
import { FaCheck } from "react-icons/fa";
export const ConnectionsRow = ({
  id,
  name,
  company,
  profil_link,
  opportunity_type,
  opportunity_link,
}) => {
  const [copied, setCopied] = useState(false);
  const copyContent = async (content) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    } catch (err) {
      console.error("Unable to copy text: ", err);
    }
  };
  return (
    <>
      {copied && (
        <Toastcore
          icon={<FaCheck />}
          message={"Copied"}
          iconColor={"text-green-500"}
        />
      )}
      <tr className="border-2 hover:bg-dark-text-- file: smooth-transition">
        <td className="border-b-2 border-x-2 p-3 dark:border-gray-600">{id}</td>
        <td className="border-b-2 border-x-2  p-3 dark:border-gray-600">
          {name}
        </td>
        <td className="border-b-2 border-x-2  p-3 dark:border-gray-600">
          {company}
        </td>
        <td
          className="border-b-2 border-x-2  p-3 cursor-pointer dark:border-gray-600"
          onClick={() => copyContent(profil_link)}
        >
          {profil_link}
        </td>
        <td className="border-b-2 border-x-2  p-3 dark:border-gray-600">
          {opportunity_type}
        </td>
        <td className="border-b-2 border-x-2  p-3 dark:border-gray-600">
          {opportunity_link}
        </td>
      </tr>
    </>
  );
};
