import React from "react";
import allMemes from "./Mem";

const Hot = ({memes}) =>{
const hotMemes = memes.filter((meme) => meme.upvotes - meme.downvotes > 5);

  return (
<div>
      <h2>Hot Memes</h2>
      {hotMemes.map((meme, index) => (
        <div key={index}>
          <h3>{meme.title}</h3>
          <p>
            <img src={meme.img} alt={meme.title} />
          </p>
          <p>Upvotes: {meme.upvotes}</p>
          <p>Downvotes: {meme.downvotes}</p>
          <p>Score: {meme.upvotes-meme.downvotes}</p>
        </div>
      ))}
    </div>
  );
};

export default Hot;