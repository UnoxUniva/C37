class Player{                         
    constructor(){
        this.index = null
        this.name = ""
        this.distance = 0
    }   
    getCount(){
        var dbref = database.ref("playerCount")
        dbref.on("value", function(data) {
            playerCount = data.val()
        })

    }       
    updateCount(count){
        database.ref("/").set({playerCount:count})
    }
    update()
    {
        var playerIndex = 'Players/player'+ this.index
        database.ref(playerIndex).update({name:this.name,distance:this.distance})
    }
    static getAllPlyrsInfo(){
       var dbref = database.ref("Players")
       dbref.on("value", (data)=>{
           allPlayers = data.val()
       })
    }
}    