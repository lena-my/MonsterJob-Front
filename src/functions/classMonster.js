

export default class Monster {
    level = '0';
    source = '../assets/PNG/Default/';
    listLevel = {
        D:'blue',
        E:'yellow',
        S:'green',
        0:'Black',
    }
    name="body_blueD.png";
    x="192";
    y="546";
    width="174";
    height="182";

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
    
    GETName(){
        return this.name;
    }

    GETX(){
        return this.x;
    }

    GETY(){
        return this.y;
    }

    GETWidth(){
        return this.width;
    }

    GETHeight(){
        return this.Height;
    }
    
}
