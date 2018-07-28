console.log('KS script starting');

// HELPER FUNCTIONS
function getTextFromResponse(response) {
  console.log('Scraping: ', response.url)

  if (response.ok) {
    return response.text();
  } else {
    return Promise.reject(new Error('Invalid response'));
  }
}

// SETUP
var re = new RegExp('"https://www.rapidvideo.com/.+?"')
var buttons = document.getElementsByClassName('specialButton');

// START
if (buttons.length > 0) {
  var link = buttons[0].href
  fetch(link)
    .then(getTextFromResponse)
    .then(function(data) {
      // Extract the RV url
      var urls = re.exec(data);
      if (urls.length > 0) {
        // Get rid of quotation
        url = urls[0].slice(1, -1);
        console.log('Found url: ', url);

        // Redirect to RV link instead of scraping directly
        // (due to CORS)
        window.location = url;
      } else {
        return Promise.reject(new Error('Could not find URL'));
      }
    })
    .catch(function(err) {
      console.err(err);
    })
} else {
  console.err('Could not find skip button');
}
