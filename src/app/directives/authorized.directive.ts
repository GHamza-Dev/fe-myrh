import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from "../services/auth/auth.service";
import {Principal} from "../models/principal";

@Directive({
  selector: '[appAuthorized]'
})
export class AuthorizedDirective implements OnInit{

  @Input() set appAuthorized(role: string){
    this.auth.principal$.subscribe({
      next:(value)=>{
        if(!(<Principal>value).authenticated){
          this.viewContainerRef.clear();
          return;
        }

        if (role !== '*' && !(<Principal>value).roles.includes(`ROLE_${role}`)){
          this.viewContainerRef.clear();
          return;
        }

        this.viewContainerRef.createEmbeddedView(this.templateRef)
      }
    })

  }

  constructor(
    private auth: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef

  ) { }

  ngOnInit(): void {

  }

}
