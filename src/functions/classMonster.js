

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
    listMouth = [
        '_closed_fangs',
        '_closed_happy', 
        '_closed_sad',
        '_closed_teeth',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
    ];
    listNose = [
        'nose_brown',
        'nose_green', 
        'nose_red',
        'nose_yellow',
        'snot_large',
        'snot_small',
    ];
    listExtra= ['horn', 'antenna'];
    listExtraSize = ['large', 'small']
    isNose = false;
    typeExtra = 0;

	constructor(level) {
        console.log('creation du monstre');
        if(level && level in this.listLevel ){
            this.level = level;
        }
        this.numberEyes = Math.round(Math.random())+1;
        this.isNose = Math.random() <0.5;
	}

    GETColor(){
        return this.listLevel[this.level];
    }

    GETchest(){
        let randomChest = Math.round(Math.random()*(this.listType.length-1));
        return this.source + 'body_' + this.GETColor() + this.listType[randomChest]+ '.png';
    }

    GETeye(){
        let randomEye = Math.round(Math.random()*(this.listEye.length-1));
        return this.source + this.listEye[randomEye] + '.png';
    }

    GETmouth(){
        let randomMouth = Math.round(Math.random()*(this.listMouth.length-1));
        return this.source + 'mouth'+this.listMouth[randomMouth] + '.png';
    }
    
    GETnumberEye(){
        return this.numberEyes;
    }
    
    GETisNose(){
        return this.isNose;
    }
    
    
    GETnose(){
        let randomNose = Math.round(Math.random()*(this.listNose.length-1));
        return this.source + this.listNose[randomNose]+ '.png';
    }
    
    GEThorn(){
        let ExtraSize = Math.round(Math.random()*(this.listExtraSize.length-1));
        return this.source + 'detail_' + this.GETColor() +'_horn_'+ this.listExtraSize[ExtraSize]+ '.png';
    }
    
    GETantenna(){
        let ExtraSize = Math.round(Math.random()*(this.listExtraSize.length-1));
        return this.source + 'detail_' + this.GETColor() +'_antenna_'+ this.listExtraSize[ExtraSize]+ '.png';
    }
    
    GETear(){
        let ExtraSize = Math.round(Math.random()*(this.listExtraSize.length-1));
        return this.source + 'detail_' + this.GETColor() +'_antenna_'+ this.listExtraSize[ExtraSize]+ '.png';
    }
    
    GETeyebrow(){
        let ExtraSize = Math.round(Math.random()*(this.listExtraSize.length-1));
        return this.source + 'detail_' + this.GETColor() +'_antenna_'+ this.listExtraSize[ExtraSize]+ '.png';
    }
    GETtypeExtra(){
        return this.typeExtra;
    }

    GETextra(){
        let value = '';
        this.typeExtra = Math.round(Math.random()*(this.listExtra.length));


        switch (this.typeExtra) {
            case 1:
                value = this.GEThorn();
                break;
            case 2:
                value = this.GETantenna();
                break;
            case 3:
                value = this.GETear();
                break;
            case 4:
                value = this.GETeyebrow();
                break;
        }
        return value;
    }
    GETleg(){
        let randomHead = Math.round(Math.random()*(this.listType.length-2));
        return this.source + 'leg_' + this.GETColor() + this.listType[randomHead]+ '.png';
    }

    GETarm(){
        let randomHead = Math.round(Math.random()*(this.listType.length-2));
        return this.source + 'arm_' + this.GETColor() + this.listType[randomHead]+ '.png';
    }
    
}
