function showResult() {
    document.getElementById('result').innerHTML = "" + randomizeStore();
    document.getElementById('comment').innerHTML = "" + randomizeComment();
}

function randomizeStore() {
    var stores = 
        [
            "Burger King", "Agno", "Pasta Plate", "Pasta Boy", "7-Eleven",
            "Jollibee", "McDonald's", "Eric's Siomai", "Noel's BBQ", "Big Guy's",
            "Crazy Katsu", "Sumibiyakid's", "Rice Taft", "Gaiju", 
            "Bon Chon", "Flaming Wings", "Mang Inasal", "KFC", "Double Decker",
            "Time Out (sa UMall)", "Tapa King", "Tropical Hut", "Zark's Burgers", "Animo Biz",
            "Jus and Jerry's", "Toribox", "Wingstop", "Mini Stop", "Family Mart", "Perico's",
            "Yellow Cab", "Army Navy", "Ersao", "Wai Ying", "Barn",
            "Orange and Spices", "Chomp Chomp", "Samgyupsalamat", "Rap's Steak", "Exile", "Bagnet",
            "Kenny Rogers"
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
            "Well basta may pera ka", 
            "Edi WOW", "Edi WOOOOOOW", "Naubusan na ata ako ng comments", "Dapat sarcastic comment to",
            "Nandyan kasi ako kanina", "Nandyan ako kahapon", "Siguro last week nandyan ako", 
            "Sabi kasi ng katabi ko yan ibigay sayong sagot", "Mas tipid diyan kaysa sa Starbucks",
            "#NowShowing ang 'That Thing Called Tadhana' diyan", "Nakita ko to sa The Walking Dead",
            "Utang ka sa kaibigan mo", "Pede umutang kapag walang pera", "Tanong mo narin if may parking sila",
            "Ingat ka, malandi yung waiter", "May upuan sila sa tabi ng table", "Ask mo sila sa WiFi password",
            "Bukas na ba yan?", "Mag ingat sa #FlyingIpis", "Dito yung 'Where do broken hearts go'", 
            "Hindi ko pa napapanood yung TTCT", "May promo sila na free seating pag nag order ka",
            "Umorder ka na dito bago pa siya gawing isang yoga station", "Siguraduhin mong hindi to 'Coffee Shop' or lagot ka kay Sir Tulfo"
        ];
    var chosenNum = Math.floor((Math.random() * comments.length) + 1);
    if(chosenNum == comments.length) {
        chosenNum = 0;
    }
    return comments[chosenNum];
}
