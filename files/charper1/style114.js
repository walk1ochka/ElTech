/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 
 var t0 ="<span class='head1'><span style='font-size:16pt;font-family:Arial;color:darkblue'>Источник энергии &#8211;<span style='font-size:14pt;font-family:Arial;color:black'> активный элемент электрической цепи, в котором преобразуются различные виды энергии в электрическую. Это генераторы электрических станций, аккумуляторные и солнечные батареи, термопары и др. "
  var t1 ="<span class='head1'><span style='font-size:16pt;font-family:Arial;color:darkblue'>Приёмники энергии &#8211; <span style='font-size:14pt;font-family:Arial;color:black'>это пассивные элементы, в которых преобразуется электрическая энергия в другие виды: в тепловую (нагревательные элементы), механическую (электрические двигатели), световую (люминесцентные лампы), химическую (гальванические ванны) и др."
var t2 ="<span class='head1'><span style='font-size:16pt;font-family:Arial;color:darkblue'>Вспомогательные элементы электрической цепи &#8211;<span style='font-size:14pt;font-family:Arial;color:black'> это выключатели, предохранители, резистивные регуляторы тока, измерительные приборы, разъёмы и др. "

Text[0]=[":: Источник энергии ::",t0]
Text[1]=[":: Приёмники энергии ::",t1]
Text[2]=[":: Вспомогательные элементы электрической цепи ::",t2]


Style[0]=["white","#ffdeed","#8800ff","white","","","center","","","Verdana","center","",5,5,"95%",4,5,45,80,160,51,4,4,"complex","gray"]

applyCssFilter()

