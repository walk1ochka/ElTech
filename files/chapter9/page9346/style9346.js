/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 
var t0 ="<span class='head2'> <img  src='page9346/images/image98a.jpg'  hspace='0' vspace='0' border='0'>"
var t1 ="<span class='head2'> <img  src='page9346/images/image98b.jpg'  hspace='0' vspace='0' border='0'>"
var t2 ="<span class='head2'> <img  src='page9346/images/image98v.jpg'  hspace='0' vspace='0' border='0'>"
var t3 ="<span class='head2'> <img  src='page9346/images/image98b.jpg'  hspace='0' vspace='0' border='0'><span class='head2'><img  src='page9346/images/image98v.jpg'  hspace='0' vspace='0' border='0'>"
var t4 ="<span class='head2'> <img  src='page9346/images/image98b[lines].jpg'  hspace='0' vspace='0' border='0'>"
var t5 ="<span class='head2'> <img  src='page9346/images/image98b[line 2].jpg'  hspace='0' vspace='0' border='0'>"

Text[0]=[":: рис. 9.8, a ::",t0]
Text[1]=[":: рис. 9.8, б ::",t1]
Text[2]=[":: рис. 9.8, в ::",t2]
Text[3]=[":: рис. 9.8, б,в ::",t3]
Text[4]=[":: рис. 9.8, б (A-B) ::",t4]
Text[5]=[":: рис. 9.8, б кривая 2 ::",t5]


Style[0]=["white","black","black","white","","","center","center","","Verdana","center","",2,2,"50%",,1,20,0,10,51,1,100,"complex","gray"]

applyCssFilter()

