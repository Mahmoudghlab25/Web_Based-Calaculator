"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
//import { calculator } from './calc';
var butts = document.querySelectorAll('[buttons]');
var operationbutton = document.querySelectorAll('[data-operations]');
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-calculator';
        this.prev_oper = '';
        this.oper = '';
        this.curr_oper = '0';
        this.real_curr_oper = '0';
        /*out:string='0';
        display:string='0';
        first_value:string='';
        oper:string='';
        second:string='';
        num_click(val:string)
        {
          if(this.display.includes('.')&&val==='.')
          {return;}
          else if(this.display==='0')
          {this.display=val;}
          else
          {this.display+=val;}
        }
        update(oper:string)
        {
          this.first_value=this.display;
          this.oper=oper;
          this.display='';
        }
        num_clear()
        {
          this.display='0';
          this.first_value='';
          this.second='';
          this.oper='';
        }
        num_oper(valu:any)
        {
          /*if(this.first_value===''&&(valu.toString()==='+'||valu.toString()==='-'||valu.toString()==='/'||valu.toString()==='*'||valu.toString()==='%'))
          {
            return;
          }//
          /*if(this.first_value!=='')
          {//
          switch(valu.toString())
          {
            case '+':
            {
              this.first_value=this.display;
              this.oper='+';
              this.display='';
              break;
            }
            case '-':
            {
              this.first_value=this.display;
              this.oper='-';
              this.display='';break;
            }
            case '/':
            {
              this.first_value=this.display;
              this.oper='/';
              this.display='';break;
            }
            case '*':
            {
              this.first_value=this.display;
              this.oper='*';
              this.display='';break;
            }
            case 'x^2':
            {
              this.first_value=this.display;
              this.oper='x^2';
              this.display=`sqr(${this.display})`;break;
            }
            case 'x^0.5':
            {
              this.first_value=this.display;
              this.oper='x^0.5';
              this.display=`sqrt(${this.display})`;break;
            }
            case '1/x':
            {
              this.first_value=this.display;
              this.oper='1/x';
              this.display=`1/(${this.display})`;break;
            }
            case '%':
            {
              this.first_value=this.display;
              this.oper='%';
              this.display='';break;
            }
            case '+/-':
            {
              const k=-1*(+this.display);
              this.display=k.toString();break;
            }
          }
      
      
        }
        update(disp:string,n1:string,n2:string)
        {
          this.display=disp;
          this.first_value=
        }
        num_equal()
        {
          debugger;
          let result:number=0;
          //let n1=this.first_value;
          if(this.oper==='+')
          {
            if(this.display==='')
            {
              //result=(+n1)+(+this.first_value);
              result=(+this.first_value)+(+this.first_value);
            }
            else
            {
              if(this.second==='')
              {
                this.second=this.display;
              }
              /*if(this.second==='')
              { this.second=this.display;
                result=(+this.first_value)+(+this.second);
              }
              else
              {
                result=(+this.first_value)+(+this.second);
              //}//
              result=(+this.second.toString())+(+this.first_value.toString());
              //this.first_value=this.display;
            }
          }
          else if(this.oper==='-')
          {
            if(this.display==='')
            {if(this.second==='')
            {this.second=this.first_value;}
              result=(+this.first_value)-(+this.second);}
            else
            {
              if(this.second==='')
              {
                this.second=this.display;
              }
              result=(+this.first_value)-(+this.second);
            }
          }
          else if(this.oper==='*')
          {
            if(this.display==='')
            {
              if(this.second==='')
              {
                 this.second=this.first_value;
              }
              result=(+this.first_value)*(+this.second);}
            else
            {
              result=(+this.first_value)*(+this.display);
            }
          }
          else if(this.oper==='/')
          {
            if(this.display==='0'&&this.first_value!='')
            {
              //this.display='E';
              result=NaN;
            }
            else if(this.display===''&&this.first_value==='0')
            {//this.display='E';
              result=NaN;}
            else if(this.display==='')
            {
              if(this.first_value==='0')
              {result=NaN}
              else
              {
                result=(+this.first_value)/(+this.first_value);
              }
            }
            else
            {
              if(this.second==='')
              {this.second=this.display}
              result=(+this.first_value)/(+this.second);
            }
          }
          else if(this.oper==='x^2')
          {
            if(this.display===''||this.display==='0')
            {result=(+this.first_value)*(+this.first_value);}
          }
          else if(this.oper==='%')
          {
            if(this.display==='')
            {result=(+this.first_value)%(+this.first_value);}
            else
            {result=(+this.first_value)%(+this.display);}
          }
          else if(this.oper==='1/x')
          {
            if(this.display==='0')
            {//this.display='E';
              result=NaN;}
            else
            {result=1/(+this.display);}
          }
          else if(this.oper==='x^0.5')
          {
            result=Math.sqrt(+this.display);
          }
          else
          {
            result=+this.display;
          }
          if(result===NaN)
          {this.display='E';}
          else
          {
            //this.first_value=this.display;
      
            //this.display=result.toString();
            this.first_value=result.toString();
            this.display=result.toString();
          }
        }
        num_del()
        {
          if(this.display==='0')
          {return}
          else if(this.display.length===1)
          {
            this.display='0';
          }
          else if(this.display==='')
          {
            this.oper='';
            this.display=this.first_value;
            this.first_value='';
          }
          else
          {
            this.display=this.display.slice(0,this.display.length-1);
          }
        }*/
        /*display:string='0';
        first_oper:string='';
        oper:string='';
        second_oper:string='';
        expression:string=`${this.first_oper} ${this.oper} ${this.second_oper} `;
        fst_op : string='';
        num_clear()
        {
          this.display='0';
          this.first_oper='';
          this.oper='';
          this.second_oper='';
          this.fst_op='';
        }
        num_del()
        {
          if(this.display==='0')
          {return;}
          if(this.display.length===1)
          {this.display='0';
          if(this.second_oper!=='')
          {this.second_oper=this.display;}
          return;}
          this.display=this.display.slice(0,-1);
          if(this.second_oper!=='')
          {this.second_oper=this.display;}
        }
        /*expres:string=this.expression.slice(0,this.expression.length-1);
        exp(val:string)
        {
          if(val!=='+'&&val!=='-'&&val!=='*'&&val!=='/'&&!this.expres.includes('+')&&!this.expres.includes('-')&&!this.expres.includes('/')&&!this.expres.includes('*')&&(+this.first_oper)<=9999999999999999)
          {
            this.first_oper+=val;
          }
          else if((!this.expres.includes('+')||!this.expres.includes('-')||!this.expres.includes('/')||!this.expres.includes('*'))&&this.first_oper!=='')
          {
            this.oper=val;
          }
          else if((this.expres.includes('+')||this.expres.includes('-')||this.expres.includes('*')||this.expres.includes('/')&&this.expres.includes('*'))&&this.first_oper!=='')
          {
            this.second_oper+=val;
          }
        //}comment
        exp_binary_op(val:string)
        {
          /*if(this.first_oper==='')
          {return}
          if(this.first_oper==='')
          {return}
      
          switch(val)
          {
            case '+':
            {
              this.oper='+';
              if(this.second_oper==='')
              {
                this.fst_op=((+this.first_oper)+(0)).toString();
                this.second_oper='';
              }
              else
              {
                this.fst_op=((+this.first_oper)+(+this.second_oper)).toString();
                this.second_oper='';
              }
              this.display=this.fst_op;
              break;
            }
            case '-':
            {
              this.fst_op=this.display;
              this.oper='-';
              this.display='';
              break;
            }
            case '/':
            {
              this.fst_op=this.display;
              this.oper='/';
              this.display='';
              break;
            }
            case '*':
            {
              this.fst_op=this.display;
              this.oper='×';
              this.display='';
              break;
            }
          }
        }
        num_append(val:string){
          if(this.display.includes('.')&&val==='.'||(this.display==='0'&&val==='0')||(this.display==='9999999999999999'))
          {return;}
          else if(this.display==='0'||this.display===this.fst_op)
          {this.display=val;}
          else
          {
            this.display+=val;
          }
          if(this.oper==='')
          {
            if(this.first_oper==='')
            {this.first_oper=val;}
            else
            {
              this.first_oper+=val;
            }
          }
          else
          {if(this.second_oper===''||this.second_oper==='0')
          {this.second_oper=val;}
          else
          {
            this.second_oper+=val;
          }}
        }
        update()
        {
          this.first_oper=this.display;
      
        }
        num_equal()
        {
          if(this.oper==='+')
          {
            let res:number=(+this.first_oper) + (+this.second_oper);
            this.first_oper=res.toString();
            this.fst_op=res.toString();
            this.display=res.toString();
          }
          else if(this.oper==='-')
          {
            let res:number=(+this.first_oper) - (+this.second_oper);
            this.first_oper=res.toString();
            this.fst_op=res.toString();
            this.display=res.toString();
          }
          else if(this.oper==='*')
          {
            let res:number=(+this.first_oper) * (+this.second_oper);
            this.first_oper=res.toString();
            //this.fst_op=res.toString();
            this.display=res.toString();
          }
          else if(this.oper==='/')
          {
            let res:number=(+this.first_oper) / (+this.second_oper);
            if(res === Infinity)
            {
              this.display='E';
            }
            else
            {
              this.first_oper=res.toString();
              this.fst_op=res.toString();
              this.display=res.toString();
            }
          }*/
    }
    AppComponent.prototype.clear = function () {
        this.prev_oper = '';
        this.oper = '';
        this.curr_oper = '0';
        this.real_curr_oper = '0';
    };
    AppComponent.prototype.append_num = function (val) {
        if (this.curr_oper.includes('.') && val === '.') {
            return;
        }
        if (this.curr_oper === '0' && val === '0') {
            return;
        }
        if (this.curr_oper === '0' || this.curr_oper === 'E') {
            this.curr_oper = val;
            this.real_curr_oper = val;
        }
        else {
            /*if(this.curr_oper!=='0'&&this.oper!=='')
            {
              this.prev_oper=this.curr_oper;
            }*/
            this.curr_oper += val;
            this.real_curr_oper += val;
        }
    };
    AppComponent.prototype.append_oper = function (val) {
        if (this.curr_oper === 'E') {
            return;
        }
        if (val === '+') {
            if (this.oper !== '') {
                this.calculate();
            }
            this.oper = '+';
            this.prev_oper = this.curr_oper;
            this.curr_oper = '0';
            //this.real_curr_oper='0';
        }
        else if (val === '-') {
            if (this.oper !== '') {
                this.calculate();
            }
            this.oper = '-';
            this.prev_oper = this.curr_oper;
            this.curr_oper = '0';
            //this.real_curr_oper='0';
        }
        else if (val === '×') {
            if (this.oper !== '') {
                this.calculate();
            }
            this.oper = '×';
            this.prev_oper = this.curr_oper;
            this.curr_oper = '0';
            //this.real_curr_oper='0';
        }
        else if (val === '÷') {
            if (this.oper !== '') {
                this.calculate();
            }
            this.oper = '÷';
            this.prev_oper = this.curr_oper;
            this.curr_oper = '0';
            //this.real_curr_oper='0';
        }
        else if (val === '±') {
            this.curr_oper = (-1 * (+this.curr_oper)).toString();
            this.real_curr_oper = this.curr_oper;
        }
        else if (val === '⅟x') {
            if (this.curr_oper === '0') {
                this.curr_oper = 'E';
                this.real_curr_oper = this.curr_oper;
            }
            else {
                var k = (1 / (+this.curr_oper));
                if (this.curr_oper === '0' || this.curr_oper === 'E') {
                    this.curr_oper = 'E';
                }
                else {
                    this.curr_oper = k.toString();
                }
                this.real_curr_oper = this.curr_oper;
            }
        }
        else if (val === 'x^2') {
            this.curr_oper = ((+this.curr_oper) * (+this.curr_oper)).toString();
            this.real_curr_oper = this.curr_oper;
        }
        else if (val === '%') {
        }
        else {
            if ((+this.curr_oper) < 0) {
                this.curr_oper = 'E';
                //this.real_curr_oper=this.curr_oper;
            }
            else {
                this.curr_oper = (Math.sqrt(+this.curr_oper)).toString();
                this.real_curr_oper = this.curr_oper;
            }
        }
    };
    AppComponent.prototype.del = function () {
        if (this.curr_oper === '0') {
            return;
        }
        else {
            if (this.curr_oper.length === 1) {
                this.curr_oper = '0';
                this.real_curr_oper = '0';
            }
            else {
                this.curr_oper = this.curr_oper.slice(0, -1);
                this.real_curr_oper = this.curr_oper;
            }
        }
    };
    AppComponent.prototype.calculate = function () {
        var res = 0;
        if (this.oper === '+') {
            res = (+this.prev_oper) + (+this.real_curr_oper);
        }
        else if (this.oper === '-') {
            res = (+this.prev_oper) - (+this.real_curr_oper);
        }
        else if (this.oper === '×') {
            res = (+this.prev_oper) * (+this.real_curr_oper);
        }
        else if (this.oper === '÷') {
            res = (+this.prev_oper) / (+this.real_curr_oper);
        }
        if (res === Infinity || /*res === NaN||*/ this.oper === '') {
            this.curr_oper = 'E';
        }
        else {
            this.curr_oper = res.toString();
            this.prev_oper = this.curr_oper;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var butt = document.querySelectorAll('.operations');
        var buttclear = document.querySelectorAll('.lclear');
        var butnums = document.querySelectorAll('.number');
        var butdel = document.querySelector('.del');
        var buteq = document.getElementById('eqbut');
        butt.forEach(function (button) {
            button.addEventListener('click', function () {
                if (button.textContent !== null) {
                    _this.append_oper(button.textContent);
                }
            });
        });
        buttclear.forEach(function (button) {
            button.addEventListener('click', function () {
                _this.clear();
            });
        });
        butnums.forEach(function (button) {
            button.addEventListener('click', function () {
                _this.append_num(button.textContent);
            });
        });
        butdel.addEventListener('click', function () {
            _this.del();
        });
        buteq.addEventListener('click', function () {
            _this.calculate();
        });
    };
    AppComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
