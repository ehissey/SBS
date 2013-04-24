var newSkin : GUISkin;
var logoTexture : Texture2D;
var started = true;
var startCam : Camera;

function theFirstMenu() {
	if(started)
	{
		Time.timeScale = 0f;
	 
	    
	    //logo picture
	    GUI.Label(Rect(Screen.width/2 - 225, Screen.height/2 - 400, 450, 250), logoTexture);
	    
	
	    if(GUI.Button(Rect(Screen.width/2 - 120 , Screen.height/2 - 80, 240, 80), "Start game")) 
	    {
		    started = false;
		    
		    startCam.enabled = true;
		    startCam.active = true;
		    this.active = false;
		    Time.timeScale = 1f;
		    
	    
	    }
	    //quit button
	    if(GUI.Button(Rect(Screen.width/2 - 120 , Screen.height/2 + 40, 240, 80), "Quit")) {
	    Application.Quit();
	    }
	    
	    //layout end
	    //GUI.EndGroup(); 
    }
}

function OnGUI () {
    //load GUI skin
    GUI.skin = newSkin;
    
    //execute theFirstMenu function
    theFirstMenu();
}