(self.webpackChunkmaterialpro=self.webpackChunkmaterialpro||[]).push([[148],{148:(t,e,r)=>{"use strict";r.r(e),r.d(e,{AuthModule:()=>A});var o=r(1116),i=r(4258),n=r(1041),s=r(5366),a=r(9948),g=r(9794),m=r(2797),l=r(5965),u=r(3070),c=r(9550),p=r(4369);function d(t,e){if(1&t&&(s.TgZ(0,"div",14),s._uU(1),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Oqu(t.msg)}}function Z(t,e){1&t&&(s.TgZ(0,"mat-error"),s._uU(1,"please insert your email "),s.qZA())}function f(t,e){1&t&&(s.TgZ(0,"mat-error"),s._uU(1,"please insert password "),s.qZA())}const h=[{path:"",component:(()=>{class t{constructor(t,e,r,o){this._authService=t,this._tokenService=e,this.formBuilder=r,this.router=o,this.msg="",this.initForm()}ngOnInit(){this._tokenService.getToken()&&this.router.navigate(["/projects"])}initForm(){this.loginForm=this.formBuilder.group({email:new n.NI("",[n.kI.required,n.kI.email]),password:new n.NI("",[n.kI.required])})}login(){this._authService.login(this.loginForm.value).subscribe(t=>{this.msg=t.message,this.router.navigate(["/projects"])})}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(a.e),s.Y36(g.B),s.Y36(n.qu),s.Y36(i.F0))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-login"]],decls:22,vars:4,consts:[[1,"login-register",2,"background-image","url(assets/images/background/login-register.jpg)"],[1,"login-register-box"],[1,"m-t-10"],[3,"formGroup"],[1,"text-center"],["alt","homepage","src","assets/images/logo-icon.png"],[1,"m-t-0"],["class","bg-danger p-10 text-white",4,"ngIf"],["fxLayout","row wrap"],["fxFlex.gt-sm","100","fxFlex.gt-xs","100","fxFlex","100"],["matInput","","type","text","name","email","formControlName","email","placeholder","Enter your Email "],[4,"ngIf"],["matInput","","type","password","name","password","formControlName","password","placeholder","Enter your Email  Password"],["mat-raised-button","","color","primary","type","button",1,"btn-block","btn-lg","m-t-20","m-b-20",3,"click"],[1,"bg-danger","p-10","text-white"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"mat-card",2),s.TgZ(3,"mat-card-content"),s.TgZ(4,"form",3),s.TgZ(5,"div",4),s._UZ(6,"img",5),s.TgZ(7,"h4",6),s._uU(8,"Login to App"),s.qZA(),s.qZA(),s.YNc(9,d,2,1,"div",7),s.TgZ(10,"div",8),s.TgZ(11,"div",9),s.TgZ(12,"mat-form-field"),s._UZ(13,"input",10),s.YNc(14,Z,2,0,"mat-error",11),s.qZA(),s.qZA(),s.TgZ(15,"div",9),s.TgZ(16,"mat-form-field"),s._UZ(17,"input",12),s.YNc(18,f,2,0,"mat-error",11),s.qZA(),s.qZA(),s.TgZ(19,"div",9),s.TgZ(20,"button",13),s.NdJ("click",function(){return e.login()}),s._uU(21," Login "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(4),s.Q6J("formGroup",e.loginForm),s.xp6(5),s.Q6J("ngIf",e.msg),s.xp6(5),s.Q6J("ngIf",e.loginForm.get("email").invalid),s.xp6(4),s.Q6J("ngIf",e.loginForm.get("password").invalid))},directives:[m.a8,m.dn,n._Y,n.JL,n.sg,o.O5,l.xw,l.yH,u.KE,c.Nt,n.Fj,n.JJ,n.u,p.lW,u.TO],styles:[""]}),t})()}];let v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[i.Bz.forChild(h)],i.Bz]}),t})();var q=r(5174);let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.ez,v,q.m]]}),t})()}}]);