class Stickers {
    constructor() {
        this.data = [{'set': '1', 'id': '10', 'character': 'Amber', 'name': 'Save_me', 'src': '10_Amber_Save_me'}, {'set': '1', 'id': '11', 'character': 'Kaeya', 'name': 'Thats_Funny', 'src': '11_Kaeya_Thats_Funny'}, {'set': '1', 'id': '1', 'character': 'Paimon', 'name': 'No_problem', 'src': '1_Paimon_No_problem'}, {'set': '1', 'id': 
        '2', 'character': 'Paimon', 'name': 'Ship_out', 'src': '2_Paimon_Ship_out'}, {'set': '1', 'id': '3', 'character': 'Paimon', 'name': 'Hehe', 'src': '3_Paimon_Hehe'}, {'set': '1', 'id': '4', 'character': 'Paimon', 'name': 'Time_to_eat', 'src': '4_Paimon_Time_to_eat'}, {'set': '1', 'id': '5', 'character': 'Paimon', 'name': 'Surprised', 'src': '5_Paimon_Surprised'}, {'set': '1', 'id': '6', 'character': 'Paimon', 'name': 'Too_easy', 'src': '6_Paimon_Too_easy'}, {'set': '1', 
        'id': '7', 'character': 'Amber', 'name': 'Noooo', 'src': '7_Amber_Noooo'}, {'set': '1', 'id': '8', 'character': 'Jean', 'name': 'Oh', 'src': '8_Jean_Oh'}, {'set': '1', 'id': '9', 'character': 'Lisa', 'name': 'Well_done', 'src': '9_Lisa_Well_done'}]
    }
    all() {
        return this.data
    }
}

const STICKERS = new Stickers()

window.onload = function() {
    show(STICKERS.all().sort((a, b) => a.id - b.id))
  };

function show(stickers) {
    // document.getElementById("stickers-display").innerHTML = ""
    stickers.forEach(sticker => {
        let image =
        `<div class="sticker-container">
            <img class="sticker-image" src="stickers/set_${sticker.set}/${sticker.src}.png">
            <p class="sticker-name">${sticker.name}</p>
        </div>`
        document.getElementById("stickers-display").innerHTML += image
    })
}