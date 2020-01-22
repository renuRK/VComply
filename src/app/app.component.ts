import { Component } from '@angular/core';
import { NgbDateStruct, NgbDate,NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { ReadKeyExpr, analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VComplyAssignment';
  model;
  EndByDate;
  date_to_complete:NgbDate;
  startDate:NgbDate;
  occuranceTimes=5;
  generateDateCount=0;
  weekly_frequency=false;
  endDateOption:any;
  monthName:any;
  dayName:string;
  day=6;
  monthFlag:boolean;
  message="The responsiility will perpectually exist"
  selectedWeekDayNames:any={};
  selectedMonthName:any={};
  holidayFlag:number=0;
  choosedMonth:any;
  dateOfCompletion:false;
  
  weekDays = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Satarday',
    7: 'Sunday'
  }
  monthNames = {
    "Jan":1,
    "Feb":2,
    "Mar":3,
    "Apr":4,
    "May":5,
    "Jun":6,
    "Jul":7,
    "Aug":8,
    "Sep":9,
    "Oct":10,
    "Nov":11,
    "Dec":12,
  }
  list_of_month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  holiDays=[
      
    {
      "year": 2020,
      "month": 1, 
      "day": 29
    },
    {
      "year": 2020,
      "month": 3, 
      "day": 9
    },
    {
      "year": 2022,
      "month": 2, 
      "day": 6
    },
    {
      "year": 2020,
      "month": 2, 
      "day": 6
    },
    {
      "year": 2020,
      "month": 2, 
      "day": 7
    }
  ]
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  nextDate: NgbDate;
  dateArray: any=[];
  monthly_frequency= false;
  selectedDay: any;
  daily_frequecy=false;
  yearly_frequecy=false;
  on_completion_frequecy: boolean;
  one_time_frequecy: boolean;
  constructor(private calendar: NgbCalendar) {
  }
  ngOnInit(){
let res=this.calendar.getNext(this.calendar.getToday(),'d',-1);
console.log("kjhkjd",res);
  }
  weeklyFrequecy(){
    this.weekly_frequency=true;
    this.monthly_frequency=false;
    this.daily_frequecy=false;
    this.yearly_frequecy=false;
    this.on_completion_frequecy=false;
    this.one_time_frequecy=false;
  }
  montlyFrequecy(){
    this.monthly_frequency=true;
    this.weekly_frequency=false;
    this.daily_frequecy=false;
    this.yearly_frequecy=false;
    this.on_completion_frequecy=false;
    this.one_time_frequecy=false;

  }
  dailyFrequecy(){
    this.daily_frequecy=true;
    this.monthly_frequency=false;
    this.weekly_frequency=false;
    this.yearly_frequecy=false;
    this.on_completion_frequecy=false;
    this.one_time_frequecy=false;
  }
  yearlyFrequecy(){
    this.yearly_frequecy=true;
    this.daily_frequecy=false;
    this.monthly_frequency=false;
    this.weekly_frequency=false;
    this.on_completion_frequecy=false;
    this.one_time_frequecy=false;
  }
  oneTimeFrequecy(){
    this.one_time_frequecy=true;
    this.yearly_frequecy=false;
    this.daily_frequecy=false;
    this.monthly_frequency=false;
    this.weekly_frequency=false;
    this.on_completion_frequecy=false;
  }
   onCompletionOfFrequecy(){
    this.on_completion_frequecy=true;
    this.daily_frequecy=false;
    this.monthly_frequency=false;
    this.weekly_frequency=false;
    this.yearly_frequecy=false;
    this.one_time_frequecy=false;
  }
  //Method to generate dailyy date
  dailyGeneratedDate(){
    this.dateArray=[];
    this.generateDateCount=0;
    if(this.model){
      this.startDate=this.model;
    }else{
      this.startDate=this.calendar.getToday();
    }
    for(let i=0;i<this.occuranceTimes || this.generateDateCount<this.occuranceTimes;i++){
      this.holidayFlag=0;
      this.nextDate=this.calendar.getNext(this.startDate,'d',i);
      this.dayName=this.weekDays[this.calendar.getWeekday(this.nextDate)];
      for(let k=0;k<this.holiDays.length;k++){
        if(this.holiDays[k].year==this.nextDate.year && this.holiDays[k].month==this.nextDate.month && this.holiDays[k].day==this.nextDate.day ){
        this.holidayFlag++;
        }
      }
      if(this.dayName=='Monday'|| this.dayName=='Tuesday'||this.dayName=='Wednesday'|| this.dayName=='Thursday'|| this.dayName=='Friday'){
        if(this.holidayFlag==0){
        console.log("f;ag inside1",this.holidayFlag) ;
          this.dateArray.push(this.nextDate.year+'/'+this.nextDate.month+'/'+this.nextDate.day);
        this.generateDateCount++;
        }
      }
    }
  }
//Method to generate weekly due date
  weeklyGeneratedDate(){
    this.dateArray=[];
    this.generateDateCount=0;
    let noOfDay=0;
    let i=1;
    let dateFlag=false;
    if(this.model){
      this.startDate=this.model;
    }else{
      this.startDate=this.calendar.getToday();
    }
   this.nextDate=this.startDate

    /* while(this.nextDate.year==this.EndByDate.year){
      this.nextDate=this.calendar.getNext(this.nextDate,'d',i)
      dateFlag=true;
      i++;
    }
    if(dateFlag){
      console.log("jhjh",this.nextDate);
    }
   */


    for(let p=0;p<Object.keys(this.selectedWeekDayNames).length;p++){
      
      if(this.selectedWeekDayNames[Object.keys(this.selectedWeekDayNames)[p]]==true ){
      
        noOfDay++;
      }
    }
  
    if(noOfDay>0){
      for(let i=0;i<this.occuranceTimes || this.generateDateCount<this.occuranceTimes;i++){
        this.holidayFlag=0;
        this.nextDate=this.calendar.getNext(this.startDate,'d',i);
        this.dayName=this.weekDays[this.calendar.getWeekday(this.nextDate)];
        for(let k=0;k<this.holiDays.length;k++){
          if(this.holiDays[k].year==this.nextDate.year && this.holiDays[k].month==this.nextDate.month && this.holiDays[k].day==this.nextDate.day ){
          this.holidayFlag++;
          }
        }
        for(let j=0;j<Object.keys(this.selectedWeekDayNames).length;j++){
        
          if(Object.keys(this.selectedWeekDayNames)[j]==this.dayName && this.selectedWeekDayNames[Object.keys(this.selectedWeekDayNames)[j]]==true){
            if(this.holidayFlag==0){
            console.log("f;ag inside1",this.holidayFlag) ;
              this.dateArray.push(this.nextDate.year+'/'+this.nextDate.month+'/'+this.nextDate.day);
            this.generateDateCount++;
            }
          }
        }
      }
    }
  }
//Method to generate monthly due date
  monthlyGeneratedDate(){
    this.dateArray=[];
    this.holidayFlag=0;
    let noOfMonth=0;
    for(let j=0;j<Object.keys(this.selectedMonthName).length;j++){
    
      if(this.selectedMonthName[Object.keys(this.selectedMonthName)[j]]==true){
      
        noOfMonth++;
      }
    }
    if(noOfMonth==12){
      this.generateDateCount=0;
      if(this.model){
        this.startDate=this.model;
      }else{
        this.startDate=this.calendar.getToday();
      }
      for(let i=1;i<=this.occuranceTimes || this.generateDateCount<this.occuranceTimes;i++){
        this.holidayFlag=0;
        this.nextDate=this.calendar.getNext(this.startDate,'m',i);
        this.nextDate=this.calendar.getNext(this.nextDate,'d',this.day-1);
        for(let k=0;k<this.holiDays.length;k++){
          if(this.holiDays[k].year==this.nextDate.year && this.holiDays[k].month==this.nextDate.month && this.holiDays[k].day==this.nextDate.day ){
          this.holidayFlag++;
          }
        }
        this.dayName=this.weekDays[this.calendar.getWeekday(this.nextDate)];
        if(this.dayName=='Monday'|| this.dayName=='Tuesday'||this.dayName=='Wednesday'|| this.dayName=='Thursday'|| this.dayName=='Friday'){
          if(this.holidayFlag<1){
            this.dateArray.push(this.nextDate.year+'/'+this.nextDate.month+'/'+this.nextDate.day);
          this.generateDateCount++;
          }
        }
      }
    }
  }
  //Methode ot generate yearly due date
  yearlyGeneratedDate(){
    this.dateArray=[];
    this.holidayFlag=0;
    this.generateDateCount=0
    if(this.choosedMonth){
      if(this.model){
        this.startDate=this.model;
      }else{
        this.startDate=this.calendar.getToday();
      }
      for(let i=1;i<=this.occuranceTimes || this.generateDateCount<this.occuranceTimes;i++){
        this.holidayFlag=0;
        this.nextDate=this.calendar.getNext(this.startDate,'y',i);
        this.nextDate=this.calendar.getNext(this.nextDate,'m',this.monthNames[this.choosedMonth]-1);
        this.nextDate=this.calendar.getNext(this.nextDate,'d',this.day-1);
        for(let k=0;k<this.holiDays.length;k++){
          if(this.holiDays[k].year==this.nextDate.year && this.holiDays[k].month==this.nextDate.month && this.holiDays[k].day==this.nextDate.day ){
          this.holidayFlag++;
          }
        }
        this.dayName=this.weekDays[this.calendar.getWeekday(this.nextDate)];
        if(this.dayName=='Monday'|| this.dayName=='Tuesday'||this.dayName=='Wednesday'|| this.dayName=='Thursday'|| this.dayName=='Friday'){
          if(this.holidayFlag<1){
          this.dateArray.push(this.nextDate.year+'/'+this.nextDate.month+'/'+this.nextDate.day);
          this.generateDateCount++;
          }
        }
      }
    }
  }

  //Method to genere completion due date
  generatedCompletionDueDate(){
    this.dateArray=[];
    this.holidayFlag=0;
    this.generateDateCount=0;
    if(this.model || this.EndByDate){
        this.startDate=this.model;
        this.date_to_complete=this.EndByDate;
      }else{
        this.startDate=this.calendar.getToday();
        this.date_to_complete=this.calendar.getNext(this.calendar.getToday(),'d',1)
      }
      if(this.endDateOption && this.date_to_complete){
        for(let i=0;this.generateDateCount==0;i++)
        {
          this.holidayFlag=0;
          this.nextDate=this.calendar.getNext(this.startDate,'d',i);
          if(this.nextDate.year==this.date_to_complete.year && this.nextDate.month==this.date_to_complete.month &&  this.nextDate.day==this.date_to_complete.day){
            this.dayName=this.weekDays[this.calendar.getWeekday(this.nextDate)];
            if(this.weekDays[this.calendar.getWeekday(this.nextDate)]=='Sunday' || this.weekDays[this.calendar.getWeekday(this.nextDate)]=='Satarday')
            {
              var j=i-1;
              while(this.dayName=='Sunday'|| this.dayName=='Satarday'){
                this.nextDate=this.calendar.getNext(this.startDate,'d',j);
                this.dayName=this.weekDays[this.calendar.getWeekday(this.nextDate)];
                j--;
            }
            var p=j;
            for(let k=0;k<this.holiDays.length;k++){
              if(this.holiDays[k].year==this.nextDate.year && this.holiDays[k].month==this.nextDate.month && this.holiDays[k].day==this.nextDate.day ){
                this.nextDate=this.calendar.getNext(this.startDate,'d',p);
                p--;
                this.holidayFlag++;
              }
            }
            this.dateArray.push(this.nextDate.year+'/'+this.nextDate.month+'/'+this.nextDate.day);
            this.generateDateCount++;
          }else{
            var x=i;
            console.log("kk",i);
            for(let k=0;k<this.holiDays.length;k++){
              if(this.holiDays[k].year==this.nextDate.year && this.holiDays[k].month==this.nextDate.month && this.holiDays[k].day==this.nextDate.day ){
                this.nextDate=this.calendar.getNext(this.startDate,'d',x);
                x--;
                this.holidayFlag++;
              }
            }
            this.dateArray.push(this.nextDate.year+'/'+this.nextDate.month+'/'+this.nextDate.day);
            this.generateDateCount++;
          }
        }
      }
    }
  }
  //A Method to create one time due date
  oneTimeDueDate(){
    this.dateArray=[];
    if(this.model){
      this.startDate=this.model;
    }else{
      this.startDate=this.calendar.getToday();
    }
    this.dateArray.push(this.startDate.year+'/'+this.startDate.month+'/'+this.startDate.day);
  }
}