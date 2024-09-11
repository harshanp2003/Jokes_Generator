import React from "react";

function Jokes()
{
    var arr=new Array();
    arr=[
        "What did one hat say to the other? You stay here. I'll go on ahead.",
"Where do pirates get their hooks? Secondhand stores.",
"Knock knock. Who's there? Boo. Boo who? Don't cry, I'm only joking!",
"What did the pirate say when he turned 80? Aye matey.",
"What do you call two birds in love? Tweethearts!",
"Why did the picture go to jail? Because it was framed.",
"What do you call a sad cup of coffee? Depresso.",
"Irish puns are the most O'ffensive.",
"I went to buy some camo pants but couldn’t find any.",
"Knock knock. Who's there? Adore. Adore who? Adore is between us, so please open up.",
"How do you organize a space party? You planet.",
"How did the telephone propose to his girlfriend? He gave her a ring.",
"What do horses say when they fall? Help, I’ve fallen and I can’t giddy up.",

"What runs but never goes anywhere? A refrigerator.",
"What do you call a beehive without an exit? Unbelievable.",
"What did the cucumber say to the pickle? You mean a great dill to me.",
"Why don’t we see elephants hiding in trees? Because they’re really good at it."
    ];
    const index=Math.floor(Math.random()*17);
    const jokesentence=arr[index];
    console.log(jokesentence);
    return <p>{jokesentence}</p>
}
export default Jokes;