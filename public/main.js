// main.js

var update = document.getElementById('update');

update.addEventListener('click', function () {
  // send PUT request here

  fetch('quotes', // first param = path (we are sending request to /quote, which will be handled on our server

    // 2nd param = optional object with settings
    {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // converting quote to JSON format
        'name': 'Darth Vader',
        'quote': 'I find your lack of faith disturbing.'
      })
    })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
  })
  .then(data => {
    console.log(data);
    window.location.reload(true);
  });
});