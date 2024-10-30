// Variables score let and const

// Their is how does variables let and const working inside dinamically functions.

let movie = 'Lord od the Rings';

// var movie = 'Batman v Superman';

    // OBS: If I try to declare other variable with the same name results in 'error' this already been declare.

function starWarsFan(){
    const movie = 'Star Wars';
    return movie;
}

function marvelFan(){
    movie = 'The Avangers';
    return movie;
}

function blizzardFan(){
    const isFan = true;
    let phrase = 'Warcraft'
    console.log('Before if: ' + phrase);
    if(isFan){
        let phrase = 'initial text';
        phrase = 'For the Horde!';
        console.log('Inside if: ' + phrase); 
    }
    phrase = 'For the Alliance!';
    console.log('After if: ' + phrase);
}
console.log(movie);
console.log(starWarsFan());
console.log(marvelFan());
console.log(movie);
blizzardFan();
