window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();
var variable1 = player.GetVar("Cat_1_P_1");
var variable2 = player.GetVar("Cat_1_P_2");
var variable3 = player.GetVar("Cat_1_P_3");
var variable4 = player.GetVar("Cat_1_P_4");

var variable5 = player.GetVar("Cat_2_P_1");
var variable6 = player.GetVar("Cat_2_P_2");
var variable7 = player.GetVar("Cat_2_P_3");
var variable8 = player.GetVar("Cat_2_P_4");

var variable9 = player.GetVar("Cat_3_P_1");
var variable10 = player.GetVar("Cat_3_P_2");
var variable11 = player.GetVar("Cat_3_P_3");
var variable12 = player.GetVar("Cat_3_P_4");

var variable13 = player.GetVar("Cat_4_P_1");
var variable14 = player.GetVar("Cat_4_P_2");
var variable15 = player.GetVar("Cat_4_P_3");
var variable16 = player.GetVar("Cat_4_P_4");

var variable17 = player.GetVar("Cat_5_P_1");
var variable18 = player.GetVar("Cat_5_P_2");
var variable19 = player.GetVar("Cat_5_P_3");
var variable20 = player.GetVar("Cat_5_P_4");

var variable21 = player.GetVar("Cat_6_P_1");
var variable22 = player.GetVar("Cat_6_P_2");
var variable23 = player.GetVar("Cat_6_P_3");
var variable24 = player.GetVar("Cat_6_P_4");

// Asignar los valores a otra variable usando template literals
var nuevaVariable = `Customer Experience. ${variable1}, ${variable2}, ${variable3}, ${variable4} 
Technical Skills. ${variable5}, ${variable6}, ${variable7}, ${variable8}
Motivation. ${variable9}, ${variable10}, ${variable11}, ${variable12}
Commitment. ${variable13}, ${variable14}, ${variable15}, ${variable16}
Resilience. ${variable17}, ${variable18}, ${variable19}, ${variable20}
Emmotional Intelligence. ${variable21}, ${variable22}, ${variable23}, ${variable24}`;

function setScores(){
player.SetVar("Cat_1_res",nuevaVariable )
}
setScores()
}

};
