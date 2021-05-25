class Form{
    constructor(){
        this.title = createElement('h2');
        this.input = createInput("Name");
        this.button = createButton("Play")
        this.greeting = createElement('h3')
    }
    display(){
      
        this.title.html('Racing Cars');
        this.title.position(130,0);
        
        this.input.position(130,100)

        
        this.button.position(250,100)

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide()

            var name = this.input.value();

            
            this.greeting.html('Hello'+ name)
            this.greeting.position(130,100);

            playerCount +=1;
            player.updateCount(playerCount)
            player.name = name;
            player.index = playerCount
            player.update()
            
            
        })
    }
    hideForm(){
        this.input.hide();
        this.greeting.hide()
        this.button.hide();
        
        
    }

}