import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() cont: number|undefined;
  @Input() desc: string|undefined;
  // @Input() affichage: boolean | undefined;

  affichage=false;
  contenu="voir plus";

  affich()
  {
    if(this.affichage==false)
    {
      this.affichage=true;
      this.contenu="voir moins";
      setTimeout(
        ()=>{
          this.affichage=false;
        }, 5000
      )

    }else{

      this.affichage=false;
      this.contenu="voir plus";


    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
