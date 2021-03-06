## DEMO
[View on stackblitz](https://stackblitz.com/github/alain21218/angular-x-alerts)

## Install 
```sh
npm install angular-x-alerts
```

## Usage
```html
<!-- add this line on top of your app.component.html -->
<ngx-alert></ngx-alert>
```

```ts
import { AlertModule } from 'angular-x-alerts';

//...

const options = { persist: { success: false, error: true, warn: true, info: true } }

@NgModule({
  imports:      [ 
      BrowserModule,  
      AlertModule.forRoot(options) // <---- HERE
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
