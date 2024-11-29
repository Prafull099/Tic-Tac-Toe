let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector("#resetbutton");
let newButton=document.querySelector("#newbutton");
let message=document.querySelector(".message");
let msg=document.querySelector("#msg");
let turn0 =true;//playerA,palyer B
let count=0;
//let arr2=["apple"];
const winPatterns=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[6,7,8],[3,4,5]
];
boxes.forEach((box)=> {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turn0)
        {
        box.innerHTML="0";
        turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        } // can't access the box
        checkWinner();
    });
});
 const resetGame=() =>
 {
     turn0 = true;
     count=0;
     enableBoxes();
     msgContainer.classList.add("hide")
 };
 const showWinner=(winner)=>{
     msg.innerText=`Congratualtions,Winner is${winner}`;
     message.classList.remove("hide");
  disableBoxes();
};


    const checkWinner=() =>{
        for ( let  pattern of winPatterns)
        {
        //     console.log(pattern[0],pattern[1],pattern[2]);
        //     console.log(
        //         boxes[pattern[0]].innerText,
        //         boxes[pattern[1]].innerText,
        //         boxes[pattern[2]].innerText
        // );
            let pos1val=boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText;
            let pos3val=boxes[pattern[2]].innerText;
            if(pos1val !="" && pos2val!="" && pos3val!="")
            {
                if(pos1val== pos2val && pos2val== pos3val)
                {
                    console.log("winner",pos1val);
                    showWinner(pos1val);
                }
            }
    }
};
 const disableBoxes=() =>{
     for(let box of boxes)
     {
         box.disbled=false;
         box.innerText="";
     }
 };
 const enableBoxes=()=>{
     for(let box of boxes)
     {
        box.disabled=false;
         box.innerText="";
     }
 };
 const gameDraw=()=>
 {
     msg.innerText=`game was  a draw`;
     msgContainer.classList.remove("hide");
     disableBoxes();
 };
 newButton.addEventListener("click",resetGame);
 resetButton.addEventListener("click",resetGame);