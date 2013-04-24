#pragma strict

var health : int = 100;
private var isPlayer = false;

var gibs : GameObject;

var hurtSound : AudioClip;
var gibAmount = 6;
function Start () 
{
	if(this.gameObject.name == "Player")
	{
		isPlayer = true;
	}
}

function Update () 
{
	
	if(gameObject.GetComponent(playerHP) == null)
	{	
		if(health <= 0)
		{	
			for(var i = 0; i < gibAmount; i++)
			{			
				var vec = Vector3(Random.Range(0,1), Random.Range(0,1), Random.Range(0,1)).normalized;
				vec = vec + this.gameObject.transform.position;
				var gibInstance = Instantiate(gibs, vec, Quaternion.identity);	
			}
			
			Destroy(this.gameObject);
		}
	}
}

function decrementHealth (amount : int) 
{
	health = health - amount;
	Debug.Log(this.gameObject.name + ": " + health);
	
	var aud = gameObject.AddComponent(AudioSource);
	
	aud.audio.PlayOneShot(hurtSound);
}

function incrementHealth (amount : int) 
{
	health = health + amount;
	Debug.Log(this.gameObject.name + ": " + health);
}

