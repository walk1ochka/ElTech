/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 
 var t0 ="<span class='head1'><span style='font-size:14pt;font-family:Arial'><b>��� <i>I </i> = 1 A ����� ������ <i>Q</i> = 1 �� = 6,24<span class='symbol'>�</span>10<sup><b>18</sup> </b>����������, ����������� ����� ���������� ������� ���������� �� ����� <i>t</i> = 1 �. "
  var t1 ="<span class='head1'><span style='font-size:14pt;font-family:Arial'><b> 1 ����� &#8211; ��� ����� ������������� ���, �������, ������� �� ���� ������������� ������������ ����������� �����������, ������������� �� ���������� 1 � ���� �� �����, �������� �� ������ ������� ������ 1 � ���� �������������� 2<span class='symbol'>�</span>10<sup><span style='font-size:11pt;font-family:Arial'><b>&#8211;7</b></sup> </span> �."
   var t2 ="<span class='head1'><span style='font-size:14pt;font-family:Arial'><b>���������� <i>U</i> = 1 � ����� ������� <i>W</i> = 1 ��, ����������� �� ����������� ������ <i>Q </i> = 1 �� �� ����� ����� ���������� � ������."
    var t3 ="<span class='head1'><span style='font-size:14pt;font-family:Arial;color:darkblue'><b>1 ����� &#8211;<span style='font-size:14pt;font-family:Arial;color:black'> ��� ���������� (�������� �����������) ����� ������ ����� �������  ���� (����������), ��� ������� ����������� ������ � 1 �� �� ����� ����� � ������ ������� ���������� ������ � 1 ��. "
   var t4 ="<span class='head1'><span style='font-size:14pt;font-family:Arial'><b>��������������� ���� <i>E</i> = 1 � �������� ����� ������ <i>W</i> = 1 ��, ������������� ��������� ����� �� ����������� ������ <i>Q</i> = 1 �� �� ����� ����� ���� (����������) � ������. "
var t5 = "<span class='head1'><span style='font-size:14pt;font-family:Arial'><b>������������ ������������� ���� <img  src='images/image030.gif' width=14 height=18 hspace='0' vspace='0' border='0'> = 1 �/� �������� ����� ���� � 1 �, ����������� �� ������� ���� �� ������������� �������� ����� � 1 ��."

Text[0]=[":: <b>��� I = 1 � ::",t0]
Text[1]=[":: <b>����� ::",t1]
Text[2]=[":: <b>���������� U = 1 � ::",t2]
Text[3]=[":: <b>����� ::",t3]
Text[4]=[":: <b>��������������� ���� (���) � = 1� ::",t4]
Text[5]=[":: <b>������������ ::",t5]

Style[0]=["white","#ffdeed","#8800ff","white","","","center","","","Verdana","center","",3,3,"90%",,1,20,0,10,51,1,100,"complex","gray"]

applyCssFilter()

  

