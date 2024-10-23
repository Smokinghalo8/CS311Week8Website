"use client"
//This is needed to run the website :(

import React, { useEffect, useState } from 'react';

//Media Item keeps track of variables that come in from json files.
interface MediaItem {
  id: number;
  title: string;
  author: string;
  publicationYear: number;
}

//unsure what this does....
const Page: React.FC = () => {
  const [cheese, setCheese] = useState<MediaItem[]>([]);
  const [selectedCheese, setselectedCheese] = useState<MediaItem | null>(null);


  //Grabbing information from outside json file and then slapping that into a response variable and than slapping into another data variable
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      console.log(data)
      setCheese(data);
    };
    fetchData();
  }, []);//empty array for some reason

  //Simple function for handleing the clicks, this will find the rest of the information about a certain type of cheese and spit it out!
  const handleClick = (id: number) => {
    const mediaItem = cheese.find(item => item.id === id);
    setselectedCheese(mediaItem || null); 
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <ul className="space-y-2">
        {cheese.map(item => (
          <li key={item.id} onClick={() => handleClick(item.id)}
          className="p-2 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded transition"
          >
            {item.title}
          </li>
        ))}
      </ul>

      {selectedCheese && (
        <div className="max-w-2xl mx-auto p-4">
          <h1></h1>
          <h2 className="text-2xl font-semibold">Lets learn more about: {selectedCheese.title} Cheese!</h2>
          <p className="text-gray-700">Who made this cheese? {selectedCheese.author}</p>
          <p className="text-gray-700">Cheese creation Year: {selectedCheese.publicationYear}</p>
        </div>
      )}
    </div>
  );
};
//looks so much better with Tailwind
export default Page;
