import { Component, OnInit } from '@angular/core';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { CartService } from 'src/app/service/cart.service';
import { HttpService } from 'src/app/service/http.service';
import { WishlistService } from 'src/app/service/wishlist.service';


@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements OnInit {

  constructor(
    private router : Router, 
    private route : ActivatedRoute,
    private httpService: HttpService,
    protected sanitizer: DomSanitizer,
    private matSnackBar: MatSnackBar,
    private wishService: WishlistService,
    private cartService: CartService
  ) { }

  public bookList: Book[] = [];
  userImage: SafeStyle;
  public term : string;
  value: any = [];


  ngOnInit(): void {
    this.httpService.getBookData().subscribe(data=> {
      this.bookList = data.data;
    });

  }

  AddToBag(book) {
    console.log(book);
    this.cartService.addCartDetails(book).subscribe(data =>{
      console.log("post",data);
      this.matSnackBar.open('Book is added successfully to Cart ' , 'ok', {
        duration: 3000
      });
      this.router.navigateByUrl("/books"); 
    })
  }

  AddToWishList(book) {
    console.log(book);
    this.wishService.addWishDetails(book).subscribe(data =>{
      console.log("post",data);
      this.matSnackBar.open('Book is added successfully to WishList ' , 'ok', {
        duration: 3000
      });
    })
  }
}
