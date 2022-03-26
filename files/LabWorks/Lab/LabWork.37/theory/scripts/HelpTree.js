//=======================================================================//
//                                                                       //
//  Macrobject Software Code Library                                     //
//  Copyright (c) 2004-2008 Macrobject Software, All Rights Reserved     //
//  http://www.macrobject.com                                            //
//                                                                       //
//  Warning!!!                                                           //
//      The library can only be used with web help system                //
//      created by Word-2-Web.                                           //
//                                                                       //
//=======================================================================//

function moCssTree(ps, ts, tl) {

  this.ps = ps;
  this.ts = ts;
  this.tl = tl;

  this.showTooltip  = false;
  this.autoCollapse = true;
  this.autoCollapseOIC = false;
  
  this.clsCollapsed = "Collapsed";
  this.clsExpanded  = "Expanded";
  this.clsTopic     = "Topic";
  this.clsCurrent   = "Current";
  this.emptyImg     = "images/~.gif";

  this.curNode   = null;
  this.panel     = null;
  this.lastIndex = -1;
  this.rootPath  = null;
  this.nodes     = null;

  this.getObject = function(id){
   return document.getElementById(id);
  }

  this.expand = function(node) {
    this.createChildren(node.mo_id); 
    if(node.className == this.clsCollapsed) node.className = this.clsExpanded;
    this.doCollapseOthers(node);
  }
  
  this.toggleNode = function(node, noAutoCollapse) {
    this.createChildren(node.mo_id); 
    node.className = node.className == this.clsCollapsed ? this.clsExpanded : this.clsCollapsed;
    if (!noAutoCollapse) this.doCollapseOthers(node);
  }
  
  this.doCollapseOthers = function(node) {
    var p = node.parentNode;
    if (!(this.autoCollapse || this.autoCollapseOIC) || p.tagName != 'UL') return;
    for (var i=0; i<p.childNodes.length; i++) {
      var n = p.childNodes[i];
      if (n != node && n.className == this.clsExpanded) n.className = this.clsCollapsed;
    }
    this.doCollapseOthers(p.parentNode);
  }

  this.focus = function(node) {
    if ( this.curNode ) this.curNode.className = "";
    node.className = this.clsCurrent;
    this.curNode = node;
  }
  
  this.nodeClick = function(e, node, canCollapse) {
    if (node) {
      if (canCollapse) this.toggleNode(node, !this.autoCollapseOIC);
      else this.expand(node);
    }
      
    var o = null;
    if (window.event) {
      e.cancelBubble = true;
      o = e.srcElement;
    }
    else if (e.stopPropagation) {
      e.stopPropagation();
      o = e.target;
      while(o.nodeType != o.ELEMENT_NODE) o = o.parentNode;
    }
  }

  this.stepPage = function(step) {
    var index = this.lastIndex + step;
    if(index < 0 || index > this.ps.length-1) return;
    window.location = this.ps[index];
  }    
  
  this.findPageIndex = function(name) {
    for(var i=0; i<this.ps.length; i++) {
      if (name == this.ps[i]) return i;
    }
    return -1;
  }
  
  this.locate = function(index) {
    if (!index.toString().match(/^\d+$/)) 
      index = this.findPageIndex(index);

    if (!this.nodes[index]) {
      var parent = this.findParentIndex(index);
      this.locate(parent);
      this.createChildren(parent);
    }

    this.lastIndex = index;

    var node = this.nodes[index].getElementsByTagName('a')[0];
    this.focus(node);

    while(node != this.panel) { 
      node = node.parentNode;
      if (node.tagName.toLowerCase() == 'li') this.expand(node);
    }
  }

  this.createObject = function(parent, tagName) {
    var o = document.createElement(tagName);
    parent.appendChild(o);
    return o;
  }

  this.createTree = function(panelId, rootPath) {
    this.rootPath = rootPath;
    for (var i=0; i<ps.length; i++) ps[i] = rootPath + ps[i];
    this.nodes = [];
    this.panel = this.getObject(panelId);
    this.createChildren(-1);
  }
  
  this.createChildren = function(index) {
    index = parseInt(index);
    if (this.nodes[index+1]) return;
    
    var root;
    
    var childLevel;
    if (index < 0) {
      root = this.panel;
      childLevel = 1;
    }
    else {
      root = this.nodes[index];
      childLevel = tl[index]+1;
    }

    root = this.createObject(root, 'UL');
      
    var i = index;
    while(tl[i+1] >= childLevel) {
      i++;
      var nextLevel = i+1 < tl.length ? tl[i+1] : -1;
      if(tl[i] == childLevel) {
        var li = this.createObject(root, 'LI');
        li.mo_id = i;
        if (this.showTooltip) li.title = ts[i];
        this.nodes[i] = li;

        var img = this.createObject(li, 'IMG');
        img.className = 'Icon';
        img.src       = this.rootPath + 'images/o.gif';
        var link  = this.createObject(li, 'A');
        link.href     = ps[i];
        link.className= 'moItem';
        link.mo_id    = i;
        link.innerHTML= ts[i];

        var onclick = function(node, canCollapse) {
          var e = "ct.nodeClick(event, " + node + ", " + canCollapse + ")";
          return document.all ? function(){eval(e);} : e ;
        }
        
        if(childLevel < nextLevel) {
          li.className = this.clsCollapsed;
          li.setAttribute('onclick', onclick('this', 'false'));
          
          img.setAttribute('onclick', onclick('this.parentNode', 'true'));
          link.setAttribute('onclick', onclick('this.parentNode', 'false'));
          if(window.opera) {
            img.onclick = onclick('this.parentNode', 'true');
            link.onclick = onclick('this.parentNode', 'false');
          }
        }
        else {
          li.className = this.clsTopic;
          li.setAttribute('onclick', onclick('null', 'false'));
          
          img.setAttribute('onclick', onclick('null', 'false'));
          link.setAttribute('onclick', onclick('null', 'false'));
          if(window.opera) {
            img.onclick = onclick('null', 'false');
            link.onclick = onclick('null', 'false');
          }
        }
      }
    }
  }
  
  this.findParentIndex = function(index) {
    var level = tl[index];
    while(tl[index] >= level && index > 0) index--;
    return index;
  }
 
}

var ct = new moCssTree(ps, ts, tl);
