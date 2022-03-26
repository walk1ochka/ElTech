/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 0 // if your not going to use transitions or filters in any of the tips set this to 0
 
 var t0 ="<table width='700' border='1' cellpadding='5' cellspacing='2' bordercolor='#990000'><tr bordercolor='#990000'><td class='head1' width='104' background='../images/TABL.jpg'><div align='center'>Основной параметр катушки</div></td><td class='head1' width='200' background='../images/TABL.jpg'> <div align='center'>Графическое изображение на схемах</div></td><td class='head1' width='232' background='../images/TABL.jpg'> <div align='center'>Вебер-амперная характеристика</div></td><td class='head1' width='113' background='../images/TABL.jpg'> <div align='center'>Компонентное уравнение</div></td></tr><tr bordercolor='#990000'> <td class='text' height='148' width='104'> <p align='center'><span class='head2'>Индуктивность <br></span></p>"+
"<p class='index'>L = <span class='symbol'>Y</span>/i<span class='indexsmall'>L</span></p><p>Например:<br><br><span class='index'>L</span> = 0,1 Гн;<br><span class='index'>L</span> = 30 мГн;<br><span class='index'>L</span> = 6,8 мкГн</p></td><td class='text' height='148' width='200'><img src='page122/pic1.jpg' width='200' height='191'></td><td class='text' height='148' width='232'><img src='page122/pic2.jpg' width='220' height='194'></td><td class='text' height='148' width='113'> "+
"<p align='center'><span class='index'>u</span><span class='indexsmall'>L</span> <span class='index'>=</span><span class='index'><img src='page122/image065.jpg' width='45' height='48' align='middle'></span></p><p align='center'>или</p><p align='center'><span class='index'>i</span><span class='indexsmall'>L</span><span class='index'>=<img src='page122/image067.jpg' width='87' height='48' align='absmiddle'></span><span class='index'> </span><span class='head2'>(1.14)</span></p></td></tr></table>"

Text[0]=[":: <ИНДУКТИВНАЯ КАТУШКА ::",t0]

Style[0]=["white","black","black","#FFFFFF","","","center","","","Verdana","center","0",2,2,"700",,1,20,0,10,51,1,100,"complex","gray"]

applyCssFilter()

