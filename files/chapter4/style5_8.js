/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 0 // if your not going to use transitions or filters in any of the tips set this to 0

var t0 ="- сглаживающие фильтры, используемые во вторичных источниках питания для подавления в нагрузке пульсаций напряжения или тока."

var t1 ="- частотные (полосно-пропускающие) фильтры, значительно ослабляющие одни гармонические составляющие и почти не ослабляющие другие составляющие напряжения или тока в ограниченной области частот."

 

Text[0]=["::  сглаживающие фильтры ::",t0]
Text[1]=["::  частотные (полосно-пропускающие) фильтры ::",t1]


Style[0]=["white","black","black","#F8F4F1","","","center","","","Verdana","center","",2,2,"80%",,1,20,0,10,51,1,80,"complex","gray"]

applyCssFilter()

