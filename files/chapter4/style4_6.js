/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0

var t0 ="<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='page5_6/111_clip_image002_0003.gif' width='121' height='27' align='absmiddle'>,<img src='page5_6/111_clip_image002_0002.gif' width='102' height='27' align='absmiddle'> <span class='text'>и</span> <img src='page5_6/111_clip_image002_0001.gif' width='109' height='27' align='absmiddle'>,<br> где <img src='page5_6/111_clip_image002_0004.gif' width='85' height='25' align='absmiddle'><span class='text'>и</span><img src='page5_6/111_clip_image002_0005.gif' width='40' height='24' align='absmiddle'> -<span class='text'> максимальные значения напряжения, тока и ЭДС; <em class='index'>U </em>, <em class='index'>I </em>и <em class='index'>Е </em> - действующие напряжение, ток и ЭДС. </span></p><p> <span class='text'>Напомним, что для синусоидальной функции</span> <img src='page5_6/111_clip_image002_0007.gif' width='107' height='26' align='absmiddle'> </p>"
var t1 ="<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='page5_6_2/111_clip_image002_0015.gif' width='105' height='25' align='absmiddle'>, <img src='page5_6_2/111_clip_image002_0014.gif' width='100' height='27' align='absmiddle'> <span class='text'>и </span><img src='page5_6_2/111_clip_image002_0016.gif' width='109' height='27' align='absmiddle'>,<br> где <img src='page5_6_2/111_clip_image002_0019.gif' width='68' height='27' align='absmiddle'>, <img src='page5_6_2/111_clip_image002_0020.gif' width='56' height='27' align='absmiddle'> и <img src='page5_6_2/111_clip_image002_0021.gif' width='61' height='27' align='absmiddle'> <span class='text'>- средние значения напряжения, тока и ЭДС.</span></p><p> Известно, что для гармонической функции <img src='page5_6_2/111_clip_image002_0022.gif' width='56' height='21' align='absmiddle'> </p>"
var t2 ="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='page5_6_3/222_clip_image002.gif' width='112' height='27' align='absmiddle'>,<img src='page5_6_3/222_clip_image002_0000.gif' width='99' height='27' align='absmiddle'> <span class='text'>и</span> <img src='page5_6_3/222_clip_image002_0001.gif' width='109' height='27' align='absmiddle'>,<br>где <span class='indexbig'><em>U</em></span><em><span class='indexsmaldigit'>1</span> <span class='indexbig'>I</span></em><span class='indexsmaldigit'>1</span> и <em class='indexbig'>E</em><span class='indexsmaldigit'>1</span> - действующие значения основной гармоники соответствующих величин. Для гармонической функции<img src='page5_6_3/222_clip_image002_0003.gif' width='45' height='20' align='absmiddle'>"

var t3 ="<p>Коэффициент гармоник равен отношению действующего значения всех высших гармоник к действующему значению основной гармоники соответствующей функции: <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><img src='page5_6_4/333_clip_image002.gif' width='275' height='73' align='absmiddle'>  <img src='page5_6_4/333_clip_image002_0001.gif' width='259' height='75' align='absmiddle'> <span class='text'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;и </span><img src='page5_6_4/333_clip_image002_0002.gif width='257' height='78' align='middle'><span class='text'> <br> Для гармонической функции<img src='page5_6_4/333_clip_image002_0003.gif' width='38' height='21' align='absmiddle'> </span>"



var t4 ="<class='text'><p>Коэффициент искажения характеризует отличие формы тока от формы напряжения<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='page5_6_5/544_clip_image002_0000.gif' width='228' height='48' align='absmiddle'><br>где <em>Т </em>- мощность искажений; <em>S </em>- полная мощность периодического несинусоидального тока.  </p>"
   

Text[0]=[":: 5.6.1. Коэффициент амплитуды ::",t0]
Text[1]=[":: 5.6.2. Коэффициент формы ::",t1]
Text[2]=[":: 5.6.3. Коэффициент несинусоидальности ::",t2]
Text[3]=[":: 5.6.4. Коэффициент гармоник ::",t3]
Text[4]=[":: 4.6.5. Коэффициент искажения ::",t4]


Style[0]=["white","black","black","#F8F4F1","","","center","","","Verdana","center","",2,2,"80%",,1,20,0,10,51,1,100,"complex","gray"]

applyCssFilter()

