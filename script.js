/* =========================
   LANGUAGE SWITCH
========================= */

function setArabic(){
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';

    document.getElementById('title-ar').classList.remove('hidden');
    document.getElementById('sub-ar').classList.remove('hidden');

    document.getElementById('title-en').classList.add('hidden');
    document.getElementById('sub-en').classList.add('hidden');
}

function setEnglish(){
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';

    document.getElementById('title-en').classList.remove('hidden');
    document.getElementById('sub-en').classList.remove('hidden');

    document.getElementById('title-ar').classList.add('hidden');
    document.getElementById('sub-ar').classList.add('hidden');
}


/* =========================
   SEARCH FUNCTION
========================= */

function searchCards(){
    let filter = document.getElementById('search').value.toLowerCase();
    let cards = document.querySelectorAll('.card');

    cards.forEach(card=>{
        let text = card.innerText.toLowerCase();

        if(text.includes(filter)){
            card.style.display = 'block';
        }else{
            card.style.display = 'none';
        }
    });
}


/* =========================
   FLIP ON CLICK (MOBILE)
========================= */

document.addEventListener("DOMContentLoaded", function(){

    const cards = document.querySelectorAll(".card");

    cards.forEach(card=>{
        card.addEventListener("click", function(){
            card.classList.toggle("flipped");
        });
    });

});
