var explRadius = 3.0;
var explPower = 500.0;
var prefabExpl : GameObject;
var instanceExpl : GameObject;


function OnCollisionEnter(theCollision : Collision)
{
	var collidedGameObject = theCollision.collider.gameObject;
	var amount : float = 10.0;
	var explPos : Vector3 = transform.position;
    var colliders : Collider[] = Physics.OverlapSphere (explPos, explRadius);
    
    instanceExpl = Instantiate(prefabExpl, explPos, Quaternion.identity);
    instanceExpl.particleSystem.startColor = Color(1.0f, 0.0f, 0.0f);
    
    for(var obj : Collider in colliders){
		
		if(obj.name.Equals(collidedGameObject.name)){
			continue;
		}
		
		var health = obj.gameObject.GetComponent(healthScript);
	
		if(health != null){
			var mag = (obj.transform.position - explPos).magnitude;

			amount = (1 - (mag / explRadius)) * amount;
			if(amount < 1.0f){
				amount = 1.0f;
			}

			health.decrementHealth(amount);
			if(obj.rigidbody){
				obj.rigidbody.AddExplosionForce(explPower, explPos, explRadius, 0.0f, ForceMode.Force);
			}
			amount = 10;
		}
	}
	
	
	health = collidedGameObject.GetComponent(healthScript);
		
	if(health != null){
		health.decrementHealth(amount);
	}
	
	Destroy(gameObject);
}