#pragma strict

var gStyle : GUIStyle;
var f: Font;

function OnGUI () 
{   
	var hp = gameObject.GetComponent(healthScript);

	gStyle.fontSize = 100;
	gStyle.normal.textColor = Color(1,0,0);
	GUI.skin.font = f;
    GUI.Label (Rect(Screen.width - 350, Screen.height - 100, 350, 100), "HP: " + hp.health.ToString(), gStyle);
}
