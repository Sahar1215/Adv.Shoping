
wait 3
Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set "user1234" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Output CheckPoint("username_2") @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Password").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").SetSecure "62e905d7f925ef3ca75267fe3e8bf5fa7540b3e15292" @@ script infofile_;_ZIP::ssf4.xml_;_
wait 2
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btnundefined").Click @@ script infofile_;_ZIP::ssf5.xml_;_
