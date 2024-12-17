let townNameArray = ['London', 'Goofburg', 'Beirut', 'Seoul', 'Applebees', 'Duckburg', 'Sloppy River', 'Minas Tirith', 'Osgiliath', 'Hobbiton', 'Mt. Doom', 'Cirith Ungol'];

let townElderArray = ['Alfred','Edward','Ælfweard', 'Æthelstan', 'Edmund 1', 'Eadred', 'Eadwig', 'Edgar the Peaceful', 'Sweyn', 'Cnut', 'Harold Harefoot', 'Harthacnut']

let townIndustryArray = ['Blacksmithing', 'Glassblowing', 'Perfumery', 'Tanning', 'Hunting', 'Fishing', 'Carpentry', 'Husbandry', 'Luthiers', 'Masons', 'Sailors', 'Prostitutes']

let townLoyaltyArray = ['In open rebellion', 'On the cusp of rebellion', 'Dissatisfied, hostile to government officials', 'Unhappy', 'Neutral', 'Unaware of what nation they are even in', 'Generally fine', 'Happy to be here', 'Fiercely loyal']

function createTown() {
    setTownName();
    setPopulation();
    setElder();
    setIndustry();
    setLoyalty();
}

function setTownName() {
    if (townNameArray.length > 0) {
    var r = Math.floor(Math.random() * townNameArray.length);
    document.getElementById("yourTownName").innerHTML = townNameArray[r];
    townNameArray.splice(r, 1);
    }
    else {
        document.getElementById("yourTownName").innerHTML = 'You actually saw every option, please refresh to see them again!';
    }
}

function setPopulation() {
    var r = Math.floor(Math.random() * 25000);
    document.getElementById("pop-total").innerHTML = r;
}

function setElder() {
    var r = Math.floor(Math.random() * townElderArray.length);
    document.getElementById("town-elder").innerHTML = townElderArray[r];
}

function setIndustry() {
    var r = Math.floor(Math.random() * townIndustryArray.length);
    document.getElementById("town-industry").innerHTML = townIndustryArray[r];
}

function setLoyalty() {
    var r = Math.floor(Math.random() * townLoyaltyArray.length);
    document.getElementById("town-loyalty").innerHTML = townLoyaltyArray[r];
}