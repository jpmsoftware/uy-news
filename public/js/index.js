var cards = document.querySelectorAll('.card-body');
var inactiveCards = document.querySelectorAll('.color-layer');
var clickedCard;
var currentActive;
var controls = document.querySelectorAll('.controls *');
var currentIndex = 1;

// For all cards
cards.forEach(card => {
    card.addEventListener('scroll', () => {
        if (card.scrollTop >= 744) {
            card.nextElementSibling.style.display = 'none';
        } else {
            card.nextElementSibling.style.display = 'block';
        }
    });
});

inactiveCards.forEach(inactive => {
    inactive.addEventListener('click', (e) => {
        loadElements(e);

        // switch 'inactive' class between cards
        clickedCard.classList.remove('inactive');
        clickedCard.classList.add('active');

        currentActive.classList.add('inactive');
        currentActive.classList.remove('active');

        if (clickedCard.nextElementSibling === null) {
            document.querySelector('body .container').insertBefore(clickedCard, document.querySelectorAll('.card')[0].nextElementSibling);
        } else {
            // switch positions
            document.querySelector('body .container').insertBefore(clickedCard, document.querySelectorAll('.card')[2]);
        }
    });
});

controls.forEach(control => {
    control.addEventListener('click', (e) => {
        Move(e.target.id);
    });
});

function loadElements(e) {
    // Gets: clicked element (card) & currently active card
    clickedCard = e.target.parentElement;
    currentActive = document.querySelector('.active');
}

function Move(direction) {
    var cardsCollection = document.querySelectorAll('.card');

    switch (direction) {
        case 'bk':
            if(currentIndex > 0) {
                cardsCollection[currentIndex].classList.remove('active');
                for (var i = 0; i < cardsCollection.length; i++) {
                    if(i === (currentIndex - 1)) {
                        cardsCollection.forEach(card => { card.classList.add('inactive') });
                        cardsCollection[i].classList.remove('inactive');
                        cardsCollection[i].classList.add('active');
                    }
                }
                currentIndex--;
            }
            else {
                alert('no hay mas cards');
            }
            break;

        case 'fw':
            if(currentIndex < 2) {
                cardsCollection[currentIndex].classList.remove('active');
                for (var i = 0; i < cardsCollection.length; i++) {
                    if(i === (currentIndex + 1)) {
                        cardsCollection.forEach(card => { card.classList.add('inactive') });
                        cardsCollection[i].classList.remove('inactive');
                        cardsCollection[i].classList.add('active');
                    }
                }
                currentIndex++;
            } else {
                alert('no hay mas cards');
            }
            break;
    }
    //2 get all three cards
    //3 detect current card position in array of cards
    //4 if currentIndex === array.length is the last card; do not move forward; arrow display none
    //5 else move
    //6 do the oppostive for moving backwards (left)
}