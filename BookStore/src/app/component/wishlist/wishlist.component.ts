import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { CartService } from 'src/app/service/cart.service';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(
    private router : Router, 
    private route : ActivatedRoute,
    private wishListService : WishlistService,
    private cartService : CartService,
    private matSnackBar: MatSnackBar
  ) { }

  public wishList: Book[] = [];
  wishListLength : number;

  ngOnInit(): void {
    this.wishListService.getWishDetails().subscribe(data=> {
      console.log("CART",data);
      this.wishList = data.data;
      this.wishListLength = this.wishList.length;
    });
  }

  Removecart(key: any) {
    console.log('removinf book id is: ', key);

    this.wishListService.removeWishDetails(key).subscribe((Response) => {
      console.log('removing book', Response);
      this.matSnackBar.open('Book is removed successfully from WishList ' , 'ok', {
        duration: 3000
      });
    });
    window.location.reload();
  }

}
