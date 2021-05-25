class Game{
    constructor(){

    }

    getState(){
        var dbref = database.ref("gameState")
        dbref.on("value",function(data){
           gameState = data.val();
        })
    }
    update(state)
    {
        database.ref("/").update({gameState: state})
    }
    startGame(){
        if(gameState===0)
        {
            player = new Player();
            player.getCount();

            form = new Form();
            form.display();

            

        }
    }
    play(){
        form.hideForm()
        textSize(25)
        text("Game Started",250,100);
        
        Player.getAllPlyrsInfo()

        if(allPlayers!==undefined)
        {
            var textYPos = 200
            for(var plr in allPlayers)  //for each loop
            {
                text(allPlayers[plr].Name + " : " + allPlayers[plr].Name, 200,textYPos) //concatenate

                textYPos = textYPos +20

            }
        }

        if(keyisDow(UP_ARROW && player.index !== null)){
            player.distance+=50
            player.update()
        }
    }
}