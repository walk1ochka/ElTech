/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 var t0 ="<span class='head2'>���������� ��������</span> ��������������� ���������� (����, ���) � ��� �������� ������� � ��������������� ������ ������� (���. 2.2). � ������������ � ���� 2-710-81 ���������� �������� ���������� (����, ���) ���������� ��������� ������� <em>u = u</em>(<em>t</em>) [<em>i = i</em>(<em>t</em>)<em>; e = e</em>(<em>t</em>)]:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>u</em>(<em>t</em>)<em> = u = U<sub>m</sub></em>sin(<em>&omega;t + <span class='index'>&Psi;</span><sub>u</sub></em>) ���<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>u</em>(<em>t</em>)<em> = u = U<sub>m</sub></em>cos(<em>&omega;t + <span class='index'>&Psi;</span><sub>u</sub></em>)."
 var t1 ="<span class='head2'>���������</span> �������������� ���������� (����, ���) � ��� ���������� �������� �������������� �������, ������������ ��������������� ��������� ������ � �������� <em>m</em>: <em>U<sub>m</sub></em>(<em>I<sub>m</sub>, E<sub>m</sub></em>)."
  var t2 ="<span class='head2'>������</span> <em>�</em> �������������� ���������� � ��� ���������� �������� ������� <em>T</em>[<em>c</em>], �� ��������� �������� ���������� �������� ������������� ������� ����������� (��. ���. 2.2)."
   var t3 ="<span class='head2'>�������</span> (�����������) &fnof;[��] ������������� ������� � ��� ��������, �������� ������� <em>�</em> (���������� ���������� �������� � ���� �������), �. �. <br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&fnof; = 1/<em>T</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='head2'>(2.2)</span><br><br>������� ������������ ����� � ������ 50 ��, � ��� � ������ - 60 ��; ����������� ����� - 250 ��; ����� ����������� ��������� - 400 ��; ���������������� ��������� - ����� ����- � ��������."
    var t4 ="<span class='head2'>����</span> (���������� ������� ����) ������������� ������� � �������� (���) ��� �������� � ��� �������� �������������� �������, ������������� �� �������� �������� ������� � ������������� �����������; ��������, ���� ���������� (<em>&omega;t + <span class='index'><span class='index'>&Psi;</span></span><sub>u</sub></em>), ���� (<em>&omega;t + <span class='index'><span class='index'>&Psi;</span></span><sub>i</sub></em>) � �. �."
     var t5 ="<span class='head2'>��������� ����</span> (��������� ������� ����) � ��� �������� ���� ��� <em>t</em> = 0; ��������, ��������� ���� ���������� <em><span class='index'>&Psi;</span><sub>u</sub></em> , ���� <em><span class='index'>&Psi;</span><sub>i</sub></em> � �. �.<br><br>��������� ���� <em><span class='index'>&Psi;</span></em> - �������������� ��������; � ����������:<br>�) <span class='head2'>�� ��������� ����������</span> - �� ����������� �������, ����������� �� ���������� �������� �������� ������� �� ������������ � ������� �� ������ ���������: ���� ��� ����������� ��������� � ������������ ������� <em>t</em>(<em>&omega;t</em>), �� ��������� ���� <em><span class='index'>&Psi;</span></em> ������ �� ������ &quot;+&quot; (���. 2.3, <em>�</em>), ���� ����������� ����� ������� �������� - �� ������ &quot;-&quot; (���. 2.3, <em>�</em>);<br>�) <span class='head2'>�� ��������� ����������</span> (��) - ������������ ������� ���� �� ��� ������� (<em>��</em>): ���� ����������� <em><span class='index'>&Psi;</span></em> ��������� � ������������ �������� �������� �� �� (� ������������ <em>&omega;</em>, ���. 2.3, <em>�</em>), �� ��������� ���� <em><span class='index'>&Psi;</span></em> ������ �� ������ &quot;+&quot;, ���� ����������� ���� <em><span class='index'>&Psi;</span></em> ��������� � ������������ �������� ������� �������, �� ��� ������ �� ������ &quot;-&quot; (���.2.3, <em>�</em>).<br><br>� ����� ������ ������������� ������� ����� ���������� � ������������� ��������� ����� (+<span class='index'><span class='index'>&Psi;</span></span>) (��.(2.1))."
	  var t6 ="<span class='head2'>������� �������</span> <em>&omega;</em> [���/�] - ��� �������� ��������� ����, �. �. <em>&omega; = d </em>(<em>&omega;t + <span class='index'>&Psi;</span></em>) / <em>dt</em>; ��� ���������� ����� �������� � ��������� �������, ������ 2<em><span class='index'>&pi;</span></em>."
	    var t7 ="<span class='head2'>�����������</span> ����� �������� <em>T</em>, ������� <em>&omega;</em> � ����������� &fnof; ���������:<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>&omega; = 2<span class='index'>&pi;</span>&fnof; = 2<span class='index'>&pi;</span> / T</em>.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='head2'>(2.3)</span>"


Text[0]=[":: ���������� �������� ::",t0]
Text[1]=[":: ��������� ::",t1]
Text[2]=[":: ������ ::",t2]
Text[3]=[":: ������� ::",t3]
Text[4]=[":: ���� ::",t4]
Text[5]=[":: ��������� ���� ::",t5]
Text[6]=[":: ������� ������� ::",t6]
Text[7]=[":: ����������� ::",t7]

Style[0]=["white","#0000000","#8800ff","white","","","center","","","Arial","center","",3,3,"80%",,1,20,0,10,51,1,100,"complex","gray"]

applyCssFilter()

