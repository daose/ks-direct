console.log('RV script starting');

mp4Links = document.getElementsByTagName('source');
if (mp4Links.length > 0) {
  mp4Link = mp4Links[0].src
  console.log('Found mp4 link: ', mp4Link);

  window.location = mp4Link;
} else {
  console.err('Could not find mp4 link');
}

