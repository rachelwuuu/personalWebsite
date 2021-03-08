var ctx=document.getElementById('pieChart').getContext('2d');
console.log(ctx);
let labels=['bird','cat','dog','snake'];
let colorList=['white','blue','green','red'];
var chart=new Chart(ctx, {
    type:'pie',
    data:{
        datasets:[{
            data: [5, 8,2,1],
            backgroundColor:colorList
        }],
        labels:labels


    },
    options: {
        responsive:true
    }
});