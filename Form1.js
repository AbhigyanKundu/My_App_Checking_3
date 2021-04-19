class Form1 {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Reset');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.button = createButton('Get Started');

    
    this.emergency1= createButton('Police Station');
    this.emergency2= createButton('Fire Staion');
    this.emergency3= createButton('Petrol Pump');
    this.emergency4= createButton('Resturants');
    this.emergency5= createButton('Hospitals');


  }
 
 
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

 
 
 
  display(){
    this.title.html("Emergency Services");
    this.title.position(displayWidth/2 - 50, 0);

          
   

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 470, displayHeight/4);


      this.emergency1.position(displayWidth/2 - 50, 100);

      //this.emergency2.display();
      this.emergency2.position(displayWidth/2 - 50,200);

      //this.emergency3.display();
      this.emergency3.position(displayWidth/2 - 50, 300);

     // this.emergency4.display();
      this.emergency4.position(displayWidth/2 - 50, 400);

      //this.emergency5.display();
      this.emergency5.position(displayWidth/2 - 50, 500);
      //game.update(2)
     //this.emergency1.display();
      

    });


    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    
    })


    //Emergency 1 Police Station

  // this.emergency1.onclick(()=>{
    // import { Button } from '@syncfusion/ej2-buttons';
    //    import { enableRipple} from '@syncfusion/ej2-base';
      
    //    enableRipple(true);
      
    // // Initialize the Button component.
    //   let button: Button = new Button({cssClass: 'https://www.google.co.in/maps/search/police+station+near+by/@19.1087078,73.0051052,15z/data=!3m1!4b1'});
      
    // // Render initialized button.
    //    button.appendTo('#element');
   
    //    button.element.onclick = (): void => {
    //        window.open("https://www.google.co.in/maps/search/police+station+near+by/@19.1087078,73.0051052,15z/data=!3m1!4b1");
    //    }
    //   }
  
    //   //Emergency 2 Fire Brigade

    //   this.emergency2.onclick(()=>{
    //     import { Button } from '@syncfusion/ej2-buttons';
    //        import { enableRipple} from '@syncfusion/ej2-base';
          
    //        enableRipple(true);
          
    //        // Initialize the Button component.
    //        let button: Button = new Button({cssClass: 'https://www.google.co.in/maps/search/fire+brigade/@19.1088052,72.9788401,13z/data=!3m1!4b1'});
          
    //          // Render initialized button.
    //        button.appendTo('#element');
       
    //        button.element.onclick = (): void => {
    //            window.open("https://www.google.co.in/maps/search/fire+brigade/@19.1088052,72.9788401,13z/data=!3m1!4b1");
    //        }
      
    //       }


    //       //Emergency 3 Petrol Pump

    //       this.emergency3.onclick(()=>{
    //         import { Button } from '@syncfusion/ej2-buttons';
    //            import { enableRipple} from '@syncfusion/ej2-base';
              
    //            enableRipple(true);
              
    //            // Initialize the Button component.
    //            let button: Button = new Button({cssClass: 'https://www.google.co.in/maps/search/petrol+pump+near+by/@19.108792,72.97884,13z/data=!3m1!4b1'});
              
    //              // Render initialized button.
    //            button.appendTo('#element');
           
    //            button.element.onclick = (): void => {
    //                window.open("https://www.google.co.in/maps/search/petrol+pump+near+by/@19.108792,72.97884,13z/data=!3m1!4b1");
    //            }
          
    //           }

    //       //Emergency 4 Resturants


    //       this.emergency4.onclick(()=>{
    //         import { Button } from '@syncfusion/ej2-buttons';
    //            import { enableRipple} from '@syncfusion/ej2-base';
              
    //            enableRipple(true);
              
    //            // Initialize the Button component.
    //            let button: Button = new Button({cssClass: 'https://www.google.co.in/maps/search/Resturants+near+by/@19.104388,72.9966475,15z/data=!3m1!4b11'});
              
    //              // Render initialized button.
    //            button.appendTo('#element');
           
    //            button.element.onclick = (): void => {
    //                window.open("https://www.google.co.in/maps/search/Resturants+near+by/@19.104388,72.9966475,15z/data=!3m1!4b1");
    //            }
          
    //           }

    //       //Emergency 5 Hospitals
    

    //       this.emergency5.onclick(()=>{
    //         import { Button } from '@syncfusion/ej2-buttons';
    //            import { enableRipple} from '@syncfusion/ej2-base';
              
    //            enableRipple(true);
              
    //            // Initialize the Button component.
    //            let button: Button = new Button({cssClass: 'https://www.google.co.in/maps/search/Resturants+near+by/@19.104388,72.9966475,15z/data=!3m1!4b1'});
              
    //              // Render initialized button.
    //            button.appendTo('#element');
           
    //            button.element.onclick = (): void => {
    //                window.open("https://www.google.co.in/maps/search/Resturants+near+by/@19.104388,72.9966475,15z/data=!3m1!4b1");
    //            }
          
    //           }
  }
}
