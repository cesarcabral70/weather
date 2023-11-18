import { useState } from "react";

type Props = {
  // eslint-disable-next-line no-unused-vars
  getActiveTab: (data: string) => void;
};

type TabItem = {
  text: string;
  // eslint-disable-next-line no-unused-vars
  handleClick: (data: string) => void;
  isActive: string;
};

export default function TabNavigation({ getActiveTab }: Props) {
  const [activeTab, setActiveTab] = useState("Today");

  const handleClick = (data: string) => {
    setActiveTab(data);
    getActiveTab(data);
  };

  const TabItem = ({ text, handleClick, isActive }: TabItem) => {
    return (
      <li className="w-1/2">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleClick(text);
            console.log("TEST");
          }}
          className={`inline-flex w-full items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg ${
            isActive === text
              ? `text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group`
              : `hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group`
          }`}
        >
          <svg
            className={`w-4 h-4 me-2 ${
              isActive === text
                ? `text-blue-600 border-blue-600 rounded-t-lg active dark:text-blue-500 scale-150 dark:border-blue-500 group`
                : `hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group`
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            {text === "Today" ? (
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            ) : (
              <path d="M7 0l-5 5v-2h-2v21h2v-17l5 5 13-4v-4l-13-4zm0 10.586l-4.586-4.586 4.586-4.586v9.172zm5-1.171l-2 .615v-8.061l2 .615v6.831zm5-1.538l-2 .615v-4.984l2 .615v3.754zm-.5 3.123l7.5 13h-15l7.5-13zm4.04 11l-4.04-7-4.04 7h8.08zm-4.54-5v3h1v-3h-1zm-.12 3.98c0 .33.27.6.6.6s.6-.27.6-.6-.27-.6-.6-.6-.6.27-.6.6z" />
            )}
          </svg>
          {text}
        </a>
      </li>
    );
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 mb-5">
      <ul className="flex flex-wrap ">
        <TabItem text="Today" isActive={activeTab} handleClick={handleClick} />
        <TabItem
          text="Next 3 days"
          isActive={activeTab}
          handleClick={handleClick}
        />
      </ul>
    </div>
  );
}
