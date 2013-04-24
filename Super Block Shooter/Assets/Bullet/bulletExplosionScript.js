#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(theCollision : Collider)
{
	var collidedGameObject = theCollision.gameObject;
	Debug.Log(collidedGameObject.name);
	
	//Destroy(gameObject);
}