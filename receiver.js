const context = cast.framework.CastReceiverContext.getInstance();



// Update style using javascript
let playerElement = document.getElementsByTagName("cast-media-player")[0];
playerElement.style.setProperty('--splash-image', 'url("https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png")');



context.start();
