/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 
var t0 ="<span class='head2'> <img  src='page912/images/image91.jpg' hspace='0' vspace='0' border='0'>"
var t1 ="<span class='head2'> <img  src='page912/images/image91a.jpg' hspace='0' vspace='0' border='0'>"
var t2 ="<span class='head2'> <img  src='page912/images/image91b.jpg' hspace='0' vspace='0' border='0'>"
var t3 ="<span class='head2'> <img  src='page912/images/image92.jpg' hspace='0' vspace='0' border='0'>"

Text[0]=[":: Машины постоянного тока (рис. 9.1) ::",t0]
Text[1]=[":: Магнитопровод машины (рис. 9.1,а) ::",t1]
Text[2]=[":: Магнитопровод машины (рис. 9.1,б) ::",t2]
Text[3]=[":: Схемы возбуждения МПТ ::",t3]


Style[0]=["white","black","black","white","","","center","center","","Verdana","center","",2,2,"50%",,1,20,0,10,51,1,100,"complex","gray"]

applyCssFilter()

