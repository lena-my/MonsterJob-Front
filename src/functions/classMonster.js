

export default class Monster {
    level = '0';
    source = '../assets/PNG/Default/';
    listLevel = {
        D:'blue',
        E:'yellow',
        S:'green',
        0:'Black',
    }

	constructor() {
        console.log('creation du monstre');
	}

    InitLevel(level){
        if(level && level in this.listLevel ){
            this.level = level;
        }
        console.log('mis à jour du level : ' + this.level);
    }

    GETColor(){
        return this.listLevel[this.level];
    }
    
    
}
