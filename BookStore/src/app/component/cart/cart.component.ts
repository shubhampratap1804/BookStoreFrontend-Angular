import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { Order } from 'src/app/model/order';
import { User } from 'src/app/model/user';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  book = [];
  public user : User = new User();
  public cartList: Book[] = [];
  public cartListA: Book = new Book();

  public orderList: Order = new Order();
  public cartListLength: number;
  public noOfBook : number = 1;
  selected = false;
  select = false;
  public BookStoreFormGroup : FormGroup;
  Condition : boolean = false;
  panelOpenState = false;
  public detailsSection: number = 1;
  public summery: number = 1


  constructor(
    private router : Router, 
    private route : ActivatedRoute,
    private cartService: CartService,
    private userService: UserService,
    private orderService : OrderService,
    private matSnackBar: MatSnackBar
  ) { 
    this.BookStoreFormGroup = new FormGroup({
      userName: new FormControl(),
      mobileNo: new FormControl(),
      address: new FormControl(),
      pincode: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      type: new FormControl()
   });
  }

  ngOnInit(): void {
    this.cartService.getCartDetails().subscribe(data=> {
      console.log("CART",data);
      this.cartList = data.data;

      // this.cartListLength = this.cartList.length;
    });
  }

  Removecart(key: any) {
    console.log('removinf book id is: ', key);

    this.cartService.removeCartDetails(key).subscribe((Response) => {
      console.log('removing book', Response);
      this.matSnackBar.open('Book is removed successfully to Cart ' , 'ok', {
        duration: 3000
      });
    });
    this.router.navigateByUrl("/cart");
    window.location.reload();
  }

  goAddressDetails(){
    this.detailsSection = 0;
  }

  // continueWithSummery() {
  //   this.summery = 0;
  // }

  increase(){
    this.noOfBook = this.noOfBook + 1;
  }

  decrease(){
    this.noOfBook = this.noOfBook - 1;
  } 

  onSubmit(){
    this.summery = 0;
    this.orderList.numberOfBooksOrdered = this.noOfBook;
    this.orderList.totalPrice = this.cartList[0].price * this.noOfBook;
    console.log(this.orderList.totalPrice);
      console.log(this.BookStoreFormGroup.value);
      this.user = this.BookStoreFormGroup.value;
      console.log(this.user);
      console.log(this.cartList[0].price);
      this.userService.addUserDetails(this.user).subscribe(data =>{
        console.log("post",data);
        
      });
      this.orderService.addOrderDetails(this.orderList).subscribe(data =>{
        console.log("post",data);
        
      });

  }

  change(){
    this.Condition = !this.Condition;
  }


}
