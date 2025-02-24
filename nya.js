javascript:(function() {
  const playerContainer = document.getElementById('player-container');
  const boostLowerLeft = document.querySelector('.__isboostLowerLeft');
  
  if (playerContainer) playerContainer.remove();
  if (boostLowerLeft) boostLowerLeft.remove();

  const elements = document.querySelectorAll('a.na_url');

  elements.forEach(element => {
    const sponsoredElement = element.querySelector('.na_pr');
    const postListTimeElement = element.querySelector('.post-list-time');

    if (sponsoredElement && !postListTimeElement) {
      element.remove();
    }
  });
})();
