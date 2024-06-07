# Ping Coming Soon Page

## Get ready for the launch of Ping with this sleek and modern coming soon page!

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Get ready for the launch of Ping with this sleek and modern coming soon page! Users can view the optimal layout for the site depending on their device's screen size, see hover states for all interactive elements on the page, and submit their email address using an input field. Error messages are displayed if the input field is empty or if the email address is not formatted correctly.

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Design Preview](./design/desktop-design.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/SartHak-0-Sach/Ping-coming-soon-page_frontend_project)
- Live Site URL: [Live Site](https://ping-coming-soon-frontend.netlify.app/)

## My process

### Built with

- HTML5
- CSS3

You will find all the required assets in the `/design` folder. The assets are already optimized.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

### What I learned

I got to learn a lot while making this project by applying various concepts in HTML, CSS, JavaScript in designing all elements of this webpage and making them responsive and interactive for users. One such concept is event listeners as shown below-

```js
form.addEventListener('submit', e => {
    e.preventDefault()

    let email = form.querySelector('input').value
    let small = form.querySelector('small')

    if (email.trim() === '') {
        form.classList.add('error')
        small.style.color = 'red'
        small.innerHTML = 'Email cannot be empty'
        
     } else if (!valid(email)) {
        form.classList.add('error')
        small.style.color = 'red'
        small.innerHTML = 'Please provide a valid email'

     } else {
        small.style.color = 'green'
        small.innerHTML = 'Email comfirm'

        setTimeout(() => {
        form.classList.remove('error')
        }, 1000);
     }
})
```

### Continued development

The continuously learning journey of a programmer never ends. This project made me realize that there are many concepts that I need to work upon including fundamentals like flex-box and its properties, to more complex concepts like working with fetch and async await in JavaScript. These areas are some that I think I need to work more upon in the upcoming future as they highlight some of the most significant regions of web development that are important for every developer to know of. 

These key points mentioned here will help me grow accountable and consistent towards improving at writing good quality code and be a successful full stack developer one day.

### Useful resources

- [Harkirat Singh course notes](https://github.com/SartHak-0-Sach/harkirat-singh-course_code_and_notes) - I have added notes of all lectures along with code and lecture insights of all weeks along with bonus lectures to help you all as much as I can.
- [My development code and notes](https://github.com/SartHak-0-Sach/cwh-web-dev-playlist_code_and_notes) - These are my notes that I made while working on my development skills in initial days and did these courses. Make sure to star the repository if you like it.✨💫
- [MDN documentation hover state for CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) - This is an amazing article which helped me finally understand hover states. I'd recommend it to anyone still learning this concept.

## Author

<b><strong>Sarthak Sachdev</strong></b>
- Website - [Sarthak Sachdev](https://itsmesarthak.netlify.app/)
- LeetCode - [@sarthak_sachdev](https://leetcode.com/u/sarthak_sachdev/)
- Twitter - [@sarthak_sach69](https://www.twitter.com/sarthak_sach69)

## Acknowledgments

I feel like the solutions provided on the website and the continuous doubt solving by industry experts on discord for free is something that is unmatched by anyone else and need to be acknowledged for their efforts in improving me as a developer by suggesting the best practices in your respective tech stack.

## Got feedback for me?

I love receiving feedback! I am always looking to improve my code and take up new innovative ideas to work upon. So if you have anything you'd like to mention, please email 'hi' at saarsaach30[at]gmail[dot]com.

If you liked this project make sure to spread the word and share it with all your friends.

**Happy coding!** ☺️🚀
