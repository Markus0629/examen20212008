function passaSeguentMGB(objRebut){
    let idObjPregAct = objRebut.parentElement.id; 
    //let objPregAct = document.getElementById(idObjPregAct);
    let colArticles = document.getElementsByTagName("article");
    let idObjPregSeg;
      for (let i = 0; i < colArticles.length; i++) {
      if(colArticles[i].id == idObjPregAct){
        idObjPregSeg = colArticles[i+1].id;
        break;
      };
    }
    amagaElementMGB(idObjPregAct);
    mostraElementMGB(idObjPregSeg);

  
  }
  function mostraElementMGB(idRebut){
    document.getElementById(idRebut).classList.add("elementVisibleMGB");
    document.getElementById(idRebut).classList.remove("elementOcultMGB");
  }
  
  function amagaElementMGB(idRebut){
    document.getElementById(idRebut).classList.remove("elementVisibleMGB");
    document.getElementById(idRebut).classList.add("elementOcultMGB");
  }