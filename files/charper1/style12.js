/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 
 var t0 ="<span class='head1'><span style='font-size:14pt;font-family:Arial;color:darkblue'><b>�������� &#8211;</b> <span style='font-size:12pt;font-family:Arial;color:black'>��� ���������������� ������� ������������� ����, ��������������� ��� ������������� ��� �������������� ������������� <i>R</i>."
  var t1 ="<span class='head1'><span style='font-size:14pt;font-family:Arial;color:darkblue'><b>����������� ������� &#8211; </b><span style='font-size:12pt;font-family:Arial;color:black'>��� ���������������� ������� ����, ��������������� ��� ������������� ��� ������������� <i>L</i>."
   var t2 ="<span class='head1'><span style='font-size:14pt;font-family:Arial;color:darkblue'><b>����������� &#8211; </b><span style='font-size:12pt;font-family:Arial;color:black'> ��� ���������������� ������� ����, ��������������� ��� ������������� ��� <i>�������</i> �</i>."

Text[0]=[":: �������� ::",t0]
Text[1]=[":: ����������� ������� ::",t1]
Text[2]=[":: ����������� ::",t2]

Style[0]=

["white","#ffdeed","#8800ff","white","","","center","","","Verdana","center","",3,3,"80%",,1,20,0,10,51,1,100,"complex","gray"]

applyCssFilter()

