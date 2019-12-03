import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  nome: string = "";
  telefone: string = "";
  endereco: string = "";
  tel_emerg: string = "";

  constructor( ) {}

  ngOnInit() {
    
  }

  refresh(){
    //console.log(document.cookie)
    document.cookie += '<name='+this.nome+">",
    document.cookie += '<telefone='+this.telefone+">",
    document.cookie += '<endereco='+this.endereco+">",
    document.cookie += '<tel_emerg='+this.tel_emerg+">"
    console.log(document.cookie)
  }


}
