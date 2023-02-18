function Generate(){
    var quotes={
        "- Bhuwan pant"  :'"Even when you lost everything you thought there was to lose, somebody came along and gave you something for free"',
        "- jenny"  :'"Man cannot be freed by the same injustice that enslaved it"',
        "- pant"  :'"Maybe some women are not meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them."',    

}
var authors = Object.keys(quotes);
var authors = authors[Math.floor(Math.random()* authors.length)];
var quote = quotes[authors];
document.getElementById("quote").innerHTML = quote;
document.getElementById("author").innerHTML = authors;

}