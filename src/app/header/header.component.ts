import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingListService } from '../shopping-list.service';
import { ShoppingList } from '../shopping-list.model';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, OnDestroy {
  totalCartValue;
  shoppingCartPageData: Array<ShoppingList> = [];
  susbcription: Subscription;
  searchKey = '';


  constructor(private router: Router, private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.susbcription = this.shoppingListService.$cartPageDataSub
      .subscribe((data: Array<any>) => {
        this.shoppingCartPageData = data;
      });
  }
  getTotalCartValue() {
    this.totalCartValue = 0;
    this.shoppingCartPageData.forEach((data, index) => {
      this.totalCartValue = this.totalCartValue + (data.count ? data.count : 1);
    });
    return this.totalCartValue;
  }
  goToCart() {
    this.router.navigate(['cart-page']);
  }
  goToHome() {
    this.router.navigate(['/']);
  }
  onSearch() {
    this.shoppingListService.setSearchKey(this.searchKey);
  }
  ngOnDestroy() {
    this.susbcription.unsubscribe();
  }

}
