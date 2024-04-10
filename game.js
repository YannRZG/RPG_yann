class Game {    
    constructor() {
        this.players = [grace, ulder, moana, draven, carl];
        this.turnLeft = 10;
        this.winner = null;
    }

    startGame() {
        console.log("Game starts!");

        while (this.turnLeft > 0 && !this.winner) {
            this.startTurn();
            this.turnLeft--;
        }

        if (!this.winner) {
            console.log("Game over! No winner.");
        } else {
            console.log(`Game over! ${this.winner.name} wins!`);
        }
    }

    startTurn() {
        console.log(`It's turn ${11 - this.turnLeft}`);

        let shuffledPlayers = this.shuffleArray(this.players);

        shuffledPlayers.forEach(player => {
            if (player.status === "playing") {
                console.log(`It's time for ${player.name} to play`);
                this.callPlayer(player);
            }
        });

        let alivePlayers = this.players.filter(player => player.status === "playing");
        if (alivePlayers.length === 1) {
            this.winner = alivePlayers[0];
        }

        console.log("Remaining players:");
        this.players.forEach(player => {
            console.log(`${player.name} (${player.health} HP)`);
        });
    }

    callPlayer(player) {
        let target = this.chooseRandomTarget(player);
    
        if (player instanceof Fighter) {
            if (player.mana >= 20 && Math.random() < 0.5) {
                player.darkVision(target);
            } else {
                player.dealDamage(target);
            }
        } else if (player instanceof Paladin) {
            if (player.mana >= 40 && Math.random() < 0.5) {
                player.healingLightning(target);
            } else {
                player.dealDamage(target);
            }
        } else if (player instanceof Monk) {
            if (player.mana >= 25 && Math.random() < 0.5) {
                player.heal(target);
            } else {
                player.dealDamage(target);
            }
        } else if (player instanceof Berzerker) {
            if (player.mana >= 0 && Math.random() < 0.5) {
                player.rage(target);
            } else {
                player.dealDamage(target);
            }
        } else if (player instanceof Assassin) {
            if (player.mana >= 20 && Math.random() < 0.5) {
                player.shadowHit(target);
            } else {
                player.dealDamage(target);
            }
        }
    }
    

    chooseRandomTarget(player) {
        let alivePlayers = this.players.filter(p => p.status === "playing" && p !== player);
        return alivePlayers[Math.floor(Math.random() * alivePlayers.length)];
    }

    skipTurn() {
        this.turnLeft--;
        if (this.turnLeft === 0) {
            console.log("Game over!");
        }
    }

    watchStats() {
        console.log("Current players' stats:");
        this.players.forEach(player => {
            console.log(`${player.name}: HP=${player.health}, Mana=${player.mana}`);
        });
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}

