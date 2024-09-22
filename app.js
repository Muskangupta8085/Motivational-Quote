// getElementByTagName ---> It always returns an array
const quote = document.getElementsByTagName("blockquote")[0];
const author = document.getElementsByClassName("author")[0];

const newQuote = document.querySelector(".quote_btn");
const tweetBtn = document.querySelector(".tweet_btn");

const apiLink = "https:quotes-api-self.vercel.app/quote";

// API Call---> Aync Await
let temp;
const getDate = async ()=>{
    const response = await fetch(apiLink)
    const data = await response.json();
    temp = data.quote;
    quote.innerText = data.quote;
    author.innerText = data.author;
};

// Function call
getDate();

newQuote.addEventListener("click" , ()=>{
    getDate();
});


// window.open ---> open a new window
tweetBtn.addEventListener("click" , ()=>{
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(temp), "tweet post", "width=400 , height=400" );
});
