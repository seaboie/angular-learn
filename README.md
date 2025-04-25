# Tutorial

## 🛠️ 🛠️ 🛠️ Class binding  

The `[class.classname]` binding in Angular is used to add or remove a CSS class based on a boolean condition, not to directly set style properties like font size.

Here are a few correct ways to achieve what you might be trying to do:

### Option 1: Conditional class application
If you want to apply a class "fontsize" when a condition is true:
```html
<button [class.fontsize]="isActive">Active</button>
```
And in your CSS:
```css
.fontsize {
  font-size: 28px;
}
```

### Option 2: Direct style binding
If you want to directly set the font size:
```html
<button [style.font-size.px]="28">Active</button>
```

### Option 3: NgClass for multiple conditions
For more complex class logic:
```html
<button [ngClass]="{'fontsize': isActive}">Active</button>
```

### Option 4: Inline style (not recommended for complex styling)
```html
<button style="font-size: 28px">Active</button>
```
---  

## 🛠️ 🛠️ 🛠️ Using `[ngStyle]` or `[ngClass]`  

You can also use the `[ngStyle]` or `[ngClass]` directive to set multiple styles or classes:  

```html
<button [ngStyle]="{'font-size': '28px'}">Active</button>
<button [ngClass]="{'fontsize': condition}">Active</button>
```  
🔥 🔥 🔥 Make sure to define the `fontsize` class in your CSS if you're using the `[class]` or `[ngClass]` directive:  

```css
.fontsize {
  font-size: 28px;
}
```  

### Use Ternary operator  

```html
<button [class]="isActive ? 'active active-border' : 'no-active no-active-border'">Is Active</button>
```  

### Simple  

```html
<button 
    [class.active]="isActive" 
    [class.no-active]="!isActive"
    [class.active-border]="isActive"
    [class.no-active-border]="!isActive"
>Is Active</button>
<br>
```  

---    

