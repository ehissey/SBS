#pragma strict

var gStyle : GUIStyle;
var f: Font;

function OnGUI () 
{   
	var hp = gameObject.GetComponent(healthScript);
	
	if(hp.health <1)
	{
		gStyle.fontSize = 200;
		gStyle.normal.textColor = Color(1, 0, 0);
		GUI.skin.font = f;
		GUI.Label (Rect(Screen.width/2 - 400, Screen.height/2 - 100, 350, 200), "YOU DIED!", gStyle);
			
		gameObject.GetComponent(Pause).pause = true;
		

	}
	if(Time.timeScale == 1f)
	{
		gStyle.fontSize = 100;
		gStyle.normal.textColor = Color(1,0,0);
		GUI.skin.font = f;
    	GUI.Label (Rect(Screen.width - 350, Screen.height - 100, 350, 100), "HP: " + hp.health.ToString(), gStyle);
	}
}

