javascript:var count=0;function htmlreplace(a,b,element){if(!element)element=document.body;var nodes=element.childNodes;for(var n=0;n<nodes.length;n++){   if(nodes[n].type&&nodes[n].type.toLowerCase()=='textarea'){      var r=new RegExp(a,'gim');      if(nodes[n].value.match(r)){        count++;      }      nodes[n].value=nodes[n].value.replace(r,b)    }    else if(nodes[n].nodeValue && nodes[n].nodeValue.length > 0){      var r=new RegExp(a,'gim');      if(nodes[n].nodeValue.match(r)){        count++;      }      nodes[n].nodeValue=nodes[n].nodeValue.replace(r,b)    }    else{      htmlreplace(a,b,nodes[n])    }  }}htmlreplace(prompt('find'),prompt('replace'));alert('replaced '+count+' words.');
