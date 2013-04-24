var newSkin : GUISkin;
var logoTexture : Texture2D;
var started = true;
var startCam : Camera;

function theFirstMenu() {
	if(started)
	{
		Time.timeScale = 0f;
	    //layout start
	    GUI.BeginGroup(Rect(Screen.width / 2 - 150, 50, 300, 200));
	    
	    //the menu background box
	    GUI.Box(Rect(0, 0, 300, 200), "");
	    
	    //logo picture
	    GUI.Label(Rect(15, 10, 300, 68), logoTexture);
	    
	    ///////main menu buttons
	    //game start button
	    if(GUI.Button(Rect(55, 100, 180, 40), "Start game")) 
	    {
		    started = false;
		    
		    startCam.enabled = true;
		    startCam.active = true;
		    this.active = false;
		    Time.timeScale = 1f;
		    
	    
	    }
	    //quit button
	    if(GUI.Button(Rect(55, 150, 180, 40), "Quit")) {
	    Application.Quit();
	    }
	    
	    //layout end
	    GUI.EndGroup(); 
    }
}

function OnGUI () {
    //load GUI skin
    GUI.skin = newSkin;
    
    //execute theFirstMenu function
    theFirstMenu();
}