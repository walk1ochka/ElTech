/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 
 var t0 ="<span class='head1'><span style='font-size:14pt;font-family:Arial'><b>Ток <i>I </i> = 1 A равен заряду <i>Q</i> = 1 Кл = 6,24<span class='symbol'>Ч</span>10<sup><b>18</sup> </b>электронов, проходящему через поперечное сечение проводника за время <i>t</i> = 1 с. "
  var t1 ="<span class='head1'><span style='font-size:14pt;font-family:Arial'><b> 1 Ампер &#8211; это такой электрический ток, который, проходя по двум прямолинейным параллельным бесконечным проводникам, расположенным на расстоянии 1 м друг от друга, вызывает на каждом участке длиной 1 м силу взаимодействия 2<span class='symbol'>Ч</span>10<sup><span style='font-size:11pt;font-family:Arial'><b>&#8211;7</b></sup> </span> Н."
   var t2 ="<span class='head1'><span style='font-size:14pt;font-family:Arial'><b>Напряжение <i>U</i> = 1 В равно энергии <i>W</i> = 1 Дж, затраченной на перемещение заряда <i>Q </i> = 1 Кл из одной точки проводника в другую."
    var t3 ="<span class='head1'><span style='font-size:14pt;font-family:Arial;color:darkblue'><b>1 Вольт &#8211;<span style='font-size:14pt;font-family:Arial;color:black'> это напряжение (разность потенциалов) между такими двумя точками  поля (проводника), для которых перемещение заряда в 1 Кл из одной точки в другую требует совершения работы в 1 Дж. "
   var t4 ="<span class='head1'><span style='font-size:14pt;font-family:Arial'><b>Электродвижущая сила <i>E</i> = 1 В численно равна работе <i>W</i> = 1 Дж, затрачиваемой сторонним полем на перемещение заряда <i>Q</i> = 1 Кл из одной точки поля (проводника) в другую. "
var t5 = "<span class='head1'><span style='font-size:14pt;font-family:Arial'><b>Напряжённость элекрического поля <img  src='images/image030.gif' width=14 height=18 hspace='0' vspace='0' border='0'> = 1 В/м численно равна силе в 1 Н, действующей со стороны поля на положительный точечный заряд в 1 Кл."

Text[0]=[":: <b>Ток I = 1 А ::",t0]
Text[1]=[":: <b>Ампер ::",t1]
Text[2]=[":: <b>Напряжение U = 1 В ::",t2]
Text[3]=[":: <b>Вольт ::",t3]
Text[4]=[":: <b>Электродвижущая сила (ЭДС) Е = 1В ::",t4]
Text[5]=[":: <b>Напряжённость ::",t5]

Style[0]=["white","#ffdeed","#8800ff","white","","","center","","","Verdana","center","",3,3,"90%",,1,20,0,10,51,1,100,"complex","gray"]

applyCssFilter()

  

