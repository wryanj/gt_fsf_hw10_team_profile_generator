# GT_fsf_HW10_NodeJS_ReadME_Generator
## Table of Contents
1. [Description](#Description)
3. [Usage](#Usage)
4. [Installation](#Installation)
5. [Licenses](#Licenses)
6. [Questions](#Questions)
7. [Credits](#Credits)

## Description
This assignment required us to utilize node js, and related npm pacakges (such as inquirer) to create some specific HTML content based on user inputs. We also had to create unit tests using npm Jest and demonstrate the functionality in walk through videos. Screenshots and a demo video (gif format) can be found below. 

**Demo Video**
ENTER

This project challenged me more than the prior ones. I further familiarized myself with arrow functions, and used unit testing for the first time. In prior front end projects I would write my code top to bottom as it was "happening" (since it was typically being started with an on-click event and functions were hoisted), but this time I defined functions as expressions near the top of the page in some instances, and invoked them later. I wrapped my starting sequence in a small init. function that I call at the very bottom of the index.js script. 

All my unit tests for my classes and related methods / constructors passed. In one instance, I was actually able to successfully use them to catch an issue I would have otherwise missed. 

I used validation to confirm inquirer prompt responses. For all questions, some validation (example cannot be blank, has to be number or text...) was presnt.

Below are some images and screenshots, as well as a video demo how the application works. My generated html included the bootstrap 5 cdn so that it could use minimum css and remain mobile responsive.


**Screenshot of Rendered HTML on Desktop**
![image](https://user-images.githubusercontent.com/72420733/109347606-69502700-7841-11eb-827f-7ba296596a1c.png)

**Screenshot of Rendered HTML on Mobile**
![image](https://user-images.githubusercontent.com/72420733/109347918-da8fda00-7841-11eb-8202-46fac0514f00.png)

**Screenshot CLI after setting up new employees**
![image](https://user-images.githubusercontent.com/72420733/109347990-f4312180-7841-11eb-8cd2-9f720ca20661.png)

**Screenshot CLI after execution of unit testing**
![image](https://user-images.githubusercontent.com/72420733/109348588-ba144f80-7842-11eb-8b0b-f842555dc6d6.png)


## Usage
This application can be used to quickly generate static team profile page in HTML. By running the application from the terminal you can enter prompted answers to questions, and have the answers written into a formatted document that is mobile responsive.

## Installation
To install this application you just need to ensure that you have nodeJS and run the npm i command to get required dependencies (inquirer and jest). For jest, make sure the package.json tests object has jest entered for its tests property.

## Licenses
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)  
https://opensource.org/licenses/MIT

## Questions
Email me at ryanjohnson9685@gmail.com for more information.
You can also find me on github with the user name wryanj. 
Check my profile out here: https://github.com/wryanj

## Credits
For this assignment I utilized class notes and recordings, as well as some MDM and W3 schools. I also reviewed the npm documentation for jest and inquirer for specific questions dealing with setup and validation.