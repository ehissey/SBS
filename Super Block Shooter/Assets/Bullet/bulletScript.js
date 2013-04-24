var prefabBullet : GameObject;
var prefabPart : ParticleSystem;
var bullet = GameObject;
var forwardForce = 1000;
var upwardForce = 0;
var instanceBullet : GameObject;

function Update()
{
	if(Time.timeScale != 0)
	{
		if (Input.GetButtonDown("Fire1"))
		{
		
			var newColor = Color(Random.Range(0.3, 1.0), 
			 					 Random.Range(0.3, 1.0),
			 					 Random.Range(0.3, 1.0));
			 					 
			var colAvg = (newColor.r + newColor.g + newColor.b) / 3; 					 
			if(colAvg < 200)
			{
				newColor = getColor();
			}
			 					 
			upVec = Vector3(0,upwardForce,0);
		
			var directionVector = Camera.main.transform.forward;
			
			instanceBullet = Instantiate(prefabBullet, transform.position + directionVector*2, 
			Quaternion.identity);
			
			instanceBullet.light.color = newColor;
			
			instanceBullet.renderer.material.color = newColor;
			
			instanceBullet.rigidbody.AddForce(directionVector * 
			forwardForce + upVec);
					
			instanceBullet.particleSystem.startColor = instanceBullet.light.color;
		}
	}
}

function getColor()
{
	var color = Color(Random.Range(0.0, 1.0), 
		 			Random.Range(0.0, 1.0),
		 		    Random.Range(0.0, 1.0));
		 		    
	return color;
}

function OnCollisionEnter(theCollision : Collision)
{
	Destroy(instanceBullet);
}
