const dictionary = (word) => {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f5ef383348msh1201ce6c60347e3p1382cbjsn1f7c5bf262ec',
            'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch(`https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            document.getElementById('wordhead').innerHTML = `Result for ${response.word}`;
            
            document.getElementById('def').innerHTML = response.definition.replace("2.","<br>2. ").replace("3.","<br>3. ").replace("4.","<br>4. ").replace("5.","<br>5. ").replace("6.","<br>6. ").replace("7.","<br>7. ").replace("8.","<br>8. ");
        })
        .catch(err => console.log(err));
};

document.getElementById('searchbtn').addEventListener('click', (e) => {
    e.preventDefault();
    dictionary(document.getElementById('search').value);
});
