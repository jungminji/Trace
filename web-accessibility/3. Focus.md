# Focus

- WebAIM checklist
  - 2.1.1: [http://webaim.org/standards/wcag/checklist#sc2.1.1](http://webaim.org/standards/wcag/checklist#sc2.1.1)



- **Focus** determines where **keyboard events** go in the page
  - `Tab` will move focus <u>forward</u>
  - `Shift + Tab` will move focus <u>backwards</u>
  - `Arrow keys` can be used to navigate <u>inside of a component</u>



## Tab Order

**Implicitly** focusable

- automatically in the tab order + build-in keyboard event handling



Tab order corresponds to the DOM order

- The reading and navigation order (determined by code order) is logical and intuitive



**Confusion: Example**

```html
<button style="float: right;">
  I should  
</button>
<button>Be Focused</button>
<button>Last!</button>
```

