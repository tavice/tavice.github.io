# Drive To Survive
We have a car that can drive up, down, left and right along a road . There are obstacles coming your way (other vehicles, objects) the goal is to avoid them. Try to keep your vehicle on the road as long as possible to reach the highest score !

# Wireframe

wireframe/wire1.jpeg
wireframe/wire2.jpeg
wireframe/wire3.jpeg


# MVP Goals
As a player I want my car to go up/down/left and right so that my car can avoid the obstacles
As a player I want to be informed when the game is over when I hit an obstacle so that I can start again or stop the game
As a player I want to see my score so that I know if I am getting better at this game
As a player I want the UI to be nice so that the game is not boring

# Stretch Goals
As a player I want to see different levels so that the game is not boring
As a player I want to see the maximum score reached in the game so that I have a goal to attain
As player I want to be able customize my vehicle so that the vehicle feels more personal
As a player I want to see different landscape so that the game is evolving throughout time


# Function Explanation
# function checkCollision
Note: I used chatGPT to make it cleaner

 If the bottom of a is above the top of b OR if the top of a is below the bottom of b OR if the right side of a is to the left of the left side of b OR if the left side of a is to the right of the right side of b. If any of these conditions are true, the elements are not colliding, and the function returns false. If none of these conditions are true, the elements are colliding, and the function returns true.

# function MOVINGLINES
The movingLines function updates the position of lines on the web page.

The function starts by using querySelectorAll to get all elements with the class name "lines". It then uses a forEach loop to iterate over each of these elements.

For each line, the function checks if its y position is greater than or equal to 700 (the game area). If it is, it subtracts 750 from y to make it start over at the top of the screen. The function then adds the speed of the player object to the line's y position to update it. Finally, the function sets the top style property of the line to be equal to item.y + 'px' to move the line vertically on the screen.

The top style property in JavaScript refers to the position of an element relative to the top edge of its nearest positioned ancestor element. The position is specified in pixels and can be either positive (meaning the element will be positioned below its nearest ancestor) or negative (meaning the element will be positioned above its nearest ancestor).


# function moveCar

 The moveCar function is a JavaScript function that moves cars on a web page and checks for collisions between a car represented by the car argument and other cars on the page.

The function starts by using querySelectorAll to get all elements with the class name "other". It then uses a forEach loop to iterate over each of these elements.

For each other car, the function calls the checkCollision function and passes it the car argument and the current newOtherCar. If the function returns true, it indicates that the two cars have collided and the function logs the message "HIT" to the console. The function then calls the endGame function to end the game.

The function also checks if the y position of the current newOtherCar is greater than or equal to 750. If it is, the function resets the car's position to the top of the screen by setting item.y to -300 and randomly moving the car horizontally by setting its left style property. The function then updates the y position of the item by adding player.speed to it and sets its top style property to item.y + 'px' to move it vertically on the screen.

  
# function changeSpeed
changing speed depending on the player current score


# function gamePlay
  The gamePlay function is used to control the gameplay of a racing game. The function takes no parameters and it is called repeatedly using the window.requestAnimationFrame method to animate the game.

Here is what the function does:

 Selects the player's car using document.querySelector('.car') and gets the dimensions of the game area using gamearea.getBoundingClientRect().
If the game is started (if (player.start)), the function performs the following actions:
Calls the movingLines function to animate the road lines.
Calls the moveCar function to animate the opponent cars and check for collision with the player's car.
Updates the player's position based on the state of the arrow keys (keys.ArrowUp, keys.ArrowDown, keys.ArrowLeft, and keys.ArrowRight) and the dimensions of the game area.
Sets the player's car's top and left style properties to update its position on the screen.
Calls gamePlay again using window.requestAnimationFrame to continue the animation.
Updates the player's score and highest score displayed on the screen.
The gamePlay function is responsible for updating the state of the game and animating it on the screen.

 # function start

It adds the class 'hide' to the startscreen element, effectively hiding it from view.
It clears any content inside the gamearea element.
It sets the player.start property to true.
It calls the gamePlay function.
It creates 5 road lines and adds them to the gamearea element.
It creates a car element and adds it to the gamearea element.
It sets the initial player.x and player.y properties based on the car element's left and top offsets.
It creates  4 other cars with random classes and adds them to the gamearea element and add a random div to these 4 cars to change the styling of the car
It sets each other car's top and left properties randomly, and sets their initial y coordinate based on a formula.


# credit photos

DallE,