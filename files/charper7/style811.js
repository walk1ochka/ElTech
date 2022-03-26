/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 
 var t0 ="<span class='head2'>Асинхронные машины</span> - это машины переменного тока, у которых частота вращающегося магнитного поля статора и частота вращения ротора не совпадают. "
 var t1='<img src="page811/pic81.gif">'
Text[0]=[":: Асинхронные машины ::",t0]
Text[1]=[":: рисунок 8.1 ::", t1]

Style[0]=["white","black","black","#F8F4F1","","","center","","","Verdana","center","",2,2,"80%",,1,20,0,10,51,1,100,"complex","gray"]
Style[1]=["white","black","black","#ffffff","","","center","","","Verdana","center","",2,2,200,210,1,20,0,10,51,1,100,"complex","gray"]

applyCssFilter()

