/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 
 var t0 ="<span class='head1'><span style='font-size:16pt;font-family:Arial;color:darkblue'>�������� ������� &#8211;<span style='font-size:14pt;font-family:Arial;color:black'> �������� ������� ������������� ����, � ������� ������������� ��������� ���� ������� � �������������. ��� ���������� ������������� �������, �������������� � ��������� �������, ��������� � ��. "
  var t1 ="<span class='head1'><span style='font-size:16pt;font-family:Arial;color:darkblue'>�������� ������� &#8211; <span style='font-size:14pt;font-family:Arial;color:black'>��� ��������� ��������, � ������� ������������� ������������� ������� � ������ ����: � �������� (�������������� ��������), ������������ (������������� ���������), �������� (�������������� �����), ���������� (�������������� �����) � ��."
var t2 ="<span class='head1'><span style='font-size:16pt;font-family:Arial;color:darkblue'>��������������� �������� ������������� ���� &#8211;<span style='font-size:14pt;font-family:Arial;color:black'> ��� �����������, ��������������, ����������� ���������� ����, ������������� �������, ������� � ��. "

Text[0]=[":: �������� ������� ::",t0]
Text[1]=[":: �������� ������� ::",t1]
Text[2]=[":: ��������������� �������� ������������� ���� ::",t2]


Style[0]=["white","#ffdeed","#8800ff","white","","","center","","","Verdana","center","",5,5,"95%",4,5,45,80,160,51,4,4,"complex","gray"]

applyCssFilter()

