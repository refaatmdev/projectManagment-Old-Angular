(self.webpackChunkmaterialpro=self.webpackChunkmaterialpro||[]).push([[592],{2648:(e,t,l)=>{"use strict";l.d(t,{zi:()=>y,rY:()=>C});var s=l(5366),i=l(1116),n=l(7307),o=l(3841),a=l(3070),r=l(1041),c=l(4369),h=l(994),p=l(7064);const d=["selectElem"];function u(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"mat-checkbox",12),s.NdJ("ngModelChange",function(t){return s.CHM(e),s.oxw().selectAllChecked=t})("change",function(t){return s.CHM(e),s.oxw().toggleSelectAll(t)}),s.qZA()}if(2&e){const e=s.oxw();s.Q6J("ngModel",e.selectAllChecked)}}function g(e,t){if(1&e&&(s.TgZ(0,"mat-option",13),s._uU(1),s.qZA()),2&e){const e=t.$implicit,l=s.oxw();s.Udp("display",l.hideOption(e)?"none":"flex"),s.Q6J("disabled",e.disabled)("value",e[l.value]),s.xp6(1),s.hij("",e[l.display]," ")}}function m(e,t){if(1&e&&(s.TgZ(0,"mat-hint",14),s._uU(1),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.Oqu(e.errorMsg)}}const f=function(e){return{"pl-1":e}};let y=(()=>{class e{constructor(){this.selectPlaceholder="search...",this.disabled=!1,this.display="display",this.value="value",this.formControl=new r.NI,this.errorMsg="Field is required",this.showErrorMsg=!1,this.multiple=!0,this.labelCount=1,this.appearance="standard",this.selectionChange=new s.vpe,this.filteredOptions=[],this.selectedValue=[],this.selectAllChecked=!1,this.displayString=""}ngOnChanges(){this.disabled?this.formControl.disable():this.formControl.enable(),this.filteredOptions=this.options,this.selectedOptions?this.selectedValue=this.selectedOptions:this.formControl.value&&(this.selectedValue=this.formControl.value)}ngDoCheck(){this.selectedValue.length||this.selectionChange.emit(this.selectedValue)}toggleDropdown(){this.selectElem.toggle()}toggleSelectAll(e){if(e.checked)this.filteredOptions.forEach(e=>{this.selectedValue.includes(e[this.value])||(this.selectedValue=this.selectedValue.concat([e[this.value]]))});else{const e=this.getFilteredOptionsValues();this.selectedValue=this.selectedValue.filter(t=>!e.includes(t))}this.selectionChange.emit(this.selectedValue)}filterItem(e){this.filteredOptions=this.options.filter(t=>t[this.display].toLowerCase().indexOf(e.toLowerCase())>-1),this.selectAllChecked=!0,this.filteredOptions.forEach(e=>{this.selectedValue.includes(e[this.value])||(this.selectAllChecked=!1)}),this.filteredOptions.length||(this.selectAllChecked=!1)}hideOption(e){return!(this.filteredOptions.indexOf(e)>-1)}getFilteredOptionsValues(){const e=[];return this.filteredOptions.forEach(t=>{e.push(t.value)}),e}onDisplayString(){if(this.displayString="",this.selectedValue&&this.selectedValue.length){let e=[];if(this.multiple){for(let t=0;t<this.labelCount;t++)e[t]=this.options.filter(e=>e[this.value]===this.selectedValue[t])[0];if(e.length){for(let t=0;t<e.length;t++)e[t]&&e[t][this.display]&&(this.displayString+=e[t][this.display]+",");this.displayString=this.displayString.slice(0,-1),this.selectedValue.length>1&&this.selectedValue.length>this.labelCount&&(this.displayString+=` (+${this.selectedValue.length-this.labelCount} others)`)}}else e=this.options.filter(e=>e[this.value]===this.selectedValue),e.length&&(this.displayString=e[0][this.display])}return this.displayString}onSelectionChange(e){const t=this.getFilteredOptionsValues();let l=0;this.multiple&&(this.selectedValue.filter(e=>{t.includes(e)&&l++}),this.selectAllChecked=l===this.filteredOptions.length),this.selectedValue=e.value,this.selectionChange.emit(this.selectedValue)}trackByFn(e,t){return t.value}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["mat-select-autocomplete"]],viewQuery:function(e,t){if(1&e&&s.Gf(d,5),2&e){let e;s.iGM(e=s.CRH())&&(t.selectElem=e.first)}},inputs:{selectPlaceholder:"selectPlaceholder",disabled:"disabled",display:"display",value:"value",formControl:"formControl",errorMsg:"errorMsg",showErrorMsg:"showErrorMsg",multiple:"multiple",labelCount:"labelCount",appearance:"appearance",placeholder:"placeholder",options:"options",selectedOptions:"selectedOptions"},outputs:{selectionChange:"selectionChange"},features:[s.TTD],decls:15,vars:14,consts:[[3,"appearance"],[3,"placeholder","formControl","multiple","ngModel","ngModelChange","selectionChange"],["selectElem",""],[1,"box-search"],["color","primary","class","box-select-all",3,"ngModel","ngModelChange","change",4,"ngIf"],["type","text",3,"ngClass","placeholder","input"],["searchInput",""],[1,"box-search-icon",3,"click"],["mat-icon-button","",1,"search-button"],["aria-label","Search icon",1,"mat-24"],[3,"disabled","value","display",4,"ngFor","ngForOf","ngForTrackBy"],["style","color:red",4,"ngIf"],["color","primary",1,"box-select-all",3,"ngModel","ngModelChange","change"],[3,"disabled","value"],[2,"color","red"]],template:function(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"mat-form-field",0),s.TgZ(1,"mat-select",1,2),s.NdJ("ngModelChange",function(e){return t.selectedValue=e})("selectionChange",function(e){return t.onSelectionChange(e)}),s.TgZ(3,"div",3),s.YNc(4,u,1,1,"mat-checkbox",4),s.TgZ(5,"input",5,6),s.NdJ("input",function(){s.CHM(e);const l=s.MAs(6);return t.filterItem(l.value)}),s.qZA(),s.TgZ(7,"div",7),s.NdJ("click",function(){s.CHM(e);const l=s.MAs(6);return t.filterItem(""),l.value=""}),s.TgZ(8,"button",8),s.TgZ(9,"mat-icon",9),s._uU(10,"clear"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(11,"mat-select-trigger"),s._uU(12),s.qZA(),s.YNc(13,g,2,5,"mat-option",10),s.qZA(),s.YNc(14,m,2,1,"mat-hint",11),s.qZA()}2&e&&(s.s9C("appearance",t.appearance),s.xp6(1),s.Q6J("placeholder",t.placeholder)("formControl",t.formControl)("multiple",t.multiple)("ngModel",t.selectedValue),s.xp6(3),s.Q6J("ngIf",t.multiple),s.xp6(1),s.Q6J("ngClass",s.VKq(12,f,!t.multiple))("placeholder",t.selectPlaceholder),s.xp6(7),s.hij(" ",t.onDisplayString()," "),s.xp6(1),s.Q6J("ngForOf",t.options)("ngForTrackBy",t.trackByFn),s.xp6(1),s.Q6J("ngIf",t.showErrorMsg))},directives:[a.KE,o.gD,r.JJ,r.oH,i.O5,i.mk,c.lW,n.Hw,o.$L,i.sg,h.oG,r.On,p.ey,a.bx],styles:[".box-search[_ngcontent-%COMP%] {\n        margin: 8px;\n        border-radius: 2px;\n        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16),\n          0 0 0 1px rgba(0, 0, 0, 0.08);\n        transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);\n        display: flex;\n      }\n      .box-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        flex: 1;\n        border: none;\n        outline: none;\n      }\n      .box-select-all[_ngcontent-%COMP%] {\n        width: 36px;\n        line-height: 33px;\n        color: #808080;\n        text-align: center;\n      }\n      .search-button[_ngcontent-%COMP%] {\n        width: 36px;\n        height: 36px;\n        line-height: 33px;\n        color: #808080;\n      }\n      .pl-1[_ngcontent-%COMP%] {\n        padding-left: 1rem;\n      }"]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[r.u5,i.ez,n.Ps,c.ot,o.LD,h.p9,a.lN,r.UX]]}),e})()},552:(e,t,l)=>{"use strict";l.d(t,{l:()=>n});var s=l(62),i=l(5366);let n=(()=>{class e{constructor(){this.projects=[],this.concatName="",this.projects=(0,s.M)()||null}transform(e,...t){if(null==e)return this.concatName="Vacation";let l=e.split(",");return l.map(e=>{this.projectName=this.projects.filter(t=>t.id==e),l.length>1?this.concatName+=" / "+this.projectName[0].projectName:this.concatName=this.projectName[0].projectName}),this.concatName}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=i.Yjl({name:"ProjectPipe",type:e,pure:!0}),e})()},3300:(e,t,l)=>{"use strict";l.d(t,{M:()=>r});var s=l(8512),i=l(9996),n=l(2281),o=l(5366),a=l(2693);let r=(()=>{class e{constructor(e){this.httpClient=e,this.employeeArray=[],this.employeeSubject=new s.X({employee:this.employeeArray,totalemployee:0}),this.employee$=this.employeeSubject.asObservable()}getAllemployee(e,t,l){return this.httpClient.post(`${n.x}/employee/getEmployees?pagesize=${e}&page=${t}`,{searchValue:l}).pipe((0,i.U)(e=>({employee:e.result.map(e=>({id:e.id,firstName:e.firstName,lastName:e.lastName,phone:e.phone,dailyWage:e.dailyWage,bankAccount:e.bankAccount,bankBranch:e.bankBranch,startFromDate:e.startFromDate,createdAt:e.createdAt})),totalemployee:e.total}))).subscribe(e=>{this.employeeArray=e.employee,this.employeeSubject.next({employee:[...this.employeeArray],totalemployee:e.totalemployee})})}addEmployee(e){return this.httpClient.post(`${n.x}/employee`,e)}addDailyWage(e){return this.httpClient.post(`${n.x}/employee/addDailyWage`,e)}updateEmployee(e,t){return this.httpClient.put(`${n.x}/employee/${t}`,e)}deleteEmployee(e){return this.httpClient.delete(`${n.x}/employee/${e}`)}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(a.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);