/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/

var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 var t0 ="<span class='head2'><big>Реле</big></span><span style='font-size:12pt;font-family:Arial'> - это слаботочные аппараты, коммутирующие цепи, ток в которых не превышает 5 А и редко доходит до нескольких десятков ампер. Они применяются в устройствах управления, защиты и сигнализации электротехнических установок. По характеру управляющего воздействия, приводящего к замыканию или размыканию контактов, различаются реле: <br> &nbsp;&nbsp;- <strong>электрические</strong>, реагирующие на заданный уровень электрического тока (или напряжения) в управляющей цепи;<br>&nbsp;&nbsp;- <strong>тепловые</strong>, реагирующие на температуру (или количество тепла); <br> &nbsp;&nbsp;- <strong>механические</strong>, реагирующие на давление или перемещение;<br>&nbsp;&nbsp;- <strong>оптические и акустические</strong>, реагирующие на силу соответственно света или звука и др."
 var t1 ="<span class='head2'><big><b>Контакторы</big></span><span style='font-size:12pt;font-family:Arial'> &#8211; это двухпозиционные коммутационные аппараты с самовозвратом, предназначенные для частых коммутаций токов, не превышающих токи перегрузки мощных источников питания, электродвигателей и других силовых установок и приводимые в действие приводом. Замыкание контактов этих аппаратов обычно осуществляется за счёт электромагнита, а размыкание &#8211; за счёт возвратной пружины при обесточивании электромагнита."
  var t2 ="<span class='head2'><big><b>Автоматические выключатели (автоматы)</big></span><span style='font-size:12pt;font-family:Arial'> &#8211; предназначены главным образом для защиты электрических сетей и установок от аварийных режимов работы (короткие замыкания, перегрузки, понижение напряжения) и защиты людей от поражения электрическим током. Они снабжены расцепителями, которые срабатывают при возникновении аварийных режимов работы установки, и механически воздействуют на удерживающий элемент ЭА. В отличие от контакторов автоматы рассчитаны на сравнительно редкие отключения."
   var t3 ="<span class='head2'><big><b>Пускатели</big></span><span style='font-size:12pt;font-family:Arial'> - это коммутационные аппараты для прямого пуска, остановки и защиты электродвигателей."
    var t4 ="<span class='head2'><big><b>Командоаппараты</big></span><span style='font-size:12pt;font-family:Arial'> &#8211; это кнопки управления, конечные выключатели и т. п." 
 

Text[0]=[":: Реле ::",t0]
Text[1]=[":: Контакторы ::",t1]
Text[2]=[":: Автоматические выключатели (автоматы) ::",t2]
Text[3]=[":: Пускатели ::",t3]
Text[4]=[":: Командоаппараты ::",t4]


Style[0]=["white","black","#8800ff","white","","","center","","","Arial","center","",2,2,"100%",,1,5,0,10,51,1,,"complex","gray"]

applyCssFilter()

