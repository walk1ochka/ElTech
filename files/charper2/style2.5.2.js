/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 
 var t0 ="<span class='head2'>����������� ����� (�1)</span> ������������� ���� ���������� �������� �������������� ����� �������, �� ���������� � �����"
  var t1 ="<span class='head2'>�������������� ����� (�2)</span> ���������� ����������� ��������, ����������� � ��������� �������������� ����� ������� ��� � ������� � �����"
   var t2 ="<span class='head2'>�� �������������� (������ �3)</span> ����� ������ ���� ���������� ��� ������������� �������� � ����������, ����������� ��� ������������� � �������� �������� ������������� ���������, ��� ������������� ����� ����� ����, � ����� �������, ������ � �. �., �������� ������������� ������� � �������� ����. �������� �� ����� ������������ � ���� �������� ����������� �����������, ������������� � ���������� ����, � ����� ��������-�������� ����������� ����������� (� ������ ���������� ������� ������ ������ � ������ ����). �� ����� ������������� ��������� ����������� �������� ���������� ��������� � ���������, �������������� ������� � �������� ����� (�������, ����������, ���, �������� � �. �.).<br>" +
  "<span class='head2'>����������.</span> ������������� � �������������� ������ ���������� ��� ��������� �������������� ����� ������� � ���� ��������������� ��� �������� ����������� ����������� � ������ ����� ���� </body>"

Text[0]=[":: ����������? ::",t0]
Text[1]=[":: �������������� ����� (�2) ::",t1]
Text[2]=[":: �������������� (������ �3) ::",t2]

Style[0]=["white","black","black","#F8F4F1","","","center","","","Arial","center","",2,2,"80%",,1,20,0,10,51,1,100,"complex","gray"]

applyCssFilter()

