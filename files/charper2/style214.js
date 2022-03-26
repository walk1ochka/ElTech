/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 var t0 ="<span class='head2'>Мгновенное значение</span> синусоидального напряжения (тока, ЭДС) – это значение функции в рассматриваемый момент времени (рис. 2.2). В соответствии с ГОСТ 2-710-81 мгновенное значение напряжения (тока, ЭДС) изображают строчными буквами <em>u = u</em>(<em>t</em>) [<em>i = i</em>(<em>t</em>)<em>; e = e</em>(<em>t</em>)]:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>u</em>(<em>t</em>)<em> = u = U<sub>m</sub></em>sin(<em>&omega;t + <span class='index'>&Psi;</span><sub>u</sub></em>) или<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>u</em>(<em>t</em>)<em> = u = U<sub>m</sub></em>cos(<em>&omega;t + <span class='index'>&Psi;</span><sub>u</sub></em>)."
 var t1 ="<span class='head2'>Амплитуда</span> гармонического напряжения (тока, ЭДС) – это наибольшее значение синусоидальной функции, обозначаемое соответствующей прописной буквой с индексом <em>m</em>: <em>U<sub>m</sub></em>(<em>I<sub>m</sub>, E<sub>m</sub></em>)."
  var t2 ="<span class='head2'>Период</span> <em>Т</em> гармонического напряжения – это наименьший интервал времени <em>T</em>[<em>c</em>], по истечении которого мгновенные значения периодической функции повторяются (см. рис. 2.2)."
   var t3 ="<span class='head2'>Частота</span> (циклическая) &fnof;[Гц] гармонической функции – это величина, обратная периоду <em>Т</em> (определяет количество периодов в одну секунду), т. е. <br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&fnof; = 1/<em>T</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='head2'>(2.2)</span><br><br>Частота промышленных сетей в России 50 Гц, в США и Японии - 60 Гц; корабельных сетей - 250 Гц; сетей летательных аппаратов - 400 Гц; радиотехнических устройств - сотни кило- и мегагерц."
    var t4 ="<span class='head2'>Фаза</span> (мгновенный фазовый угол) гармонической функции в радианах (рад) или градусах – это аргумент синусоидальной функции, отсчитываемый от нулевого значения функции в положительном направлении; например, фаза напряжения (<em>&omega;t + <span class='index'><span class='index'>&Psi;</span></span><sub>u</sub></em>), тока (<em>&omega;t + <span class='index'><span class='index'>&Psi;</span></span><sub>i</sub></em>) и т. д."
     var t5 ="<span class='head2'>Начальная фаза</span> (начальный фазовый угол) – это значение фазы при <em>t</em> = 0; например, начальная фаза напряжения <em><span class='index'>&Psi;</span><sub>u</sub></em> , тока <em><span class='index'>&Psi;</span><sub>i</sub></em> и т. д.<br><br>Начальная фаза <em><span class='index'>&Psi;</span></em> - алгебраическая величина; её определяют:<br>а) <span class='head2'>на временных диаграммах</span> - по направлению отрезка, проведённого от ближайшего нулевого значения функции на возрастающем её участке до начала координат: если это направление совпадает с направлением времени <em>t</em>(<em>&omega;t</em>), то начальная фаза <em><span class='index'>&Psi;</span></em> берётся со знаком &quot;+&quot; (рис. 2.3, <em>а</em>), если направление этого отрезка обратное - со знаком &quot;-&quot; (рис. 2.3, <em>в</em>);<br>б) <span class='head2'>на векторных диаграммах</span> (ВД) - направлением отсчёта угла от оси абсцисс (<em>ох</em>): если направление <em><span class='index'>&Psi;</span></em> совпадает с направлением вращения векторов на ВД (с направлением <em>&omega;</em>, рис. 2.3, <em>б</em>), то начальная фаза <em><span class='index'>&Psi;</span></em> берётся со знаком &quot;+&quot;, если направление угла <em><span class='index'>&Psi;</span></em> совпадает с направлением движения часовой стрелки, то она берётся со знаком &quot;-&quot; (рис.2.3, <em>г</em>).<br><br>В общем случае гармоническую функцию будем записывать с положительной начальной фазой (+<span class='index'><span class='index'>&Psi;</span></span>) (см.(2.1))."
	  var t6 ="<span class='head2'>Угловая частота</span> <em>&omega;</em> [рад/с] - это скорость изменения фазы, т. е. <em>&omega; = d </em>(<em>&omega;t + <span class='index'>&Psi;</span></em>) / <em>dt</em>; она определяет число периодов в интервале времени, равным 2<em><span class='index'>&pi;</span></em>."
	    var t7 ="<span class='head2'>Соотношение</span> между периодом <em>T</em>, угловой <em>&omega;</em> и циклической &fnof; частотами:<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>&omega; = 2<span class='index'>&pi;</span>&fnof; = 2<span class='index'>&pi;</span> / T</em>.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='head2'>(2.3)</span>"


Text[0]=[":: Мгновенное значение ::",t0]
Text[1]=[":: Амплитуда ::",t1]
Text[2]=[":: Период ::",t2]
Text[3]=[":: Частота ::",t3]
Text[4]=[":: Фаза ::",t4]
Text[5]=[":: Начальная фаза ::",t5]
Text[6]=[":: Угловая частота ::",t6]
Text[7]=[":: Соотношение ::",t7]

Style[0]=["white","#0000000","#8800ff","white","","","center","","","Arial","center","",3,3,"80%",,1,20,0,10,51,1,100,"complex","gray"]

applyCssFilter()

