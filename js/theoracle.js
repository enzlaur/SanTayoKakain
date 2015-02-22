function showResult() {
    document.getElementById('result').innerHTML = "" + randomizeStore();
    document.getElementById('comment').innerHTML = "" + randomizeComment();
}

function randomizeStore() {
    var stores = 
        [
            "Burger King", "Agno", "Pasta Plate", "Pasta Boy", "7-Eleven",
            "Jollibee", "McDonald's", "Eric's Siomai", "Noel's BBQ", "Big Guy's",
            "Crazy Katsu", "Sumibiyakid's", "Xander's", "Rice Taft", "Gaiju", 
            "Bon Chon", "Flaming Wings", "Mang Inasal", "KFC", "Double Decker",
            "Time Out", "Tapa King", "Tropical Hut", "Zark's Burgers", "Animo Biz"
        ];
    var chosenNum = Math.floor((Math.random() * stores.length) + 1);
    if(chosenNum == stores.length) {
        chosenNum = 0;
    }
    return stores[chosenNum];
}

function randomizeComment() {
    var comments = 
        [
            "Well basta may pera ka", "Hindi mo afford yan? If hindi mo afford edi ang weak mo pards",
            "Edi WOW", "Edi WOOOOOOW", "Naubusan na ata ako ng comments", "Dapat sarcastic comment to",
            "Nandyan kasi ako kanina", "Nandyan ako kahapon", "Siguro last week nandyan ako", 
            "Sabi kasi ng katabi ko yan ibigay sayong sagot", "Wait nasa Starbucks ako ngayon",
            "#NowShowing ang 'That Thing Called Tadhana' diyan", "Nakita ko to sa The Walking Dead",
            "Utang ka sa kaibigan mo", "Pede umutang kapag walang pera"
        ];
    var chosenNum = Math.floor((Math.random() * comments.length) + 1);
    if(chosenNum == comments.length) {
        chosenNum = 0;
    }
    return comments[chosenNum];
}
