import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  constructor() { }
    ngOnInit(): void {
      this.loadScript('./assets/js/modernizr-2.6.2.min.js');
      this.loadScript('./assets/js/jquery-1.10.2.min.js');
      this.loadScript('./assets/bootstrap/js/bootstrap.min.js');
      this.loadScript('./assets/js/bootstrap-select.min.js');
      this.loadScript('./assets/js/bootstrap-hover-dropdown.js');
      this.loadScript('./assets/js/easypiechart.min.js');
      this.loadScript('./assets/js/jquery.easypiechart.min.js');
      this.loadScript('./assets/js/owl.carousel.min.js');
      this.loadScript('./assets/js/wow.js');
      this.loadScript('./assets/js/icheck.min.js');
      this.loadScript('./assets/js/price-range.js');
      this.loadScript('./assets/js/lightslider.min.js');
      this.loadScript('./assets/js/main.js');
      this.loadScript('./assets/js/jquery.bootstrap.wizard.js');
      this.loadScript('./assets/js/jquery.validate.min.js');
      this.loadScript('./assets/js/wizard.js');
    }
    public loadScript(url: string) {
      const body = <HTMLDivElement> document.body;
      const script = document.createElement('script');
      script.innerHTML = '';
      script.src = url;
      script.async = false;
      script.defer = true;
      body.appendChild(script);
    }
    
  
}
