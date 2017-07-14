# Skip links

- On most websites the main content is usually not the first thing in the DOM, instead we often begin with navigation, sublists, sidebars, hamburger menus, and other bits of page scaffolding.
- Ths means that keyboard and screen reader users must first navigate through all of this content before they can get at the actual heart of the page.
- Add little option to skip to main content


![Screen Shot 2017-07-10 at 3.58.16 PM](img/skip.link.png)



```html
<a href="#maincontent" class="skip-link">Skip to main content</a>

<nav>
...
</nav>
<main id="maincontent">
...
</main>
```

```css
.skip-link{
  position: absolute;
  top: -40px;
  left: 0;
  background: #bf1722;
  color: white;
  padding: 8px;
  z-index: 100;
}
.skip-link:focus{
  top: 0;
}
/* Hide before focus */
/* Improve experience for impairments */
```

