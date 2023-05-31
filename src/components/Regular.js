import React from "react";
import All from "./Mem";
import { allMemes } from "./Mem";

const Regular = ({ memes }) => {
  const regularMemes = memes.filter((meme) => meme.upvotes - meme.downvotes <= 5);
  // meme to pojedynczy element z tablicy memes

  return (
    <div>
      <h2>Regular, not hot. What a trash!</h2>
      {regularMemes.map((meme, index) => (
        <div className="memeField" key={index}>
          <h2>{meme.title}</h2>
          <p>
            <img src={meme.img} />
          </p>
       
          <p>Upvotes: {meme.upvotes}</p>
          <p>Downvotes: {meme.downvotes}</p>
          <p>Score: {meme.upvotes-meme.downvotes}</p>
        </div>
      ))}
    </div>
  );
};

export default Regular;
