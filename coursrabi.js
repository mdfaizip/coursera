var fb = document.getElementById('fb');
var cb = document.getElementById('cb');
var filterList = document.querySelector('.f-l');

fb.addEventListener('click', function () {
    filterList.style.display = 'block';
    fb.style.display = 'none';
    cb.style.display = 'block';
});

cb.addEventListener('click', function () {
    filterList.style.display = 'none';
    cb.style.display = 'none';
    fb.style.display = 'block';
});




document.getElementById("opm").addEventListener("click", function () {
    document.getElementById("mm").style.display = "block";
    document.getElementById("opm").style.display = "none";
    document.getElementById("clm").style.display = "inline-block";
});

document.getElementById("clm").addEventListener("click", function () {
    document.getElementById("mm").style.display = "none";
    document.getElementById("opm").style.display = "inline-block";
    document.getElementById("clm").style.display = "none";
});



const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const cards = document.querySelectorAll('.box');
        const noMatchingCardsMessage = document.getElementById('no-match-c');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const checkedCategories = [];
                checkboxes.forEach(checkbox => {
                    if (checkbox.checked) {
                        checkedCategories.push(checkbox.value);
                    }
                });

                if (checkedCategories.length === 0) {
                    cards.forEach(card => {
                        card.style.display = 'block';
                    });
                    noMatchingCardsMessage.style.display = 'none';
                } else {
                    let anyCardVisible = false;

                    cards.forEach(card => {
                        const categories = card.dataset.category.split(' ');
                        const showCard = categories.some(category => checkedCategories.includes(category));
                        card.style.display = showCard ? 'block' : 'none';

                        if (showCard) {
                            anyCardVisible = true;
                        }
                    });

                   
                    if (anyCardVisible) {
                        noMatchingCardsMessage.style.display = 'none'; 
                    } else {
                        noMatchingCardsMessage.style.display = 'block';
                    }
                }    
            });
        });




