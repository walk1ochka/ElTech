0/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]

*/ 
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 
 var t0 ="<span class='head1'><span style='font-size:14pt;font-family:Arial;color:darkblue'><b>����������� ����� (�1) <span style='font-size:12pt;font-family:Arial;color:black'>������������� ���� ���������� �������� �������������� ����� �������, �� ���������� � �����."
  var t1 ="<span class='head1'><span style='font-size:14pt;font-family:Arial;color:darkblue'><b>�������������� ����� (�2)  <span style='font-size:12pt;font-family:Arial;color:black'>���������� ����������� ��������, ����������� � ��������� �������������� ����� ������� ��� � ������� � �����."
   var t2 ="<span class='head1'><span style='font-size:14pt;font-family:Arial;color:darkblue'><b>�� �������������� (������ �3)  <span style='font-size:12pt;font-family:Arial;color:black'>����� ������ ���� ���������� ��� ������������� �������� � ����������, ����������� ��� ������������� � �������� �������� ������������� ���������, ��� ������������� ����� ����� ����, � ����� �������, ������ � �. �., �������� ������������� ������� � �������� ����. �������� �� ����� ������������ � ���� �������� ����������� �����������, ������������� � ���������� ����, � ����� ��������-�������� ����������� ����������� (� ������ ���������� ������� ������ ������ � ������ ����). �� ����� ������������� ��������� ����������� �������� ���������� ��������� � ���������, �������������� ������� � �������� ����� (�������, ����������, ���, �������� � �. �.).<br>"
  "<span class='head1'><span style='font-size:12pt;font-family:Arial'><b><i>����������</i>. �� ����������� � �������������� ������ ���������� ��� ��������� �������������� ����� ������� � ���� ��������������� ��� �������� ����������� ����������� � ����� ����� ����. </body>"
var t3 ="<span class='head1'><span style='font-size:14pt;font-family:Arial;color:darkblue'><b>��������� ����� (����� ���������� �4)  <span style='font-size:12pt;font-family:Arial;color:black'> ������������� ���� ������������ �� ��������� �������������� ����� � ������������� ���� ��������� � ��������� (� �� �������� �����������), ��������������� ��������������� �� ���������� � �������, ���������, �� ���������. �������������� �������, ����� � ������ ���������� �� ����� � ���� ��������� ����� � ��������� �����, ���������� � ������� ��������."

Text[0]=[":: ����������� ����� (�1), ::",t0]
Text[1]=[":: �������������� ����� (�2), ::",t1]
Text[2]=[":: �������������� (������ �3), ::",t2]
Text[3]=[":: ��������� ����� (����� ���������� �4). ::",t3]

Style[0]=
["white","#ffdeed","#8800ff","white","","","center","","","Verdana","center","",4,4,"95%",5,5,25,60,180,51,5,100,"complex","gray"]

applyCssFilter()
