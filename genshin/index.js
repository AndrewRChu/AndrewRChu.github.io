class Stickers {
    constructor() {
        this.data = [
        {'set': '1', 'id': '10', 'character': 'Amber', 'name': 'Save me!', 'src': '10_Amber_Save_me'}, {'set': '1', 'id': '11', 'character': 'Kaeya', 'name': 'That\'s funny!', 'src': '11_Kaeya_Thats_funny'}, {'set': '1', 'id': '12', 'character': 'Amber', 'name': 'Outta my way!', 'src': '12_Amber_Outta_my_way'}, {'set': '1', 'id': '13', 'character': 'Aether', 'name': 'Fall asleep', 'src': '13_Aether_Fall_asleep'}, {'set': '1', 'id': '14', 'character': 'Lumine', 'name': 'Please~', 'src': '14_Lumine_Please'}, {'set': '1', 'id': '15', 'character': 'Aether', 'name': 'Alert', 'src': '15_Aether_Alert'}, {'set': '1', 'id': '16', 'character': 'Lumine', 'name': 'Will 1 Mora do?', 'src': '16_Lumine_Will_1_Mora_do'}, {'set': '1', 'id': '1', 'character': 'Paimon', 'name': 'No problem!', 'src': '1_Paimon_No_problem'}, {'set': '1', 'id': '2', 'character': 'Paimon', 'name': 'Ship out!', 'src': '2_Paimon_Ship_out'}, {'set': '1', 'id': '3', 'character': 'Paimon', 'name': 'Hehe~', 'src': '3_Paimon_Hehe'}, {'set': '1', 'id': '4', 'character': 'Paimon', 'name': 'Time to eat!', 'src': '4_Paimon_Time_to_eat'}, {'set': '1', 'id': '5', 'character': 'Paimon', 'name': 'Surprised!', 'src': '5_Paimon_Surprised'}, {'set': '1', 'id': '6', 'character': 'Paimon', 'name': 'Too easy!', 'src': '6_Paimon_Too_easy'}, {'set': '1', 'id': '7', 'character': 'Amber', 'name': 'Noooo!', 'src': '7_Amber_Noooo'}, {'set': '1', 'id': '8', 'character': 'Jean', 'name': 'Oh...', 'src': '8_Jean_Oh'}, {'set': '1', 'id': '9', 'character': 'Lisa', 'name': 'Well done!', 'src': '9_Lisa_Well_done'},
        
        {'set': '2', 'id': '17', 'character': 'Sucrose', 'name': 'OK', 'src': '17_Sucrose_OK'}, {'set': '2', 'id': '18', 'character': 'Sucrose', 'name': 'I\'ll be good', 'src': '18_Sucrose_Ill_be_good'}, {'set': '2', 'id': '19', 'character': 'Sucrose', 'name': 'Doubt', 'src': '19_Sucrose_Doubt'}, {'set': '2', 'id': '20', 'character': 'Sucrose', 'name': 'Shame', 'src': '20_Sucrose_Shame'}, {'set': '2', 'id': '21', 'character': 'Mona', 'name': 'Love', 'src': '21_Mona_Love'}, {'set': '2', 'id': '22', 'character': 'Mona', 'name': 'Hehe', 'src': '22_Mona_Hehe'}, {'set': '2', 'id': '23', 'character': 'Keqing', 'name': 'Like', 'src': '23_Keqing_Like'}, {'set': '2', 'id': '25', 'character': 'Qiqi', 'name': 'Fallen', 'src': '25_Qiqi_Fallen'}, {'set': '2', 'id': '26', 'character': 'Qiqi', 'name': 'Secretly observing', 'src': '26_Qiqi_Secretly_observing'}, {'set': '2', 'id': '27', 'character': 'Qiqi', 'name': 'Oh!', 'src': '27_Qiqi_Oh'}, {'set': '2', 'id': '28', 'character': 'Venti', 'name': 'Expectant', 'src': '28_Venti_Expectant'}, {'set': '2', 'id': '29', 'character': 'Venti', 'name': 'Shocked', 'src': '29_Venti_Shocked'}, {'set': '2', 'id': '30', 'character': 'Venti', 'name': 'I have an idea!', 'src': '30_Venti_I_have_an_idea'}, {'set': '2', 'id': '31', 'character': 'Venti', 'name': 'Falling petals', 'src': '31_Venti_Falling_petals'}, {'set': '2', 'id': '32', 'character': 'Venti', 'name': 'Applause', 'src': '32_Venti_Applause'},
    
        {'set': '3', 'id': '33', 'character': 'Zhongli', 'name': 'Sipping tea', 'src': '33_Zhongli_Sipping_tea'}, {'set': '3', 'id': '34', 'character': 'Zhongli', 'name': 'I\'ll take them all', 'src': '34_Zhongli_Ill_take_them_all'}, {'set': '3', 'id': '36', 'character': 'Zhongli', 'name': 'Spread hands', 'src': '36_Zhongli_Spread_hands'}, {'set': '3', 'id': '37', 'character': 'Tartaglia', 'name': 'Sigh', 'src': '37_Tartaglia_Sigh'}, {'set': '3', 'id': '38', 'character': 'Tartaglia', 'name': 'Pleased', 'src': '38_Tartaglia_Pleased'}, {'set': '3', 'id': '39', 'character': 'Diona', 'name': 'Irritable', 'src': '39_Diona_Irritable'}, {'set': '3', 'id': '40', 'character': 'Diona', 'name': 'Bored', 'src': '40_Diona_Bored'}, {'set': '3', 'id': '41', 'character': 'Diona', 'name': 'Fearsome', 'src': '41_Diona_Fearsome'}, {'set': '3', 'id': '42', 'character': 'Diona', 'name': 'Proud', 'src': '42_Diona_Proud'}, {'set': '3', 'id': '43', 'character': 'Xinyan', 'name': 'I\'m heating up!', 'src': '43_Xinyan_Im_heating_up'}, {'set': '3', 'id': '44', 'character': 'Xinyan', 'name': 'So annoying!', 'src': '44_Xinyan_So_annoying'}, {'set': '3', 'id': '45', 'character': 'Keqing', 'name': 'Mad', 'src': '45_Keqing_Mad'}, {'set': '3', 'id': '46', 'character': 'Keqing', 'name': 'I refuse.', 'src': '46_Keqing_I_refuse'}, {'set': '3', 'id': '47', 'character': 'Mona', 'name': 'So hungry...', 'src': '47_Mona_So_hungry'}, {'set': '3', 'id': '48', 'character': 'Mona', 'name': 'Mora!', 'src': '48_Mona_Mora'},
        
        {'set': '4', 'id': '49', 'character': 'Albedo', 'name': 'Have some flowers', 'src': '49_Albedo_Have_some_flowers'}, {'set': '4', 'id': '50', 'character': 'Albedo', 'name': 'It was nothing', 'src': '50_Albedo_It_was_nothing'}, {'set': '4', 'id': '51', 'character': 'Albedo', 'name': 'What happened?', 'src': '51_Albedo_What_happened'}, {'set': '4', 'id': '52', 'character': 'Albedo', 'name': 'Cold', 'src': '52_Albedo_Cold'}, {'set': '4', 'id': '53', 'character': 'Ganyu', 'name': 'Snoozing', 'src': '53_Ganyu_Snoozing'}, {'set': '4', 'id': '54', 'character': 'Ganyu', 'name': 'No touching!', 'src': '54_Ganyu_No_touching'}, {'set': '4', 'id': '55', 'character': 'Ganyu', 'name': 'Upset', 'src': '55_Ganyu_Upset'}, {'set': '4', 'id': '56', 'character': 'Ganyu', 'name': 'Not bad', 'src': '56_Ganyu_Not_bad'}, {'set': '4', 'id': '57', 'character': 'Ganyu', 'name': 'Pray', 'src': '57_Ganyu_Pray'}, {'set': '4', 'id': '58', 'character': 'Ganyu', 'name': 'Good Morning', 'src': '58_Ganyu_Good_Morning'}, {'set': '4', 'id': '59', 'character': 'Sucrose', 'name': 'You can do it!', 'src': '59_Sucrose_You_can_do_it'}, {'set': '4', 'id': '60', 'character': 'Sucrose', 'name': 'Recording', 'src': '60_Sucrose_Recording'}, {'set': '4', 'id': '61', 'character': 'Tartaglia', 'name': 'Shocked', 'src': '61_Tartaglia_Shocked'}, {'set': '4', 'id': '62', 'character': 'Tartaglia', 'name': 'The light fades', 'src': '62_Tartaglia_The_light_fades'}, {'set': '4', 'id': '63', 'character': 'Fischl', 'name': 'Not at all!', 'src': '63_Fischl_Not_at_all'}, {'set': '4', 'id': '64', 'character': 'Fischl', 'name': 'Hahaha', 'src': '64_Fischl_Hahaha'}
        ]
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