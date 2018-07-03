## DEMO
[view on stackblitz](https://stackblitz.com/edit/angular-x-alerts-demo?file=src/app/app.component.ts)

## Usage
```html
<!-- add this line on top of your app.component.html -->
<ngx-alert></ngx-alert>
```

```ts
import { AlertModule } from 'angular-x-alerts';

//...

@NgModule({
  imports:      [ 
      BrowserModule,  
      AlertModule // <---- HERE
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
```



## Example

```ts
constructor(public alert: AlertService){
    alert.success("Hello World !");
}
```

## API

- success(message: string)
- error(message: string)
- info(message: string)
- warn(message: string)
