 @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart").Click @@ script infofile_;_ZIP::ssf9.xml_;_
wait 5
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn_5").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("next_btn").Click @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_username").Set DataTable("username_value", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_username").Check CheckPoint("safepay_username_2") @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_password").SetSecure "62e910ad98aeca325db3c5058f0c7b27fa5678c4e864" @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("pay_now_btn_SAFEPAY").Click @@ script infofile_;_ZIP::ssf14.xml_;_
