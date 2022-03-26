/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 
 var t0 ="<span class='head2'>Статор</span> - это неподвижная часть машины. "
  var t1 ="<span class='head2'>Ротор</span> - это подвижная часть машины."
	var t2 ='<img src="page712/pic82.gif">'
	var t3 ="<img src='page712/pic83sm.gif'>"
	var t4 ="<img src='page712/pic83a.gif'>"
	var t5 ="<img src='page712/pic83b.gif'>"


Text[0]=[":: Статор ::",t0]
Text[1]=[":: Ротор ::",t1]
Text[2]=[":: Рисунок 8.2 ::",t2]
Text[3]=[":: Рисунок 8.3 ::",t3]
Text[4]=[":: Ротор 8.3(а) ::",t4]
Text[5]=[":: Ротор 8.3(б) ::",t5]

Style[0]=["white","black","black","#F8F4F1","","","center","","","Verdana","center","",2,2,"70%",,1,20,0,10,51,1,100,"complex","gray"]
Style[2]=["white","black","black","#ffffff","","","center","","","Verdana","center","",2,2,150,183,1,20,0,10,51,1,100,"complex","gray"]
Style[3]=["white","black","black","#ffffff","","","center","","","Verdana","center","",2,2,515,156,1,20,0,10,51,1,100,"complex","gray"]
Style[4]=["white","black","black","#ffffff","","","center","","","Verdana","center","",2,2,330,211,1,20,0,10,51,1,100,"complex","gray"]






applyCssFilter()

