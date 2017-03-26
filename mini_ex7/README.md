<H1>THE MASK</H1>

*note: not related to the Jim Carrey movie of the same name*

![screenshot](https://github.com/duendue/Aesthetic-Programming-2017/blob/gh-pages/mini_ex7/miniex7.png)

[program weblink](https://duendue.github.io/Aesthetic-Programming-2017/mini_ex7/The%20Mask2/)

(please note: the textbox is case sensitive, so lower case is recommended for full experience)

<h5>The Process</h5>

Well, this mini_ex assignment turned out to be a roller coaster of emotions, both litteraly and figuratively. I had a vision for what I wanted my program to turn into realatively early on in the progress. I wanted to create a display of checkboxes that would react visually to inputs from the user. Kind of like a chatbot, but instead of textual answers, I wanted to create faces and shapes in the checkboxes. These faces would represent the emotional statements that the user would type to the machine. I thought this would be relatively easy, after I watched the Daniel Shiffman videos on checkboxes. I was wrong, and this might have turned out to be the mini_ex I have spent the most time working on. There were several times in the progress where I thought it would end in tragedy and I would have to turn to an easier alternative. However, during the course of the weekend and many cups of coffee later I finally got the core functionality to work.


<h5>The Program</h5>

The program basically loads an image of a theatre mask expressing an emotion. Then, to increase the readability and framerate, the image gets scaled down so the resolution decreases. Then, the loadPixels function reads the colors of every pixel on the mask. These colors gets changed into a brightness value, that when it gets compared to a threshold value decides if a checkbox should be activated or not. In short, the checkboxes works as a “filter” which is placed on top of an image. I added the sliders as a final touch today, to give the screen of checkboxes some “character”. I thought it felt more alive and organic with the sliders. They respond to whatever emotion the face is expressing.


<h5>Objects</h5>

I didn’t realize that the mini_ex had to contain both ordinary p5.js objects and HTML objects, so my program is mainly focused around HTML objects as I have used ordinary p5.js objects in earlier mini_ex assignments. I could probably have adjusted the code a little to accommodate ordinary objects, however, as its getting late I would rather talk about objects in general.

1.	**General Objects:**
I think the objects of p5.js adds a lot of dynamics and modularity to the coding process. It opens up for a lot of possibilities, without adding too many new syntaxes to remember. It makes the code more readable for outsiders, and structurally makes more sense. If you have to generate a lot of squares, triangles, or something else, it helps a lot to create an object as it is very versatile. For example, for an earlier mini_ex assignment I made some snakes who would crawl around at random locations around the canvas. I wrote all the code for one individual snake inside of one function, which I could afterwards run how many times I wanted, to generate any number of snakes. Also, considering that the main bulk of the functions in p5.js is made around manipulating objects, of some shape or form, it only makes sense to work through these. The problem with objects could be if you want to make a radical change of something, it might mess something else up, because everything within the object can be closely interconnected.

2.	**HTML objects:**
Naturally, as this mini_ex have been the reason for much blood, sweat and tears, I have mixed opinions about HTML objects. I think they give a lot of control over your program during the development process. I, for one, used sliders to determine which value the threshold should be at, to make the masks visually pleasing. This would had taken a long time, if I had to go through a lot of numbers manually until I found the right value. However, I’m not a fan of how little control and how hard it is to manipulate HTML objects on their own. I spend the longest time placing the sliders, the input box and the checkboxes so they were positioned correctly in relation to each other, and I still think there’s problem with the placement if you run the program on a different screen resolution. I had to manipulate the Index file to get the checkboxes to line up in a grid properly, which I also thought were quite the hassle.
