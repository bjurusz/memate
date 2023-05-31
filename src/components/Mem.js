import React, { useState } from "react";

const allMemes = [
  {
    title: "Mem 1",
    upvotes: 13,
    downvotes: 0,
    img: "../assets/image1.webp",
  },
  {
    title: "Mem 2",
    upvotes: 0,
    downvotes: 2,
    img: "../assets/image2.webp",
  },
  {
    title: "Mem 3",
    upvotes: 5,
    downvotes: 2,
    img: "../assets/image3.webp",
  },
  {
    title: "Mem 4",
    upvotes: 4,
    downvotes: 2,
    img: "../assets/image4.webp",
  },
  {
    title: "Mem 5",
    upvotes: 1,
    downvotes: 2,
    img: "../assets/image5.webp",
  },
];

const All = () => {
  const [memes, setMemes] = React.useState(allMemes);
  const upvoteMeme = (index) => {
    const updatedMemes = [...memes];
    updatedMemes[index].upvotes += 1;
    setMemes(updatedMemes); //SetMemes to SetState dla Stanu allMemes; stan memów się aktualizuje po akcji o +1
  };
  const downvoteMeme = (index) => {
    const updatedMemes = [...memes];
    updatedMemes[index].downvotes += 1;
    setMemes(updatedMemes);
  };

  return (
    <div>
      {memes.map((meme, index) => (
        <div className="memeField" key={index}>
          <h2 className="memeTitle">{meme.title}</h2>
          <p>
            <img src={meme.img} alt={meme.title} />
          </p>
          <button className="upvote" onClick={() => upvoteMeme(index)}>
            Upvotes: {meme.upvotes}
          </button>
          &nbsp;&nbsp;&nbsp;
          <button className="downvote" onClick={() => downvoteMeme(index)}>
            {/* przekazuję argument (index), którego mema ma zwiększyć  */}
            Downvotes: {meme.downvotes}
          </button>
          <p className="score">Score: {meme.upvotes-meme.downvotes}</p>
        </div>
      ))}
    </div>
  );
};

export default All;
export { allMemes };
