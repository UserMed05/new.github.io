
var option1Cell ;
var destinationCell;
var option2Cell
var dateCell;
function getVal(){
    var mySelect1V=document.getElementById("mySelect1").value;
    var destinationV=document.getElementById("destination").value;
    var dateV=document.getElementById("date").value;
    var mySelect2V=document.getElementById("mySelect2").value;

 var formData = {
        mySelect1: mySelect1V,
        destination: destinationV,
        date: dateV,
        mySelect2: mySelect2V
    };

    // Convert the object to a JSON string
    var formDataJSON = JSON.stringify(formData);

    // Save the JSON string in localStorage
    localStorage.setItem("formData", formDataJSON);
    

    // You can optionally display a confirmation message
    // document.getElementById("show").textContent = "Form data saved!";
  

    var formDataJSONS = localStorage.getItem("formData");
    var formDatas = JSON.parse(formDataJSONS);
    if (formDatas) {
        var tableBody = document.getElementById("tableBody");

        // Create a table row
        var row = document.createElement("tr");

        // Create table data cells and populate with data
         option1Cell = document.createElement("td");
        option1Cell.textContent = formDatas.mySelect1;
         destinationCell = document.createElement("td");
        destinationCell.textContent = formDatas.destination;
         dateCell = document.createElement("td");
        dateCell.textContent = formDatas.date;
         option2Cell = document.createElement("td");
        option2Cell.textContent = formDatas.mySelect2;

        // Append the cells to the row
        row.appendChild(option1Cell);
        row.appendChild(destinationCell);
        row.appendChild(dateCell);
        row.appendChild(option2Cell);

        // Append the row to the table body
        tableBody.appendChild(row);
        //count table row
       
    }
}

var total;
var total14;
var total40;
var total42;
var total58;
var total6;
function calcule(){
    var rowCount = tableBody.rows.length;
    var A58GNF=0;
    var A58SC=0;
    var A58G1=0;
    var A58G2=0;
   //
   var A40GNF=0;
    var A40SC=0;
    var A40G1=0;
    var A40G2=0;
    //
    var A14GNF=0;
    var A14SC=0;
    var A14G1=0;
    var A14G2=0;
    //
    var A42GNF=0;
    var A42SC=0;
    var A42G1=0;
    var A42G2=0;
    //
    var D6GNF=0;
    var D6SC=0;
    var D6G1=0;
    var D6G2=0;
    
    for( var i=0;i<rowCount;i++){
        var row =tableBody.rows[i];
        var option1Cell = row.cells[0];
        var option2Cell = row.cells[3];
       //
        if (option1Cell.textContent === "A58" 
        && option2Cell.textContent==="GNF" ) {
            A58GNF++;
        }
        else if (option1Cell.textContent === "A58" 
        && option2Cell.textContent==="SC" ) {
            A58SC++;
        }
        else if (option1Cell.textContent === "A58" 
        && option2Cell.textContent==="G1" ) {
            A58G1++; 
        }
        else if (option1Cell.textContent === "A58" 
        && option2Cell.textContent==="G2" ) {
            A58G2++;
        }
      
        
        
       else if (option1Cell.textContent === "A40" 
        && option2Cell.textContent==="GNF" ) {
            A40GNF++;
        }
        else if (option1Cell.textContent === "A40" 
        && option2Cell.textContent==="SC" ) {
            A40SC++;
        }
        else if (option1Cell.textContent === "A40" 
        && option2Cell.textContent==="G1" ) {
            A40G1++; 
        }
        else if (option1Cell.textContent === "A40" 
        && option2Cell.textContent==="G2" ) {
            A40G2++;
        }
      
        
       else if (option1Cell.textContent === "A14" 
        && option2Cell.textContent==="GNF" ) {
            A14GNF++;
        }
        else if (option1Cell.textContent === "A14" 
        && option2Cell.textContent==="SC" ) {
            A14SC++;
        }
        else if (option1Cell.textContent === "A14" 
        && option2Cell.textContent==="G1" ) {
            A14G1++; 
        }
        else if (option1Cell.textContent === "A14" 
        && option2Cell.textContent==="G2" ) {
            A14G2++;
        }
      
        ///
       else if (option1Cell.textContent === "D6" 
        && option2Cell.textContent==="GNF" ) {
            D6GNF++;
        }
        else if (option1Cell.textContent === "D6" 
        && option2Cell.textContent==="SC" ) {
            D6SC++;
        }
        else if (option1Cell.textContent === "D6" 
        && option2Cell.textContent==="G1" ) {
            D6G1++; 
        }
        else if (option1Cell.textContent === "D6" 
        && option2Cell.textContent==="G2" ) {
            D6G2++;
        }
       
        ///
        else if (option1Cell.textContent === "A42" 
        && option2Cell.textContent==="GNF" ) {
            A42GNF++;
        }
        else if (option1Cell.textContent === "A42" 
        && option2Cell.textContent==="SC" ) {
            A42SC++;
        }
        else if (option1Cell.textContent === "A42" 
        && option2Cell.textContent==="G1" ) {
            A42G1++; 
        }
        else  
        //(option1Cell.textContent === "A42" 
        // && option2Cell.textContent==="G2" ) 
        {
            A42G2++;
        }
        total58=(A58G2*2010)+(A58G1*2010)+(A58SC*3130)
        +(A58GNF*1310);

        total40=(A40G2*1520)+(A40G1*1520)+(A40SC*2360)
        +(A40GNF*995);

        total14=(A14G2*2010)+(A14G1*2010)+(A14SC*3130)
        +(A14GNF*1310);

        total6=(D6G2*1750)+(D6G1*1750)+(D6SC*2710)
        +(D6GNF*1150);

        total42=(A42G2*2080)+(A42G1*2080)+(A42SC*3240)
        +(A42GNF*1355);
        total=total14+total40+total42+total58+total6;

        // document.getElementById("totals").textContent="TOTALS :"+total;

        document.getElementById("aff").textContent="A14 :"+total14+" _ "+"A40 :"+total40+" _ "
       +"A42 : " +total42+" _ "+"A58 : "+total58+" _ "+"D6 : "+total6;


        document.getElementById("A58").textContent="A58-G2  :"+(A58G2)+" _ "+"A58-G1  :"+(A58G1)+" _ "+"        A58-SC  :"+(A58SC)
        +" _ "+"    A58-GNF  :"+(A58GNF);


        document.getElementById("A40").textContent="A40-G2  :"+(A40G2)+" _ "+"A40-G1  :"+(A40G1)+" _ "+"A40-SC  :"+(A40SC)+" _ "
        +"A40-GNF  :"+(A40GNF);



        document.getElementById("A14").textContent="A14-G2  :"+(A14G2)+" _ "+"A14-G1  :"+(A14G1)+" _ "+"A14-SC  :"+(A14SC)+" _ "
        +"A14-GNF  :"+(A14GNF);



        document.getElementById("D6").textContent="D6-G2  :"+(D6G2)+" _ "+"D6-G1  :"+(D6G1)+" _ "+"D6-SC  :"+(D6SC)+" _ "
        +"D6-GNF  :"+(D6GNF);



        document.getElementById("A42").textContent="A42-G2  :"+(A42G2)+" _ "+"A42-G1  :"+(A42G1)+" _ "+"A42-SC  :"+(A42SC)+" _ "
        +"A42-GNF  :"+(A42GNF);


        
        document.getElementById("affichage").textContent=
        "Total : "+total;
        

}


}

