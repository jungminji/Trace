# Managing focus

- You shouldn't add tabindex to site content as a general rule



### Exception

- SPA
- A user goes and clicks on one of the menu items, and the page then animated scroll, down to that particular section
- In this case, give the tab index of negative one so it doesn't appear in the natural tab order, and call its focus method after the user has taken their action
- This process is called **Managing Focus**


