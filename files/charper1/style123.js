/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 0 // if your not going to use transitions or filters in any of the tips set this to 0
 
 var t0 ="<table width='700' border='1' cellpadding='5' cellspacing='2' bordercolor='#990000'><tr bordercolor='#990000'> <td class='head1' width='104' background='../images/TABL.jpg'> <div align='center'>Основной параметр конденсатора</div></td><td class='head1' width='200' background='../images/TABL.jpg'> <div align='center'>Графическое изображение на схемах</div></td><td class='head1' width='232' background='../images/TABL.jpg'> <div align='center'>Кулон-вольтная характеристика</div></td><td class='head1' width='113' background='../images/TABL.jpg'> <div align='center'>Компонентное уравнение</div></td></tr><tr bordercolor='#990000'> <td class='text' height='148' width='104'> <p align='center'><span class='head2'>Ёмкость С<br></span></p>"+
"<p class='index'>C = Q/u<span class='indexsmall'>C</span></p><p>Например:<br><br><span class='index'>С</span> = 0,1 Ф;<br><span class='index'>С</span> = 30 мкФ;<br><span class='index'>С</span> = 5 нФ;<br><span class='index'>С</span> = 10 пФ</p></td><td class='text' height='148' width='200'><img src='page123/pic1.jpg' width='200' height='199'></td><td class='text' height='148' width='232'><img src='page123/pic2.jpg' width='220' height='196'></td><td class='text' height='148' width='113'> <p align='center'><img src='page123/image087.jpg' width='91' height='48'></p><p align='center'>или</p><p align='center'><img src='page123/image089.jpg' width='105' height='48'><span class='index'> </span><span class='head2'>(1.17)</span></p></td>"+
"</tr></table>"

Text[0]=[":: Конденсатор ::",t0]

Style[0]=["white","black","black","#FFFFFF","","","center","","","Verdana","center","0",2,2,"700",,1,20,0,10,51,1,100,"complex","gray"]

applyCssFilter()

