

export default class Monster {
    level = '0';
    source = './monster/PNG/Default/';
    listLevel = {
        D:'blue',
        E:'yellow',
        S:'green',
        0:'dark',
    };
    numberEyes= 1;
    listType = ['A', 'B', 'C', 'D', 'E', 'F'];
    listEye = [
        'eye_angry_blue',
        'eye_angry_green', 
        'eye_angry_red',
        'eye_blue',
        'eye_closed_feminine',
        'eye_closed_happy',
        'eye_cute_dark',
        'eye_cute_light',
        'eye_dead',
        'eye_human_blue',
        'eye_human_green',
        'eye_human_red',
        'eye_human',
        'eye_psycho_dark',
        'eye_psycho_light',
        'eye_red',
        'eye_yellow',

    ];
    name="body_blueD.png";
    x="192";
    y="546";
    width="174";
    height="182";

	constructor() {
        console.log('creation du monstre');
        
        this.numberEyes = Math.round(Math.random()*2);

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

    GETchest(){
        let randomChest = Math.round(Math.random()*5);
        return this.source + 'body_' + this.GETColor() + this.listType[randomChest]+ '.png';
    }

    GETeye(){
        let randomEye = Math.round(Math.random()*16);
        return this.source + this.listEye[randomEye] + '.png';
    }
    
    GETnumberEye(){
        return this.numberEyes;
    }

    GETleg(){
        let randomHead = Math.round(Math.random()*4);
        return this.source + 'leg_' + this.GETColor() + this.listType[randomHead]+ '.png';
    }

    GETarm(){
        let randomHead = Math.round(Math.random()*4);
        return this.source + 'arm_' + this.GETColor() + this.listType[randomHead]+ '.png';
    }
    
}
