#pragma strict

var health : float = 100;

function Start () {

}

function Update () {
	if(health <= 0){
		Destroy(this.gameObject);
	}
}

function decrementHealth (amount : float) {
	health = health - amount;
	Debug.Log(this.gameObject.name + ": " + health);
}

function incrementHealth (amount : float) {
	health = health + amount;
	Debug.Log(this.gameObject.name + ": " + health);
}