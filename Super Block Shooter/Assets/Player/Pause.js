var pause = false;
private var guiActivate = false;

var gStyle : GUIStyle;
var f: Font;

var boss : GameObject;
 
function Update()
{
    if (Input.GetKeyDown(KeyCode.Escape))
    {
        pauseGame();
    }
} 

function Start()
{
	Time.timeScale = 1f;
    pause = false;
}

function OnGUI()
{
	
	if(pause)
	{
		Time.timeScale = 0f;
		
		if(GUI.Button (Rect(Screen.width/2 - 120 , Screen.height/2 - 160, 240, 80), "Quit"))
		{	
			Application.Quit();
		}
		
		if(GUI.Button (Rect(Screen.width/2 - 120 , Screen.height/2 + 40, 240, 80), "Restart"))
		{	
			Time.timeScale = 1f;
			pause = false;
			Application.LoadLevel(Application.loadedLevel);	
			Time.timeScale = 1f;
        	pause = false;
        	
		}
	}
	
	if(boss == null)
	{  
		gStyle.fontSize = 200;
		gStyle.normal.textColor = Color(0, 1, 0);
		GUI.skin.font = f;
		GUI.Label (Rect(Screen.width/2 - 400, Screen.height/2 - 100, 350, 200), "YOU WIN!", gStyle);
		
		
	}
}
 
function pauseGame()
{
    if (pause)
    {
        Time.timeScale = 1f;
        pause = false;
        
    }
    else
    {
        
        pause = true; 
        
    }
    
    
}