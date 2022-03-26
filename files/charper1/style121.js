/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 0 // if your not going to use transitions or filters in any of the tips set this to 0
 
 var t0 ="<table width='700' border='1' cellpadding='5' cellspacing='2' bordercolor='#990000'><tr bordercolor='#990000'><td class='head1' width='104' background='../images/TABL.jpg'><div align='center'>Основной параметр резистора</div></td><td class='head1' width='200' background='../images/TABL.jpg'><div align='center'>Графическое изображение на схемах</div></td><td class='head1' width='232' background='../images/TABL.jpg'> "+
"<div align='center'>Вольт-амперная характеристика</div></td><td class='head1' width='113' background='../images/TABL.jpg'><div align='center'>Компонентное уравнение</div></td></tr><tr bordercolor='#990000'><td class='text' height='148' width='104'><span class='head2'>Сопротивление<br></span><br><span class='index'>R</span><span class='indexsmall'>R</span><span class='index'> = U</span><span class='indexsmall'>R</span><span class='index'>/I</span><span class='indexsmall'>R<br>"+
"</span><span class='index'> <br></span>Например:<br><br><span class='index'>R</span> = 47 Ом;<br><span class='index'>R</span> = 68 кОм;<br><span class='index'>R</span> = 5,1 МОм</td><td class='text' height='148' width='200'><img src='page121/pic1.jpg' width='200' height='201'></td><td class='text' height='148' width='232'><img src='page121/pic2.jpg' width='220' height='191'></td><td class='text' height='148' width='113'> <p align='center'><span class='index'>I</span><span class='indexsmall'>R</span><span class='index'> "+
"= U</span><span class='indexsmall'>R</span><span class='index'> /R</span></p><p align='center'>или</p><p align='center'><span class='index'>U</span><span class='indexsmall'>R</span><span class='index'> = RI</span><span class='indexsmall'>R</span><span class='index'> </span><span class='head2'>(1.8)</span></p></td></tr></table>"

Text[0]=[":: Резистор ::",t0]

Style[0]=["white","#ffdeed","#8800ff","white","","","center","","","Verdana","center","",3,3,"90%",,5,5,0,100,51,1,100,"complex","gray"]


applyCssFilter()

