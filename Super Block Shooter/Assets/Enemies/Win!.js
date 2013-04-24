#pragma strict

var gStyle : GUIStyle;
var f: Font;

function OnGUI () 
{   
	var hp = gameObject.GetComponent(healthScript);

	if(hp.health <= 0)
	{
		
		
		gStyle.fontSize = 200;
		gStyle.normal.textColor = Color(0, 1, 0);
		GUI.skin.font = f;
	    GUI.Label (Rect(Screen.width - 350, Screen.height - 700, 700, 200), "YOU WIN!", gStyle);
		
		
		
		if(GUI.Button (Rect(Screen.width/2 - 120 , Screen.height/2 - 160, 240, 80), "Quit"))
		{	
			Application.Quit();
		}
			
		if(GUI.Button (Rect(Screen.width/2 - 120 , Screen.height/2 + 40, 240, 80), "Restart"))
		{
			Application.LoadLevel(Application.loadedLevel);	
			Time.timeScale = 1f;
		}
		
		//Time.timeScale = 0f;
	}
}
