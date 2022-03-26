/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 
 var t0 ='<table width="100%"><tr><td height=30><span class = "text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="index"><u>I</u><span class="indexsmalldigit">1</span> = <u>I</u><span class="indexsmalldigit">0</span> + <u>I&#8242;</u><span class="indexsmalldigit">2</span></span></td><td align="right"><span class="head2">(8.5)</span></td></tr></table><span class="text"> - уравнение токов, причём ток <span class="index">I<span class="indexsmalldigit">0</span></span> холостого хода в АД составляет (20…40)% от номинального тока статора;</span><table width="100%"><tr><td height=30><span class="index">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>U</u><span class="indexsmalldigit">1<i>ф</i></span> = -<u>E</u><span class="indexsmalldigit">1</span> + R<span class="indexsmalldigit">1</span><u>I</u><span class="indexsmalldigit">1</span> + jX<span class="indexsmalldigit">1</span><u>I</u><span class="indexsmalldigit">1</span></span></td><td align=right><span class="head2">(8.6)</span></td></tr></table><span class = "text"> - уравнение  электрического состояния для фазы статора;</span><table width="100%"><tr><td height=30><span class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="index"><u>E&#8242;</u><span class="indexsmalldigit">2</span> = R&#8242;<span class="indexsmalldigit">2</span><u>I&#8242;</u><span class="indexsmalldigit">2</span>/S + jX&#8242;<span class="indexsmalldigit">2</span><u>I&#8242;</u><span class="indexsmalldigit">2</span></span>; или <span class="index"><u>E</u><span class="indexsmalldigit">2</span> = R<span class="indexsmalldigit">2</span><u>I</u><span class="indexsmalldigit">2</span>/S + jX<span class="indexsmalldigit">2</span><u>I</u><span class="indexsmalldigit">2</span></span></td><td align=right><span class="head2">(8.7)</span></td></tr></table><span class="text"> - уравнение электрического состояния для фазы ротора.</span>'

var t1 = '<img src="page733/pic88.gif">'


Text[0]=[":: Формулы 8.5, 8.6, 8.7 ::",t0]
Text[1]=[":: Рисунок 8.8 ::",t1]


Style[0]=["white","black","black","#F8F4F1","","","center","","","Verdana","center","",2,2,"80%",,1,20,0,10,51,1,100,"complex","gray"]
Style[1]=["white","black","black","#ffffff","","","center","","","Verdana","center","",2,2,207,274,1,20,0,10,51,1,100,"complex","gray"]


applyCssFilter()

