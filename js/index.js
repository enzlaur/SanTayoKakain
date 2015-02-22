function showResult() {
    document.getElementById('comment-title').innerHTML = "" + randomizeComment();
    
}

function randomizeComment() {
    var comments = 
        [
            "Because 'May pera pa ba ako pang bili ng pagkain?' simply does not exist in a LaSallian's vocabulary.",
            "Kasi mas madaling sagutin to kaysa sa 'Saan May Parking'.",
            "Kasi alam mong may pasok ngayon kaya hindi mo magagamit si MayPasokBa.com.",
            "Gutom ka na noh?",
            "Hail, Hail, Hail.",
            "Animo La Salle!!!",
            "SaanMayParking is still not available"
        ];
    var chosenNum = Math.floor((Math.random() * comments.length) + 1);
    if(chosenNum == comments.length) {
        chosenNum = 0;
    }
    return comments[chosenNum] + " <br> For DLSU vicinity only.";
}