import { Component } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  store: CustomStore;
  constructor() {
      let serviceUrl = "http://localhost:3005";
      this.store = createStore({
          key: "orderId",
          loadUrl: serviceUrl + "/nwind/orders",
          insertUrl: serviceUrl + "/nwind/insert-order",
          updateUrl: serviceUrl + "/nwind/update-order",
          deleteUrl: serviceUrl + "/nwind/delete-order"
      });
  }
}
