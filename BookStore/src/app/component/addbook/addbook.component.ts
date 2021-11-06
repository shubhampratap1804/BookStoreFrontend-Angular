import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';
import { Book } from 'src/app/model/book';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {

  private imageFile: string;
  public BookStoreFormGroup : FormGroup;
  public book : Book = new Book();

  constructor(
    private router : Router, 
    private route : ActivatedRoute,
    private matSnackBar: MatSnackBar,
    private httpService: HttpService
  ) { 
    this.BookStoreFormGroup = new FormGroup({
      bookName: new FormControl(),
      bookDetails: new FormControl(),
      authorName: new FormControl(),
      price: new FormControl(),
      noOfBooks: new FormControl(),
      image: new FormControl()
   });
  
  }

  ngOnInit(): void {
  }
  
  onSelectedImage(event) {
    if (event.target.files.length > 0) {
      const image = event.target.files[0];
      this.imageFile = image.name;
    }
  }
  onSubmit(){
    this.book = this.BookStoreFormGroup.value;
    this.book.image=this.imageFile;
    this.httpService.addBookDetails(this.book).subscribe(data =>{
      console.log("post",data);
      this.matSnackBar.open('Book is added successfully ' , 'ok', {
        duration: 5000
      });
      this.router.navigateByUrl("/books"); 
    })
  }
    

}
