/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/

var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 var t0 ="<span class='head2'><big>����</big></span><span style='font-size:12pt;font-family:Arial'> - ��� ����������� ��������, ������������� ����, ��� � ������� �� ��������� 5 � � ����� ������� �� ���������� �������� �����. ��� ����������� � ����������� ����������, ������ � ������������ ������������������ ���������. �� ��������� ������������ �����������, ����������� � ��������� ��� ���������� ���������, ����������� ����: <br> &nbsp;&nbsp;- <strong>�������������</strong>, ����������� �� �������� ������� �������������� ���� (��� ����������) � ����������� ����;<br>&nbsp;&nbsp;- <strong>��������</strong>, ����������� �� ����������� (��� ���������� �����); <br> &nbsp;&nbsp;- <strong>������������</strong>, ����������� �� �������� ��� �����������;<br>&nbsp;&nbsp;- <strong>���������� � ������������</strong>, ����������� �� ���� �������������� ����� ��� ����� � ��."
 var t1 ="<span class='head2'><big><b>����������</big></span><span style='font-size:12pt;font-family:Arial'> &#8211; ��� ��������������� �������������� �������� � �������������, ��������������� ��� ������ ���������� �����, �� ����������� ���� ���������� ������ ���������� �������, ����������������� � ������ ������� ��������� � ���������� � �������� ��������. ��������� ��������� ���� ��������� ������ �������������� �� ���� ��������������, � ���������� &#8211; �� ���� ���������� ������� ��� ������������� ��������������."
  var t2 ="<span class='head2'><big><b>�������������� ����������� (��������)</big></span><span style='font-size:12pt;font-family:Arial'> &#8211; ������������� ������� ������� ��� ������ ������������� ����� � ��������� �� ��������� ������� ������ (�������� ���������, ����������, ��������� ����������) � ������ ����� �� ��������� ������������� �����. ��� �������� �������������, ������� ����������� ��� ������������� ��������� ������� ������ ���������, � ����������� ������������ �� ������������ ������� ��. � ������� �� ����������� �������� ���������� �� ������������ ������ ����������."
   var t3 ="<span class='head2'><big><b>���������</big></span><span style='font-size:12pt;font-family:Arial'> - ��� �������������� �������� ��� ������� �����, ��������� � ������ �����������������."
    var t4 ="<span class='head2'><big><b>���������������</big></span><span style='font-size:12pt;font-family:Arial'> &#8211; ��� ������ ����������, �������� ����������� � �. �." 
 

Text[0]=[":: ���� ::",t0]
Text[1]=[":: ���������� ::",t1]
Text[2]=[":: �������������� ����������� (��������) ::",t2]
Text[3]=[":: ��������� ::",t3]
Text[4]=[":: ��������������� ::",t4]


Style[0]=["white","black","#8800ff","white","","","center","","","Arial","center","",2,2,"100%",,1,5,0,10,51,1,,"complex","gray"]

applyCssFilter()

