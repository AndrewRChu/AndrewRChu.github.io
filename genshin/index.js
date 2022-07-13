class Stickers {
    constructor() {
        this.data = [{'set': '1', 'id': '10', 'character': 'Amber', 'name': 'Save me!', 'src': '10_Amber_Save_me'}, {'set': '1', 'id': '11', 'character': 'Kaeya', 'name': 'That\'s funny!', 'src': '11_Kaeya_Thats_funny'}, {'set': '1', 'id': '12', 'character': 'Amber', 'name': 'Outta my way!', 'src': '12_Amber_Outta_my_way'}, {'set': '1', 'id': '13', 'character': 'Aether', 'name': 'Fall asleep', 'src': '13_Aether_Fall_asleep'}, {'set': '1', 'id': '14', 'character': 'Lumine', 'name': 'Please~', 'src': '14_Lumine_Please'}, {'set': '1', 'id': '15', 'character': 'Aether', 'name': 'Alert', 'src': '15_Aether_Alert'}, {'set': '1', 'id': '16', 'character': 'Lumine', 'name': 'Will 1 Mora do?', 'src': '16_Lumine_Will_1_Mora_do'}, {'set': '1', 'id': '1', 'character': 'Paimon', 'name': 'No problem!', 'src': '1_Paimon_No_problem'}, {'set': '1', 'id': '2', 'character': 'Paimon', 'name': 'Ship out!', 'src': '2_Paimon_Ship_out'}, {'set': '1', 'id': '3', 'character': 'Paimon', 'name': 'Hehe~', 'src': '3_Paimon_Hehe'}, {'set': '1', 'id': '4', 'character': 'Paimon', 'name': 'Time to eat!', 'src': '4_Paimon_Time_to_eat'}, {'set': '1', 'id': 
        '5', 'character': 'Paimon', 'name': 'Surprised!', 'src': '5_Paimon_Surprised'}, {'set': '1', 'id': '6', 'character': 'Paimon', 'name': 'Too easy!', 'src': '6_Paimon_Too_easy'}, {'set': '1', 'id': '7', 'character': 'Amber', 'name': 'Noooo!', 'src': '7_Amber_Noooo'}, {'set': '1', 'id': '8', 'character': 'Jean', 'name': 'Oh...', 'src': '8_Jean_Oh'}, {'set': '1', 'id': '9', 'character': 'Lisa', 'name': 'Well done!', 'src': '9_Lisa_Well_done'}]
    }
    all() {
        return this.data
    }
    search(query) {
        return this.data.filter(e => e.character.toLowerCase().includes(query.toLowerCase()) || e.name.toLowerCase().includes(query.toLowerCase()))
    }
}

const STICKERS = new Stickers()

window.onload = function() {
    show(STICKERS.all().sort((a, b) => a.id - b.id))
    addSearch()
  };

function show(stickers) {
    document.getElementById("stickers-display").innerHTML = ""
    stickers.forEach(sticker => {
        let image =
        `<div class="sticker-container">
            <img class="sticker-image" src="stickers/set_${sticker.set}/${sticker.src}.png">
            <p class="sticker-character">${sticker.character}</p>
            <p class="sticker-name">${sticker.name}</p>
        </div>`
        document.getElementById("stickers-display").innerHTML += image
    })
}

function addSearch() {
    let searchBar = `<input type="text" id="search-bar" onkeyup="search()" placeholder="Search..."></input>`
    document.getElementById("header").innerHTML += searchBar
}

function search() {
    let query = document.getElementById("search-bar").value
    stickers = STICKERS.search(query)
    show(stickers)
}