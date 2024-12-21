javascript:(function() {
  const playerContainer = document.getElementById('player-container');
  const boostLowerLeft = document.querySelector('.__isboostLowerLeft');
  
  if (playerContainer) playerContainer.remove();
  if (boostLowerLeft) boostLowerLeft.remove();
})();
