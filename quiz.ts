class Mario {
    HP: number = 1;
    speed: number = 5;
    currentForm: string = 'mario';
    invincible: boolean = false;
    positionX: number = 0;
    positionY: number = 0;

    constructor (
        HP: number,
        speed: number,
        currentForm: string,
        invincible: boolean,
        positionX: number,
        positionY: number
    ) {
        this.HP = HP;
        this.speed = speed;
        this.currentForm = currentForm;
        this.invincible = invincible;
        this.positionX = positionX;
        this.positionY = positionY;
    }
    
    moveRight(){
        this.positionX += this.speed
        console.log (`${this.currentForm} bergerak ke kanan, posisi X menjadi ${this.positionX}`);
    }
    moveLeft() {
        this.positionX -= this.speed
        console.log (`${this.currentForm} bergerak ke kiri, posisi X menjadi ${this.positionX}`);
    }
    takeDamage(): void {
        if (this.invincible === true) {
            console.log('Mario kebal, serangan tidak berpengaruh.');
        } else {
            this.HP -= 1;
            this.currentForm = 'mario';
            console.log(`Mario terkena serangan, HP sekarang = ${this.HP}`);
            console.log(`Form Mario kembali menjadi ${this.currentForm}`);
        }
    }
}

class SuperMario extends Mario {
    superMushroom(): void {
        this.HP += 1;
        this.currentForm = 'super mario';
        console.log(`Mario berubah menjadi Super Mario, HP menjadi = ${this.HP}`);
    }
}

class FireMario extends Mario {
    FireFlower(): void {
        this.HP += 1;
        this.currentForm = 'fire mario';
        console.log(`Mario berubah menjadi Fire Mario, HP menjadi = ${this.HP} `)
    }

    shootFireball(): void {
        console.log('dan Mario dapat menembakkan bola api');
    }
}

class SuperStar extends Mario {
    Star(): void {
        this.invincible = true;
        console.log(`Mario mendapatkan SuperStar dan menjadi kebal!`);
    }
}

const marioSuper = new SuperMario (1, 5, "mario", false, 0, 0);
marioSuper.superMushroom();

const marioFire = new FireMario (1, 5, "mario", false, 0, 0);
marioFire.FireFlower();
marioFire.shootFireball();

const marioStar = new SuperStar(1, 5, 'mario', false, 0, 0);
marioStar.Star();

const mario = new Mario (1, 5, "mario", false, 0, 0);
mario.takeDamage();

const marioInvincible = new Mario(1, 5, 'mario', true, 0, 0);
marioInvincible.moveRight();
marioInvincible.moveLeft();








