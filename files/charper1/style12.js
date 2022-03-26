/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 
 var t0 ="<span class='head1'><span style='font-size:14pt;font-family:Arial;color:darkblue'><b>Резистор &#8211;</b> <span style='font-size:12pt;font-family:Arial;color:black'>это идеализированный элемент электрической цепи, предназначенный для использования его электрического сопротивления <i>R</i>."
  var t1 ="<span class='head1'><span style='font-size:14pt;font-family:Arial;color:darkblue'><b>Индуктивная катушка &#8211; </b><span style='font-size:12pt;font-family:Arial;color:black'>это идеализированный элемент цепи, предназначенный для использования его индуктивности <i>L</i>."
   var t2 ="<span class='head1'><span style='font-size:14pt;font-family:Arial;color:darkblue'><b>Конденсатор &#8211; </b><span style='font-size:12pt;font-family:Arial;color:black'> это идеализированный элемент цепи, предназначенный для использования его <i>ёмкости</i> С</i>."

Text[0]=[":: Резистор ::",t0]
Text[1]=[":: Индуктивная катушка ::",t1]
Text[2]=[":: Конденсатор ::",t2]

Style[0]=

["white","#ffdeed","#8800ff","white","","","center","","","Verdana","center","",3,3,"80%",,1,20,0,10,51,1,100,"complex","gray"]

applyCssFilter()

