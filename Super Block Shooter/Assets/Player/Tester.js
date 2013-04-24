#pragma strict

function Update () 
{
	if(Input.GetKeyDown(KeyCode.O))
	{
		var val1 = gameObject.GetComponent(EdgeDetectEffectNormals).enabled;
		gameObject.GetComponent(EdgeDetectEffectNormals).enabled = !val1;
	}
	if(Input.GetKeyDown(KeyCode.P))
	{
		var val2 = gameObject.GetComponent(CameraMotionBlur).enabled;
		gameObject.GetComponent(CameraMotionBlur).enabled = !val2;
	}
	
	
	
}