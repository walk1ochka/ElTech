0/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]

*/ 
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 
 var t0 ="<span class='head1'><span style='font-size:14pt;font-family:Arial;color:darkblue'><b>Структурная схема (Э1) <span style='font-size:12pt;font-family:Arial;color:black'>электрической цепи определяет основные функциональные части изделия, их назначение и связи."
  var t1 ="<span class='head1'><span style='font-size:14pt;font-family:Arial;color:darkblue'><b>Функциональные схемы (Э2)  <span style='font-size:12pt;font-family:Arial;color:black'>разъясняют определённые процессы, протекающие в отдельных функциональных цепях изделия или в изделии в целом."
   var t2 ="<span class='head1'><span style='font-size:14pt;font-family:Arial;color:darkblue'><b>На принципиальной (полной Э3)  <span style='font-size:12pt;font-family:Arial;color:black'>схеме должны быть изображены все электрические элементы и устройства, необходимые для осуществления и контроля заданных электрических процессов, все электрические связи между ними, а также разъемы, зажимы и т. п., которыми заканчиваются входные и выходные цепи. Элементы на схеме изображаются в виде условных графических обозначений, установленных в стандартах ЕСКД, и имеют буквенно-цифровые позиционные обозначения (с ростом порядковых номеров справа налево и сверху вниз). На схеме рекомендуется указывать номинальные значения параметров элементов и устройств, характеристики входных и выходных цепей (частоту, напряжение, ток, мощность и т. п.).<br>"
  "<span class='head1'><span style='font-size:12pt;font-family:Arial'><b><i>Примечание</i>. На структурной и принципиальной схемах изображают все составные функциональные части изделия в виде прямоугольников или условных графических обозначений и связи между ними. </body>"
var t3 ="<span class='head1'><span style='font-size:14pt;font-family:Arial;color:darkblue'><b>Монтажная схема (схема соединений Э4)  <span style='font-size:12pt;font-family:Arial;color:black'> электрической цепи составляется на основании принципиальной схемы с расположением всех элементов и устройств (с их внешними очертаниями), соответствующим действительному их размещению в изделии, помещении, на местности. Соединительные провода, жгуты и кабели показывают на схеме в виде отдельных линий с указанием марки, количества и сечения проводов."

Text[0]=[":: Структурная схема (Э1), ::",t0]
Text[1]=[":: Функциональные схемы (Э2), ::",t1]
Text[2]=[":: Принципиальная (полная Э3), ::",t2]
Text[3]=[":: Монтажная схема (схема соединений Э4). ::",t3]

Style[0]=
["white","#ffdeed","#8800ff","white","","","center","","","Verdana","center","",4,4,"95%",5,5,25,60,180,51,5,100,"complex","gray"]

applyCssFilter()
