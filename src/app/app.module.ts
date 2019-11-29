import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { FooterComponent } from './footer/footer.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { FilterComponent } from './content-area/filter/filter.component';
import { SortComponent } from './content-area/sort/sort.component';
import { ShoppingListComponent } from './content-area/shopping-list/shopping-list.component';
import { SearchComponent } from './search/search.component';
import { SortPipe } from './pipes/sort.pipe';
import { PricePipe } from './pipes/price.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartIconComponent,
    FooterComponent,
    ContentAreaComponent,
    FilterComponent,
    SortComponent,
    ShoppingListComponent,
    SearchComponent,
    SortPipe,
    PricePipe,
    SearchPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng5SliderModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
