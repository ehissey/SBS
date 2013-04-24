var dist; 
var target : Transform;
var lookAtDistance = 45.0; 
var attackRange = 30.0; 

var stopRange = 10.0;

var moveSpeed = 5.0; 
var damping = 6.0; 

private var stopMove = false;
private var isItAttacking = false;


var prefabBullet : GameObject;
var prefabPart : ParticleSystem;
var bullet = GameObject;
var forwardForce = 1000;
var upwardForce = 0;

var shotDownTime = 60;
private var shotTimer = 0;

var instanceBullet : GameObject;


function getColor()
{
	var color = Color(Random.Range(0.0, 1.0), 
		 			Random.Range(0.0, 1.0),
		 		    Random.Range(0.0, 1.0));
		 		    
	return color;
}





function Update () 
{
	shotTimer--;
	
	dist = Vector3.Distance(target.position, transform.position);
 
 	//GREEN
 	if(dist > lookAtDistance)
	{
		isItAttacking = false;
		
		renderer.material.color = Color.green; 
	}
	//YELLOW
	if(dist < lookAtDistance)
	{
		
		renderer.material.color = Color.yellow;
		lookAt ();
	}   
	//RED
	if(dist < attackRange)
	{
		isItAttacking = true; 
	}
	
	if(dist < stopRange)
	{
		stopMove = true;
	}
	else
	{
		stopMove = false;
	}
	if(isItAttacking)
	{
		attack ();
		renderer.material.color = Color.red;
		
		
		if(shotTimer <= 0)
		{
			shotTimer = shotDownTime;
			
			var newColor = Color(Random.Range(0.3, 1.0), 
			 					 Random.Range(0.3, 1.0),
			 					 Random.Range(0.3, 1.0));
			 					 
			var colAvg = (newColor.r + newColor.g + newColor.b) / 3; 	
							 
			if(colAvg < 200)
			{
				newColor = getColor();
			}
			 					 
			upVec = Vector3(0,upwardForce,0);
		
			var directionVector = target.position - transform.position;
			
			instanceBullet = Instantiate(prefabBullet, transform.position + directionVector.normalized *1.5, 
			Quaternion.identity);
			
			instanceBullet.light.color = newColor;
			
			instanceBullet.renderer.material.color = newColor;
			
			
			instanceBullet.rigidbody.AddForce(directionVector * 
			forwardForce + upVec);
					
			instanceBullet.particleSystem.startColor = instanceBullet.light.color;
			
			
		}

	}
}

function lookAt () 
{ 
	var rotation = Quaternion.LookRotation(target.position - transform.position); 
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping); 
}

function attack () 
{ 
	renderer.material.color = Color.red;

	var moveVec = Vector3.forward * moveSpeed * Time.deltaTime;
	
	//moveVec.y = 0;
	if(!stopMove)
	{
		transform.Translate(moveVec);
	}
}