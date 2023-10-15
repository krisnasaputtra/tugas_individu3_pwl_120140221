import { useEffect, useState } from "react";

import PageHeading from "../components/PageHeading";

import { getDataFromLocalStorage } from "../utils/message";

const Message = () => {
  const [messageData, setMessageData] = useState([]);

  useEffect(() => {
    const data = getDataFromLocalStorage();
    setMessageData(data);
  }, []);

  return (
    <section className="bg-gray-800">
      <div className="py-16 px-4 mx-auto max-w-screen-md min-h-screen">
        <PageHeading title="Message" />
        {messageData.length > 0 ? (
          <div className="relative overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm text-left text-gray-400">
              <thead className="text-xs text-gray-400 uppercase bg-gray-900">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Message
                  </th>
                </tr>
              </thead>
              <tbody>
                {messageData.map((message) => (
                  <tr
                    className="border-b bg-gray-900 border-gray-700"
                    key={message.id}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap text-white"
                    >
                      {message.name}
                    </th>
                    <td className="px-6 py-4">{message.email}</td>
                    <td className="px-6 py-4">{message.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h1 className="text-center text-white text-3xl">No Message</h1>
        )}
      </div>
    </section>
  );
};

export default Message;
