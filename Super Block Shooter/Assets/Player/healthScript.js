#pragma strict

var health : int = 100;
private var isPlayer = false;

function Start () 
{
	if(gameObject.name == "Player")
	{
		isPlayer = true;
	}
}

function Update () 
{
	if(health <= 0)
	{
		Destroy(this.gameObject);
	}
}

function decrementHealth (amount : int) 
{
	health = health - amount;
	Debug.Log(this.gameObject.name + ": " + health);
}

function incrementHealth (amount : int) 
{
	health = health + amount;
	Debug.Log(this.gameObject.name + ": " + health);
}

