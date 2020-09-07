document.getElementById("help").onclick = function () {
    document.getElementById("form").style.display = "block";
    document.getElementById("qr").style.display = "none";
}
document.getElementById("shop").onclick = function () {
    document.getElementById("form").style.display = "none";
    document.getElementById("qr").style.display = "none";
}
document.getElementById("contribute").onclick = function () {
    document.getElementById("form").style.display = "none";
    document.getElementById("qr").style.display = "none";
}
document.getElementById("scan").onclick = function () {
    document.getElementById("form").style.display = "none";
    document.getElementById("qr").style.display = "block";
}

document.getElementById('help').click();

let hk = {
    "0": {
        ref: 'c.m.wa.sticker.SrilaPrabhupadaQuotes.free',
        title: 'Srila Prabhupada Daily Quotes Stickers - free',
        logo: 'https://lh3.googleusercontent.com/itih4qVZIXWqYbyTykZPTHoNNASBm7uq3DWhRECw80ESd7XU9I6JoPoyrNmUuuoGXWo=s180'
    },
    "1": {
        ref: 'c.m.wa.sticker.SrilaPrabhupadaQuotes.adsFree',
        title: 'Srila Prabhupada Daily Quotes Stickers',
        logo: 'https://lh3.googleusercontent.com/itih4qVZIXWqYbyTykZPTHoNNASBm7uq3DWhRECw80ESd7XU9I6JoPoyrNmUuuoGXWo=s180'
    },
    "2": {
        ref: 'c.m.wa.sticker.SrilaPrabhupada.free',
        title: 'Srila Prabhupada Stickers - free',
        logo: 'https://lh3.googleusercontent.com/U7Dw9WppUZ8ya2hsM7VsWeTZCF2kGHbZ8G0YN18axUJMs8OxPO0zV0pR81jyX6XD2w=s180'
    },
    "3": {
        ref: 'c.m.wa.sticker.SrilaPrabhupada.adsFree',
        title: 'Srila Prabhupada Stickers',
        logo: 'https://lh3.googleusercontent.com/U7Dw9WppUZ8ya2hsM7VsWeTZCF2kGHbZ8G0YN18axUJMs8OxPO0zV0pR81jyX6XD2w=s180'
    },
    "4": {
        ref: 'c.m.wa.sticker.modi.free',
        title: 'PM Modi Stickers - free',
        logo: '/covid/1/3.webp'
    },
    "5": {
        ref: 'c.m.wa.sticker.modi.adsFree',
        title: 'PM Modi Stickers',
        logo: '/covid/1/3.webp'
    },
    "6": {
        ref: 'c.m.wa.sticker.love.free',
        title: 'Love Story Stickers - free',
        logo: '/love/5/12.webp'
    },
    "7": {
        ref: 'c.m.wa.sticker.love.adsFree',
        title: 'Love Story Stickers',
        logo: '/love/5/12.webp'
    },
    "8": {
        ref: 'c.m.wa.sticker.devotional.free',
        title: 'Devotional Stickers - free',
        logo: ''
    },
    "9": {
        ref: 'c.m.wa.sticker.devotional.adsFree',
        title: 'Devotional Stickers',
        logo: ''
    },
    "10": {
        ref: 'c.m.wa.sticker.maker.free',
        title: 'Social Media Sticker Creator - free',
        logo: ''
    },
    "11": {
        ref: 'c.m.wa.sticker.maker.adsFree',
        title: 'Social Media Sticker Creator',
        logo: ''
    },
    "12": {
        ref: 'c.m.wa.sticker.stayhome.adsFree',
        title: 'Staty Home Stay Safe Stickers',
        logo: '/covid/3/2.webp'
    },
    "13": {
        ref: 'c.m.wa.sticker.ibc.free',
        title: 'IBC Assistant - free',
        logo: '',
        privacy: 'https://bada-business-ibc.web.app/app/privacy'
    },
    "14": {
        ref: 'c.m.wa.sticker.ibc.adsFree',
        title: 'IBC Assistant',
        logo: '',
        privacy: 'https://bada-business-ibc.web.app/app/privacy'
    },
    "21": {
        ref: 'com.mayank.krishnaapps.shravanotsava',
        title: 'Śravaṇotsava',
        logo: ''
    },
    "22": {
        ref: 'com.mayank.krishnaapps.radhanathswami',
        title: 'Rādhānāth Swāmi Lectures and Kirtans',
        logo: ''
    },
    "23": {
        ref: 'com.mayank.krishnaapps.lokanathswami',
        title: 'Lokanāth Swāmi Lectures and Kirtans',
        logo: ''
    },
}

let str = window.location.toString();
let n = str.indexOf('?'), n1 = str.indexOf('&p'),
    ind = 0;
if (n1 > 0) str = str.substr(0, n1);
if (n > 0 && !isNaN(ind = str.substr(n + 1))) {
    document.getElementById("r").href = 'https://play.google.com/store/apps/details?id=' + hk[ind].ref;
    document.getElementById('qr').src = '3/' + ind + '.webp'
    document.getElementById('logo').src = hk[ind].logo;
    document.getElementById('title').innerText = hk[ind].title + ' App';
    if (n1 > 0)
        location = hk[ind].hasOwnProperty('privacy') && hk[ind].privacy.startsWith('http') ? hk[ind].privacy : 'https://krishna-apps.github.io/WhatsApp-Stickers';
    else
        document.getElementById("r").click();
} else {
    document.getElementById('qr').src = '3/x.webp'
}