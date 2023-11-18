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
    const activeClass =
      isActive === text
        ? `text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group`
        : `hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group`;

    return (
      <li className="w-1/2 hahahah">
        <a
          href="#"
          onClick={() => {
            handleClick(text);
          }}
          className={`inline-flex w-full items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg ${activeClass}`}
        >
          <svg
            className={`w-4 h-4 me-2 ${activeClass}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
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
