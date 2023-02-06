import { Component } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpErrorResponse,
} from '@angular/common/http';
import { CalculatorService } from './app.service';
//import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-calculator';
  prev_oper: string = '';
  oper: string = '';
  curr_oper: string = '0';
  eq_sign = '';
  result: string = '';
  equalpressed = false;
  operand_press = false;
  single_oper = false;
  num_pressed = false;
  sing_opr = '';
  propflag=false;
  deleteflag=false;
  constructor(private serve: CalculatorService) {}
  public sendeqn(singordoub: string, fr: string, sec: string): void {
    if (
      singordoub == 'frac' ||
      //singordoub == 'per' ||
      singordoub == 'sqr' ||
      singordoub == 'sqrt'
    ) {
      this.serve.evaluateOp(singordoub, '0', this.curr_oper).subscribe({
        next: (x) => {
          if (x == null) {
            this.curr_oper = 'E';
          }
          else {
            this.curr_oper = x;
          }
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      });
    } else {
      this.serve
        .evaluateOp(this.oper, this.prev_oper, this.curr_oper)
        .subscribe({
          next: (x) => {
            if (x == null) {
              this.curr_oper = 'E';
            }
            else {
              this.curr_oper = x;
            }
          },
          error: (error: HttpErrorResponse) => {
            alert(error.message);
          },
        });
    }
  }
  clear() {
    this.prev_oper = '';
    this.oper = '';
    this.sing_opr = '';
    this.curr_oper = '0';
    this.result = '';
    this.equalpressed = false;
    this.single_oper = false;
    this.operand_press = false;
    this.eq_sign = '';
    this.num_pressed = false;
  }
  append_num(val: string) {
    this.num_pressed = true;
    if (this.curr_oper.toString().includes('.') && val === '.') {
      return;
    }
    if (this.equalpressed) {
      this.clear();
    }
    if (this.curr_oper == '0' && val == '0') {
      return;
    }
    if (
      this.curr_oper == '0' ||
      this.curr_oper == 'E' ||
      this.operand_press ||
      this.single_oper
    ) {
      this.curr_oper = val;
      this.operand_press = false;
      this.single_oper = false;
      this.equalpressed = false;
    } else {
      this.curr_oper += val;
      this.equalpressed = false;
    }
  }
  append_oper(val: string) {
    if (this.curr_oper == 'E') {
      return;
    }
    this.operand_press = true;
    if(this.equalpressed)
    {
      this.oper=val;
      this.prev_oper=this.curr_oper
      this.equalpressed=false;
      this.num_pressed = false;
      this.eq_sign='';
    }
    else if(this.propflag)
    {
      this.propflag=false;
      this.sendeqn(this.oper,this.prev_oper,this.curr_oper);
      if(this.curr_oper=='E')
      {
        this.result = this.prev_oper + ' ' + this.oper;
        return;
      }
      this.prev_oper=this.curr_oper;
      this.oper=val;
      this.num_pressed = false;
    }
    else if (this.prev_oper == '') {
      this.oper = val;
      this.prev_oper = this.curr_oper;
      this.num_pressed = false;
    } else if (!this.num_pressed||(this.deleteflag)) {
      this.oper = val;
    }
    this.result = this.prev_oper + ' ' + this.oper;
  }


  perform_single(val: string) {
    if (this.curr_oper == 'E') {
      return;
    }
    if (val == '+/-') {
      this.curr_oper = (-1 * parseFloat(this.curr_oper)).toString();
      return;
    }
    this.single_oper = true;
    this.sing_opr = val;
    if(this.equalpressed)
    {
      this.equalpressed=false;
      this.eq_sign='';
      if(val!='per')
      {
        this.sendeqn(this.sing_opr,"0",this.curr_oper);
        if (val == 'frac') {
          this.result = '1/(' + this.curr_oper + ')';
        } else if (val == 'sqr') {
          this.result = 'sqr(' + this.curr_oper + ')';

        } else if (val == 'sqrt') {
          this.result = 'sqrt(' + this.curr_oper + ')';
        }
      }
       else {
        this.result = 'per(' + this.curr_oper + ')';
        this.curr_oper=((parseFloat(this.curr_oper)/100.0)*parseFloat(this.prev_oper)).toString();
      }

    }
    else if (this.oper == '') {
      if(val!='per')
      {
        this.sendeqn(this.sing_opr, '0', this.curr_oper);
        if (val == 'frac') {
          this.result = '1/(' + this.curr_oper + ')';
        } else if (val == 'sqr') {
          //this.sendeqn(this.sing_opr, '0', this.curr_oper);
          this.result = 'sqr(' + this.curr_oper + ')';
        } else if (val == 'sqrt') {
          //this.sendeqn(this.sing_opr, '0', this.curr_oper);
          this.result = 'sqrt(' + this.curr_oper + ')';
        }
      }
      else {
        if(this.prev_oper=='')
        {
          this.curr_oper='0';
          this.result='0';
        }
        else
        {
          this.curr_oper=((parseFloat(this.curr_oper)/100.0)*parseFloat(this.prev_oper)).toString();
          this.result= 'per(' + this.curr_oper + ')';
        }
      }
    } else if (this.operand_press||this.prev_oper!='') {
      this.propflag=true;
      if(val!='per')
      {
        if (val == 'frac') {
          this.result =this.prev_oper +" "+this.oper+ '1/(' + this.curr_oper + ')';
          //this.sendeqn(this.sing_opr, '0', this.curr_oper);
        } else if (val == 'sqr') {
          this.result =this.prev_oper +" "+this.oper+ 'sqr(' + this.curr_oper + ')';
          //this.sendeqn(this.sing_opr, '0', this.curr_oper);
        } else if (val == 'sqrt') {
          this.result =this.prev_oper +" "+this.oper+ 'sqrt(' + this.curr_oper + ')';
        }
        this.sendeqn(this.sing_opr, '0', this.curr_oper);
      }
       else {
        if(this.prev_oper)
        {
          this.result=this.prev_oper+" "+this.oper+ 'per(' + this.curr_oper + ')';
          this.curr_oper=((parseFloat(this.curr_oper)/100.0)*parseFloat(this.prev_oper)).toString();
        }
      }

      this.operand_press = false;
    } else {
      if(val!='per')
      {
        if (val == 'frac') {
          this.result = this.prev_oper + ' ' + '1/(' + this.curr_oper + ')';
          //this.sendeqn(this.sing_opr, '0', this.curr_oper);
        } else if (val == 'sqr') {
          this.result = this.prev_oper + ' ' + 'sqr(' + this.curr_oper + ')';
          //this.sendeqn(this.sing_opr, '0', this.curr_oper);
        } else if (val == 'sqrt') {
          this.result = this.prev_oper + ' ' + 'sqrt(' + this.curr_oper + ')';
        }
        this.sendeqn(this.sing_opr, '0', this.curr_oper);
      } else {
        this.result = this.prev_oper + ' ' + 'per(' + this.curr_oper + ')';
        //this.sendeqn(this.sing_opr, this.prev_oper, this.curr_oper);
        if(!this.prev_oper)
        {
          this.result= 'per(' + this.curr_oper + ')';
          this.curr_oper=((parseFloat(this.curr_oper)/100.0)*parseFloat(this.prev_oper)).toString();
        }
        else
        {
          this.result=this.prev_oper+" "+this.oper+ 'per(' + this.curr_oper + ')';
          this.curr_oper='0';
        }
      }
    }
  }

  del() {
    if (this.equalpressed ) {
      this.equalpressed = false;
      this.eq_sign = '';
      this.prev_oper = '';
      this.oper = '';
      this.sing_opr = '';
      this.result = '';
      this.operand_press = true;
    }
    if (this.curr_oper === '0' || !this.num_pressed) {
      return;
    } else {
      if (this.curr_oper.length === 1) {
        this.curr_oper = '0';this.deleteflag=true;
      } else if (this.equalpressed||this.curr_oper=='E') {
        this.result = '';
      } else {
        this.curr_oper = this.curr_oper.slice(0, -1);
      }
    }
  }
  calculate() {
    if (this.curr_oper == 'E') {
      if(this.oper)
      {
        this.result=this.prev_oper+" "+this.oper;
      }
      return;
    }
    else if(this.oper==''&&this.prev_oper=='')
    {
      if(this.curr_oper!='E')
      {
        this.result=this.curr_oper;
      }
      this.eq_sign='';
    }
    if (!this.equalpressed && this.prev_oper) {
      this.sendeqn(this.oper, this.prev_oper, this.curr_oper);
      this.equalpressed = true;
      this.result = this.prev_oper + ' ' + this.oper + ' ' + this.curr_oper;
      this.eq_sign = '=';
    } else if (!this.prev_oper) {
      this.eq_sign = '=';
      this.equalpressed = true;
    }
  }
}
