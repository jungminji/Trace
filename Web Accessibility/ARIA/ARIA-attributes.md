# Modify semantics

```html
<button class="toggle" checked>
  Enable
</button>
```

- Above code is more semantic in below code

```html
<button role="switch" aria-checked="true" class="toggle">
	Enable  
</button>
```



- switch role is part of the forthcoming ARIA 1.1 spec

[https://www.w3.org/TR/wai-aria-1.1/#switch](https://www.w3.org/TR/wai-aria-1.1/#switch)





# Adding extra label

```html
<button class="glyph">
  <div class="filter-glyph">
    ...
  </div>
</button>
```

- using aria-label

```html
<button class="glyph" aria-label="Filter">
  <div class="menu-glyph">
    ...
  </div>
</button>
```





# Controls

```html
<button aria-expanded="false" aria-controls="advanced-settings">
  <h2>
    Advanced settings
  </h2>  
</button>
<div id="advanced-settings">
  ...
</div>
```

- indicates where button controls

